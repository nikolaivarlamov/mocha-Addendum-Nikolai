// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
//homePage = require('./page-objects/home.page'),

describe('Checkout IMDb.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test.

    it('Search game of thrones game on IMDb', async function() {
       // var homePage = new homePage(driver);
        // Load the page
        await driver.get('https://imdb.com');
        // Find the search box by id
        await driver.findElement(By.id('suggestion-search')).click();
        // Enter keywords and click enter
        await driver.findElement(By.id('suggestion-search')).sendKeys('games of thrones', Key.RETURN);


      // not a working solution right now

      // let title = await driver.getTitle();
      //  assert.include(title, 'games of thrones');

      // Still to work on finding correct function to find element by Text or xpath
      //  await driver.findElement(By.xpath('//*[@id="main"]/div/div[2]/table/tbody/tr[2]/td[2]')).click();


    });
    // close the browser after running tests
    after(() => driver && driver.quit());
})