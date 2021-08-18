import Art from "./art";
import { toMatchImageSnapshot } from 'jest-image-snapshot';
const puppeteer = require('puppeteer');
expect.extend({ toMatchImageSnapshot });


describe("Art", () =>{

    it('renders correctly', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://localhost:3000/Art');
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });

})

