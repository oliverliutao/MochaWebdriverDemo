const { describe, it, after, before } = require('mocha');
const Page = require('../lib/homePage');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const sinon  = require('sinon');

process.on('unhandledRejection', () => {});

(async function example() {
    try {
        describe ('AVIVA GI Home portal automated testing', async function () {
            this.timeout(50000);
            let driver, page;

            beforeEach (async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('https://login.aviva.com.sg/hm/home/#/getQuote');
            });

            afterEach (async () => {
                await page.quit();
            });

            it ('find check now button', async () => {
                // "spy" on `console.log()`
                // let spy = sinon.spy(console, 'log');
                const result = await page.findInputAndButton();
                // expect(result.inputEnabled).to.equal(true);
                expect(result.buttonText).to.include('validatePromotionCode');

                // restore the original function
                // spy.restore();
            });

            // it ('put keyword in search box and click search button', async () => {
            //     const result = await page.submitKeywordAndGetResult();
            //     expect(result.length).to.be.above(10);
            // });
        });
    } catch (ex) {
        console.log (new Error(ex.message));
    } finally {

    }
})();