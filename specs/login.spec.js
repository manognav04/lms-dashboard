import * as page from '../page_object/login.page';
import { browser } from 'protractor';
import { config } from '../config';

describe('LMS dashboard', () => {
    beforeAll(() => {
        browser.get(config.baseUrl);
        browser.refresh();
        browser.sleep(2000);
    });

    it('login page', () => {
        expect(page.getLogo()).toBe(true);
    });
})