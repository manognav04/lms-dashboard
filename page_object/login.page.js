import { element, browser } from "protractor";

const logo = element(by.css('body > div > div > div > div > div > div > div > form > center > img'));
const txtEmail = element(by.css("#__BVID__8"));
const txtPassword = element(by.xpath('//*[@id="__BVID__9"]'));
const txtMsg = element(by.xpath('/html/body/div/div/div/div/div/div/div/form/p'));
const btnLogin = element(by.xpath('//*[@id="login-button"]'));

export const getLogo = async() => {
    await logo.isDisplayed();
    // browser.sleep(2000);
}
