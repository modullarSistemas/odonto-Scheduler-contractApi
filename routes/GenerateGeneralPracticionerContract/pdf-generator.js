const ContractHTMLGenerator = require('../../lib/contractHTMLGenerator.js');
const express = require('express');
const router = express.Router();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const puppeteer = require('puppeteer')

router.put('/', async function(req, res, next) {    

    let treatment = req.body.treatment;

    const contractHTMLGenerator = new ContractHTMLGenerator(treatment);
    let contentHtml = contractHTMLGenerator.generateHTML();
    
    const dom = new JSDOM(contentHtml);
    const document = dom.window.document; 
    
    const browser = await puppeteer.launch({ 
        headless: true, 
        executablePath: '/usr/bin/chromium',    
        args: [
        "--no-sandbox",
        "--disable-gpu"]
    });

    const page = await browser.newPage();
    await page.setContent(document.documentElement.innerHTML);

    const pdf = await page.pdf({ path: `./files/contrato-tratamento-${treatment.id}.pdf`, format: 'A4' });
    await browser.close();

    //res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
	res.send('LOL')
    
});


module.exports = router;