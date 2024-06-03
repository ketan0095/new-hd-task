// tests/seleniumTest.js

const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Create Next App"), 1000); // Modify the expected title
    const elements = await driver.findElements(By.tagName("a"));
    console.log(`Found ${elements.length} anchor elements`);
    for (let element of elements) {
      const text = await element.getText();
      console.log(`Anchor text: ${text}`);
    }
  } catch (error) {
    console.error("[X] : Error occurred:", error.message);
  } finally {
    await driver.quit();
  }
})();
