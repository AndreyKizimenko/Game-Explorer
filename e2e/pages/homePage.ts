import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly searchInput: Locator;
  readonly gameCards: Locator;
  readonly genres: Locator;
  readonly platformsFilter: Locator;
  readonly orderByFilter: Locator;
  readonly darkModeToggle: Locator;

  constructor(page: Page) {
    this.searchInput = page.getByRole("textbox", { name: "Search" });
    this.gameCards = page.locator(".infinite-scroll-component");
    this.genres = page.getByRole("list");
    this.platformsFilter = page.getByRole("button", { name: "Platforms" });
    this.orderByFilter = page.getByRole("button", { name: "Order by" });
    this.darkModeToggle = page.getByRole("button", { name: "Dark Mode" });
  }
}
