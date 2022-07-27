class ContractHTMLGenerator {

    medicalQuestionaire;
    odontologicalQuestionaire;
    pacientName;
    treatment;
    comarca;

    constructor(treatment) {
        this.treatment = treatment;
        let anamnesis = JSON.parse(treatment.anamnesis);
        this.medicalQuestionaire = anamnesis.medicalQuestionaire;
        this.odontologicalQuestionaire = anamnesis.odontologicalQuestionaire;  
    }

    generateHTML() {
        let medicalAnamnesisHTML = this.generateAnamnesisHtml(this.medicalQuestionaire);
        let odontologicalAnamnesisHTML = this.generateAnamnesisHtml(this.odontologicalQuestionaire);
        let proceduresTableDataHTML = this.generateProceduresTableDataHTML(this.treatment.procedures);

        switch(this.treatment.treatmentType) {
            case "Clínico Geral":
                const HTMLTemplate = require('./contractHTMLTemplate');
            break;

            case "Ortodontia":
                const HTMLTemplate = require('./contractHTMLTemplate');
            break;

            case "Implantodontia":
                const HTMLTemplate = require('./contractHTMLTemplate');
            break;

            case "Harmonização Facial":
                const HTMLTemplate = require('./contractHTMLTemplate');
            break;
        }

        return HTMLTemplate(
            this.treatment.id, this.treatment.pacient.name, medicalAnamnesisHTML, odontologicalAnamnesisHTML, 
            proceduresTableDataHTML, this.treatment.totalCost, this.treatment.prothesisCost
            );
    }

    generateAnamnesisHtml(questions) {

        let questionsHtml = "";
        questions.forEach((question) => {

            if (question.type == "text") {
                questionsHtml += this.getTextQuestionHtml(question)
            }

            if (question.type == "checkbox") {
                questionsHtml += this.getCheckboxQuestionHtml(question)
            }

            if (question.type == "extended-checkbox") {
                questionsHtml += this.getExtendedCheckboxQuestionHtml(question);
            }

            if (question.type == "multiple-checkbox") {
                questionsHtml += this.getExtendedCheckboxQuestionHtml(question);
            }

        });

        return questionsHtml; 
    }

    generateProceduresTableDataHTML(procedures) {
        let tableHtml = "";
        procedures.forEach((procedure) => {
            if(procedure.needProthesis) {
                tableHtml += `
                <tr>
                    <td>
                        ${procedure.procedureType.name}
                    <br>
                        <span class="font-weight-bold">Protético:</span> ${procedure.prothesis.name}
                    </td>
                    <td>
                        R$ ${procedure.procedureType.cost},00
                    <br>
                        R$ ${procedure.prothesis.cost},00                  
                    </td>
                </tr>
                `;
            } else {
                tableHtml += `
                <tr>
                    <td>
                        ${procedure.procedureType.name}
                    </td>
                    <td>
                        R$ ${procedure.procedureType.cost},00
                    </td>
                </tr>
             `;
            }

        });

        return tableHtml;
    }

    getTextQuestionHtml(question) {
        return ` 
        <div>
            <p class="question"> ${question.question} </p>	
            <p class="answer"> ${question.answer} </p>
        </div>
      `;
    }

    getCheckboxQuestionHtml(question) {
        let questionAnswer;
        if (question.answer)
            questionAnswer = "Sim."
        else
            questionAnswer = "Não."

        return `
        <div>
          <p class="question"> ${question.question} </p>	
          <p class="answer"> ${questionAnswer} </p>
        </div>
        `
    }

    getExtendedCheckboxQuestionHtml(question) {
        let questionAnswer;
        if (question.answer)
            questionAnswer = "Sim."
        else
            questionAnswer = "Não."

        if (!question.answer) {
            return `
            <div>
                <p class="question"> ${question.question} </p>	
                <p class="answer"> ${questionAnswer} </p>
            </div>
                `;
        }

        let extendedQuestionAnswer;
        if (question.extension.answer)
            extendedQuestionAnswer = "Sim."
        else
            extendedQuestionAnswer = "Não."

        return `
            <div>
              <p class="question"> ${question.question} </p>	
              <p class="answer"> ${questionAnswer} </p>
              <p class="question"> ${question.extension.question} </p>	
              <p class="answer"> ${extendedQuestionAnswer} </p>
            </div>
        `;

    }

    getMultipleCheckboxQUestionHtml(question) {
        let multipleQuestions = "";
        question.questionChoices.forEach((question) => {
            let questionAnswer;
            if (question.answer)
                questionAnswer = "Sim."
            else
                questionAnswer = "Não."

            questionAnswer = `
            <div>
                <p class="question"> ${question.question} </p>	
                <p class="answer"> ${questionAnswer} </p>
            </div>
        `
            multipleQuestions += questionAnswer
        });
        return multipleQuestions;
    }



}

module.exports = ContractHTMLGenerator;