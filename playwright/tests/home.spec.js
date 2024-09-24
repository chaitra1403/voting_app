const { test, expect } = require("@playwright/test");

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:30041/");
  });

  test("should load home page", async ({ page }) => {
    //await expect(page).toHaveURL("");
    await expect(page.locator(".heading")).toHaveText(
      "How do you create a K8S cluster on your local system ?"
    );
  });

  test("should display candidates", async ({ page }) => {
    const candidates = await page.locator(".cardContainer .card");
    await expect(candidates).toHaveCount(4); // Assuming there are 5 candidates
  });

  test("should vote for a candidate", async ({ page }) => {
    const firstCandidate = page.locator(".cardContainer .card").first();
    await firstCandidate.click();
    // await page.locator("button").click(); // Assuming there is a button to submit the vote
    await expect(page.locator(".notification")).toHaveText(
      "Vote registered for Roost"
    );
  });
});
