const { test, expect } = require("@playwright/test");

test.describe("Result Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:30041/voter/result");
  });

  test("should load result page", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:30041/voter/result");
    await expect(page.locator(".heading")).toHaveText(
      "Developers preference for building K8S cluster"
    );
  });

  test("should display results", async ({ page }) => {
    const results = await page.locator(".cardContainer .card");
    await expect(results.first().locator(".voteCount")).toHaveText(/^\d+%$/); // Assuming vote count is displayed as percentage
  });
});
