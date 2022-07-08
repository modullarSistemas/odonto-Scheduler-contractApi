//https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/
//put html into string `${}` instead of manipulation DOM to substitute fields
const express = require('express');
const router = express.Router();
const fs = require('fs');
const jsdom = require("jsdom");
const path = require('path');
const { JSDOM } = jsdom;
const puppeteer = require('puppeteer')

router.put('/', async function(req, res, next) {    
    
    const contentHtml = fs.readFileSync(path.resolve(__dirname, 'contract.html'), 'utf8');
    const dom = new JSDOM(contentHtml);
    const document = dom.window.document; 

    document.getElementById("pacientName").innerHTML = "TESTE TESTE #@#@#@#@#@#@#@ TESTE TESTE";
    
    const browser = await puppeteer.launch({ 
        headless: true, 
        executablePath: '/usr/bin/chromium',    
        args: [
        "--no-sandbox",
        "--disable-gpu"]
    });

    const page = await browser.newPage();
    await page.setContent(document.documentElement.innerHTML);

    const pdf = await page.pdf({ path: './test.pdf', format: 'A4' });
    await browser.close();

    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
	res.send(pdf)
});

module.exports = router;