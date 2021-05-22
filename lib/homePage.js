let Page = require('./basePage');
const locator = require('../utils/locator');
const fake = require('../utils/fakeData');

const page1_checknow_btn_id = locator.page1_checknow_btn_id;
// const resultConfirmationSelectorId = locator.resultConfirmationId;

const fakeNameKeyword = fake.nameKeyword;

let searchInput, searchButton, resultStat;

Page.prototype.findCheckNowButtonandClick = async function () {
    // searchInput = await this.findById(searchInputSelectorId);
    searchButton = await this.findById(page1_checknow_btn_id);


    const result = await this.driver.wait(async function () {
        const searchButtonText = await searchButton.getAttribute('ng-click');
        // const searchInputEnableFlag = await searchInput.isEnabled();

        return {
            // inputEnabled: searchInputEnableFlag,
            buttonText: searchButtonText
        }
    }, 15000);

    return result;
};

// Page.prototype.submitKeywordAndGetResult = async function() {
//     await this.findInputAndButton();
//     await this.write(searchInput, fakeNameKeyword);
//     await searchButton.click();
//     resultStat = await this.findById(resultConfirmationSelectorId);
//     return await this.driver.wait(async function () {
//         return await resultStat.getText();
//     }, 15000);
// };

module.exports = Page;