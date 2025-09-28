// services/reportService.js
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebaseInit.js';
import { FIREBASE_COLLECTIONS, REPORT_TYPES, REPORT_STATUSES } from '../constants/index.js';
import { SecurityUtils } from '../utils/securityUtils.js';

// Collection name in Firestore
const COLLECTION_NAME = FIREBASE_COLLECTIONS.ANONYMOUS_REPORTS;

// Add a new anonymous report with security validation
export const submitReport = async (reportData, recaptchaToken = null) => {
  try {
    // Validate and sanitize input
    const validation = SecurityUtils.validateReportData(reportData);
    if (!validation.isValid) {
      return { success: false, error: validation.errors.join(', ') };
    }

    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      report_type: validation.sanitizedData.report_type,
      description: validation.sanitizedData.description,
      status: REPORT_STATUSES.PENDING,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
      // Security metadata (anonymized)
      has_recaptcha: !!recaptchaToken,
      // Explicitly no user identification for anonymity
      ip_address: null, // Not stored for privacy
      user_agent: null, // Not stored for privacy
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: 'Failed to submit report. Please try again.' };
  }
};



// Export constants for use in components
export { REPORT_TYPES, REPORT_STATUSES };