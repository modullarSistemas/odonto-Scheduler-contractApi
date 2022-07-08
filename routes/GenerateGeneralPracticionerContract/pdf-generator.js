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

function getQuestionsHtml(questions) {
    
    let questionsHtml = "";
    questions.forEach( (question) => {
        if(question.type == "text") {
          questionsHtml += this.getTextQuestionHtml(question)
      }
      
      if(question.type == "checkbox") {
          questionsHtml += this.getCheckboxQuestionHtml(question)
      }
      
      if(question.type == "extended-checkbox"){
          questionsHtml += this.getExtendedCheckboxQuestionHtml(question);
      }
      
      if(question.type == "multiple-checkbox"){
          questionsHtml += this.getExtendedCheckboxQuestionHtml(question);
      }
      
    });
}

function getTextQuestionHtml(question) {
	return ` 
  <div>
  	<p> ${question.question} </p>	
  	<p> ${question.answer} </p>
  </div>
  `;
}

function getCheckboxQuestionHtml(question) {
	let questionAnswser;
  if(question.answer)
  	questionAnswer = "SIM"
  else
  	questionAnswer = "NAO"
  
  return `
  	  <div>
  	<p> ${question.question} </p>	
  	<p> ${questionAnswer} </p>
  </div>
  `
}

function getExtendedCheckboxQuestionHtml(question) {
	let questionAnswer;
    if(question.answer)
  	questionAnswer = "SIM"
  else
  	questionAnswer = "NAO"
    
  if(!question.answer) {
    return `
  	 <div>
  		<p> ${question.question} </p>	
  		<p> ${questionAnswer} </p>
  		</div>
  		`;
   }
   
  let extendedQuestionAnswer;
  if(question.extension.answer)
  	extendedQuestionAnswer = "SIM"
  else
  	extendedQuestionAnswer = "NAO"
    
   return `
    	<div>
  		<p> ${question.question} </p>	
  		<p> ${questionAnswer} </p>
  		<p> ${question.extension.question} </p>	
  		<p> ${extendedQuestionAnswer} </p>
  		</div>
    `;
   
}

function getMultipleCheckboxQUestionHtml(question) {
	let multipleQuestions = "";
	question.questionChoices.forEach( (question) => {
  	let questionAnswer;
    if(question.answer)
  		questionAnswer = "SIM"
  	else
  		questionAnswer = "NAO"
    
    questionAnswer = `
    	<div>
        <p> ${question.question} </p>	
        <p> ${questionAnswer} </p>
  		</div>
    `
   	multipleQuestions += questionAnswer 
  });
  return multipleQuestions;
}

module.exports = router;