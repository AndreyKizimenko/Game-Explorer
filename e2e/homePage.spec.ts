import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.describe("Home Page Elements Visibility", () => {
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

  test("dark mode toggle works", async ({ page }) => {
    const homePage = new HomePage(page);
    const darkTheme = "rgb(26, 32, 44)";
    const lightTheme = "rgb(255, 255, 255)";

    let backgroundColor = await homePage.getBackgroundColor();
    expect(backgroundColor).toBe(darkTheme);

    await homePage.darkModeToggle.click();
    backgroundColor = await homePage.getBackgroundColor();
    expect(backgroundColor).toBe(lightTheme);

    await homePage.darkModeToggle.click();
    backgroundColor = await homePage.getBackgroundColor();
    expect(backgroundColor).toBe(darkTheme);
  });
});
