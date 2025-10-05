import { test, expect } from '@playwright/test';

test.describe('Cross-Browser Report Form Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/report');
  });

  test('should load report page correctly', async ({ page }) => {
    // Check page title and form elements
    await expect(page.getByText('Anonymous Report')).toBeVisible();
    await expect(page.locator('select[name="report_type"]')).toBeVisible();
    await expect(page.locator('textarea[name="description"]')).toBeVisible();
    await expect(page.getByRole('button', { name: /submit report/i })).toBeVisible();
  });

  test('should validate form input across browsers', async ({ page }) => {
    // Try to submit empty form - should show validation
    await page.getByRole('button', { name: /submit report/i }).click();
    
    // HTML5 validation should prevent submission
    // Check that the form didn't submit (no success message)
    const successMessage = page.getByText(/your report has been submitted/i);
    await expect(successMessage).not.toBeVisible();
  });

  test('should handle form input correctly', async ({ page }) => {
    // Fill out the form
    await page.locator('select[name="report_type"]').selectOption('harassment');
    await page.locator('textarea[name="description"]').fill('This is a test report with sufficient length to pass validation requirements.');
    
    // Character counter should update
    await expect(page.locator('.char-count')).toContainText('/1000');
  });

  test('should be responsive on mobile', async ({ page, isMobile }) => {
    if (isMobile) {
      // Form should be visible and usable on mobile
      await expect(page.locator('select[name="report_type"]')).toBeVisible();
      await expect(page.locator('textarea[name="description"]')).toBeVisible();
      
      // Text should be readable (not too small)
      const description = page.locator('textarea[name="description"]');
      await expect(description).toBeVisible();
    }
  });

  test('should handle CSS Grid layout', async ({ page }) => {
    // Check that the form container renders properly
    const formContainer = page.locator('.report-form');
    await expect(formContainer).toBeVisible();
    
    // Check that form groups are properly laid out
    const formGroups = page.locator('.form-group');
    await expect(formGroups).toHaveCount(2); // Report type + Description
  });
});