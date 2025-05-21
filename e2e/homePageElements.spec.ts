import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

test.describe("Home Page Elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("search input is visible", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.searchInput).toBeVisible();
  });

  test("genres are visible", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.genres).toBeVisible();
  });

  test("platforms filter is visible", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.platformsFilter).toBeVisible();
  });

  test("order by filter is visible", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.orderByFilter).toBeVisible();
  });

  test("dark mode toggle is visible", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.darkModeToggle).toBeVisible();
  });

  test("game cards are visible", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.gameCards).toBeVisible({ timeout: 30000 });
  });
});
