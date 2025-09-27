// services/reportService.js
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  orderBy, 
  query,
  serverTimestamp,
  where 
} from 'firebase/firestore';
import { db } from '../config/firebaseInit.js';
import { FIREBASE_COLLECTIONS, REPORT_TYPES, REPORT_STATUSES } from '../constants/index.js';
import { SecurityUtils } from '../utils/securityUtils.js';

// Collection name in Firestore
const COLLECTION_NAME = FIREBASE_COLLECTIONS.ANONYMOUS_REPORTS;

// Add a new anonymous report with security validation
export const submitReport = async (reportData, recaptchaScore = null) => {
  try {
    // Enhanced rate limiting check with reCAPTCHA consideration
    const hasValidRecaptcha = recaptchaScore && recaptchaScore >= 0.5;
    const rateLimit = SecurityUtils.checkRateLimit('report_submission', 3, 300000, hasValidRecaptcha);
    if (!rateLimit.allowed) {
      return { 
        success: false, 
        error: `Rate limit exceeded. Please wait ${rateLimit.resetTime} seconds before submitting another report.` 
      };
    }

    // Validate and sanitize input with reCAPTCHA score
    const validation = SecurityUtils.validateReportData(reportData, recaptchaScore);
    if (!validation.isValid) {
      return { success: false, error: validation.errors.join(', ') };
    }

    // Generate security fingerprint for tracking
    const fingerprint = SecurityUtils.generateFingerprint();

    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      report_type: validation.sanitizedData.report_type,
      description: validation.sanitizedData.description,
      status: REPORT_STATUSES.PENDING,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
      // Security metadata (anonymized)
      security_score: recaptchaScore || 0,
      fingerprint_hash: fingerprint,
      // Explicitly no user identification for anonymity
      ip_address: null, // Not stored for privacy
      user_agent: null, // Not stored for privacy
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: 'Failed to submit report. Please try again.' };
  }
};

// Get all reports (for admin viewing)
export const getAllReports = async () => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME), 
      orderBy('created_at', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const reports = [];
    querySnapshot.forEach((doc) => {
      reports.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, reports };
  } catch (error) {
    throw error;
  }
};

// Get reports by status (for filtered admin viewing)
export const getReportsByStatus = async (status) => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('status', '==', status),
      orderBy('created_at', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const reports = [];
    querySnapshot.forEach((doc) => {
      reports.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, reports };
  } catch (error) {
    throw error;
  }
};

// Update report status (for admin management)
export const updateReportStatus = async (reportId, newStatus) => {
  try {
    // Validate status
    if (!Object.values(REPORT_STATUSES).includes(newStatus)) {
      throw new Error(`Invalid status: ${newStatus}`);
    }

    const reportRef = doc(db, COLLECTION_NAME, reportId);
    await updateDoc(reportRef, {
      status: newStatus,
      updated_at: serverTimestamp()
    });
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get report statistics (for admin dashboard)
export const getReportStats = async () => {
  try {
    const reports = await getAllReports();
    if (!reports.success) {
      return reports;
    }

    const stats = {
      total: reports.reports.length,
      pending: reports.reports.filter(r => r.status === REPORT_STATUSES.PENDING).length,
      under_review: reports.reports.filter(r => r.status === REPORT_STATUSES.UNDER_REVIEW).length,
      resolved: reports.reports.filter(r => r.status === REPORT_STATUSES.RESOLVED).length,
      dismissed: reports.reports.filter(r => r.status === REPORT_STATUSES.DISMISSED).length,
      by_type: {}
    };

    // Count by report type
    Object.values(REPORT_TYPES).forEach(type => {
      stats.by_type[type] = reports.reports.filter(r => r.report_type === type).length;
    });

    return { success: true, stats };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Validate report data before submission
export const validateReportData = (reportData) => {
  const errors = [];

  if (!reportData.report_type || !Object.values(REPORT_TYPES).includes(reportData.report_type)) {
    errors.push('Valid report type is required');
  }

  if (!reportData.description || reportData.description.trim().length < 10) {
    errors.push('Description must be at least 10 characters long');
  }

  if (reportData.description && reportData.description.length > 1000) {
    errors.push('Description must be less than 1000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Export constants for use in components
export { REPORT_TYPES, REPORT_STATUSES };