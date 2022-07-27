const ContractHTMLGenerator = require('./lib/contractHTMLGenerator.js');

let treatment = {};
const contractHTMLGenerator = new ContractHTMLGenerator(treatment);
let contentHtml = contractHTMLGenerator.generateHTML();

console.log(contentHtml);

let treatmentRes = {
    "id": 112,
    "pacient": {
        "id": 42,
        "franchiseId": 2,
        "name": "Kevo",
        "birthDate": "2/7/1990 2:00:00 AM",
        "cpf": "02939194145",
        "rg": "5123123",
        "gender": "Masculino",
        "address": null,
        "email": "kevo@gmail.com",
        "phone": "5141231",
        "profession": "Empresario",
        "civilState": "married",
        "dependants": []
    },
    "procedures": [
        {
            "id": 92,
            "treatmentId": 112,
            "dentist": null,
            "tooth": 0,
            "needProthesis": false,
            "status": 3,
            "prothesis": null,
            "procedureType": {
                "id": 43,
                "name": "Limpeza",
                "cost": 500,
                "treatmentType": "Clínico Geral"
            }
        },
        {
            "id": 93,
            "treatmentId": 112,
            "dentist": null,
            "tooth": 0,
            "needProthesis": false,
            "status": 0,
            "prothesis": null,
            "procedureType": {
                "id": 44,
                "name": "Tratamento de Canal",
                "cost": 1000,
                "treatmentType": "Clínico Geral"
            }
        }
    ],
    "installments": [
        {
            "id": 238,
            "treatmentId": 112,
            "cost": 750,
            "due": "2022-08-05T00:00:00",
            "payday": "0001-01-01T00:00:00",
            "paymentMethod": ""
        },
        {
            "id": 239,
            "treatmentId": 112,
            "cost": 750,
            "due": "2022-09-05T00:00:00",
            "payday": "0001-01-01T00:00:00",
            "paymentMethod": ""
        }
    ],
    "treatmentType": "Clínico Geral",
    "description": "Descricao do tratamento",
    "totalCost": 1500,
    "prothesisCost": 0,
    "anamnesis": "{\"odontologicalQuestionaire\":[{\"question\":\"O que mais incomoda?\",\"answer\":\"\",\"type\":\"text\"},{\"question\":\"Esteticamente, o que mudaria?\",\"answer\":\"\",\"type\":\"text\"},{\"question\":\"Gostaria de mudar o formato e/ou tamanho dos dentes?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Gostaria que os dentes fossem mais claros?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Sente dores nas ATM's, cervical, ombros ou região temporal?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Tem dores de cabeça frequentes?\",\"answer\":false,\"type\":\"extended-checkbox\",\"extension\":{\"question\":\"Em qual região?\",\"answer\":\"\",\"type\":\"text\"}},{\"question\":\"Sente apertar os dentes durante a noite?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Acorda com musculatura do rosto cansada?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Tem limitação de abertura de boca?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Já travou alguma vez com a boca aberta ou fechada?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Sente que seus dentes se encaixam bem?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Ambos os lados?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"tem habito de morder objetos? (roer unha)\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Se fosse diagnosticada com a necessidade do uso do aparelho, como seria isso na sua rotina?\",\"answer\":\"\",\"type\":\"text\"},{\"question\":\"Tem alguma queixa facial?\",\"answer\":false,\"type\":\"extended-checkbox\",\"extension\":{\"question\":\"Qual?\",\"answer\":\"\",\"type\":\"text\"}},{\"question\":\"Já fez alguma intervenção na face?\",\"answer\":false,\"type\":\"extended-checkbox\",\"extension\":{\"question\":\"Onde?\",\"answer\":\"\",\"type\":\"text\"}}],\"medicalQuestionaire\":[{\"question\":\"Recebeu algum tratamento medico nos ultimos dois anos?\",\"answer\":false,\"type\":\"extended-checkbox\",\"extension\":{\"question\":\"Quais?\",\"answer\":\"\",\"type\":\"text\"}},{\"question\":\"Já teve ou tem alguma dessas enfermidades?\",\"type\":\"multiple-checkbox\",\"questionChoices\":[{\"choice\":\"Problemas cardíacos\",\"answer\":false},{\"choice\":\"Hepatite\",\"answer\":false},{\"choice\":\"Pressão alta ou baixa\",\"answer\":false},{\"choice\":\"Anemia\",\"answer\":false},{\"choice\":\"HIV\",\"answer\":false},{\"choice\":\"Renal\",\"answer\":false},{\"choice\":\"Respiratório\",\"answer\":false},{\"choice\":\"Problemas nervosos\",\"answer\":false},{\"choice\":\"Diabetes\",\"answer\":false},{\"choice\":\"Epilepsia\",\"answer\":false},{\"choice\":\"Reumatismo\",\"answer\":false},{\"choice\":\"Depressão\",\"answer\":false},{\"choice\":\"Febre reumatica\",\"answer\":false}]},{\"question\":\"Toma algum medicamento diariamente?\",\"answer\":false,\"type\":\"extended-checkbox\",\"extension\":{\"question\":\"Quais?\",\"answer\":\"\",\"type\":\"text\"}},{\"question\":\"Tem alergia a algum medicamente ou anestésico?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Já fez cirurgias bucais?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Já fez transfusão de sangue?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Fuma?\",\"answer\":false,\"type\":\"extended-checkbox\",\"extension\":{\"question\":\"Ha quanto tempo? Quantos cigarros por dia?\",\"answer\":\"\",\"type\":\"text\"}},{\"question\":\"Faz uso de bebidas alcoólicas frequentemente?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Costuma sentir tontura ou desmaio?\",\"answer\":false,\"type\":\"checkbox\"},{\"question\":\"Tem fobias? (Sangue, agulhas, 'motorzinho do dentista')?\",\"answer\":false,\"type\":\"extended-checkbox\",\"extension\":{\"question\":\"Quais?\",\"answer\":\"\",\"type\":\"text\"}},{\"question\":\"Tem problemas alimentares? (Refluxo, bulimia, alguma intolerância)?\",\"answer\":false,\"type\":\"extended-checkbox\",\"extension\":{\"question\":\"Quais?\",\"answer\":\"\",\"type\":\"text\"}},{\"question\":\"Esta gravida?\",\"answer\":false,\"type\":\"extended-checkbox\",\"extension\":{\"question\":\"De quantas semanas?\",\"answer\":\"\",\"type\":\"text\"}},{\"question\":\"Tem algo que não foi perguntado que você gostaria de acrescentar?\",\"answer\":\"\",\"type\":\"text\"},{\"question\":\"Observações:\",\"answer\":\"\",\"type\":\"text\"}]}",
    "status": "Em Progresso"
}