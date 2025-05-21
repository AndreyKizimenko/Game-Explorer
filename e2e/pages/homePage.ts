import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly searchInput: Locator;
  readonly gameCards: Locator;
  readonly genres: Locator;
  readonly platformsFilter: Locator;
  readonly orderByFilter: Locator;
  readonly darkModeToggle: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", { name: "Search" });
    this.gameCards = page.locator(".infinite-scroll-component");
    this.genres = page.getByRole("list");
    this.platformsFilter = page.getByRole("button", { name: "Platforms" });
    this.orderByFilter = page.getByRole("button", { name: "Order by" });
    this.darkModeToggle = page.getByRole("button", { name: "Mode" });
  }

  async getBackgroundColor() {
    return this.page.evaluate(() => {
      const body = document.body;
      const computedStyle = window.getComputedStyle(body);
      return computedStyle.backgroundColor;
    });    
  }

  
}
