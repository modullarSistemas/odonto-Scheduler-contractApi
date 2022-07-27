module.exports = ( 
   treatmentId, pacientName, medicalQuestionaireHTML, odontologicalQuestionaireHTML, proceduresTableDataHTML, totalCost, prothesisCost
   ) => `

<style>
   body {
      background: rgb(204, 204, 204);
   }

   page {
      background: white;
      display: block;
      margin: 0 auto;
      margin-bottom: 0.5cm;
      box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
   }

   page[size="A4"] {
      width: 21cm;
      height: 29.7cm;
   }

   page[size="A4"][layout="portrait"] {
      width: 29.7cm;
      height: 21cm;
   }

   @media print {

      body,
      page {
         margin: 0;
         box-shadow: 0;
      }
   }

   div.Section1 {
      page: Section1;
      padding: 10px;
   }

   .font-weight-bold {
      font-weight: bold;
   }

   .text-align-center {
      text-align: center;
   }

   .page-padding {
      padding-top: 40px;
      padding-bottom: 40px;
      padding-left: 100px;
      padding-right: 100px;
   }

   .sign-underline {
      width: 80%;
      font-weight: bold;
      padding-top: 5px;
      border-top: 1px solid black;
      margin-top: 20px;
   }

   .question {
      font-weight: bold;
      font-size: 10px; 
   }

   .answer {
      font-size: 9px;
   }

   table{ 
      text-align: left;
      font-size: 13px; 
      font-family: serif; 
      border-collapse: collapse; 

   }

   tr {
      border-bottom: 1pt solid black;
   }

   .table-container { 
      width: 500px; 
      height: 300px; 
      overflow: scroll;
   }

   table th, table td {
      white-space: nowrap;
      padding: 10px 20px;
   }

   table tr th:first-child, table td:first-child {
      position: sticky;
      width: 100px;
      left: 0;
      z-index: 10;
      background: #fff;
   }

   table tr th:first-child {
      z-index: 11;
   }
   
   table tr th {
      position: sticky;
      top: 0;
      z-index: 9;
      background: #fff;
   }
</style>

<html>
<page size="A4">
   <div class="page-padding">
      <h3 class="text-align-center">
         CONTRATO DE PRESTAÇÃO DE SERVIÇOS ODONTOLÓGICOS N° ${treatmentId}
      </h3>

      <h3>
         1) DAS PARTES CONTRATANTES:
      </h3>

      <h3>
         1.1 - CONTRATANTE: ${pacientName}
      </h3>

      <h3>
         1.2 – PACIENTE: ${pacientName}
      </h3>

      <h3>
         1.3 – CONTRATADA: PLANEJA ODONTO
      </h3>

      <h3>
         2) OBJETO DO CONTRATO
      </h3>

      <p>
         O objeto do presente instrumento é a prestação de serviços odontológicos propostos e
         autorizados no paciente ${pacientName}, a ser realizado pelo corpo clínico da CONTRATADA,
         conforme avaliação discriminada que passa a fazer parte deste.
      </p>

      <h3>
         3) DO VALOR E PAGAMENTO
      </h3>

      <p>
         <span class="font-weight-bold"> 3.1) </span> Para incentivar a pontualidade no que se refere os pagamentos,
         a CONTRATADA aplicará, sobre o valor da parcela,
         desconto no importe de 10% (dez por cento) para pagamento até a data do vencimento.
      </p>

      <p>
         <span class="font-weight-bold"> 3.2)</span> Caso o CONTRATANTE/PACIENTE não realizar o pagamento até a data do
         vencimento escolhida pelo mesmo,
         incorrerá sobre o valor da parcela multa no importe de 2% (dois por cento) e juros de 0,0333% (zero vírgula
         zero trezentos e trinta e três por cento)
         por dia de atraso e IGP-M.
      </p>

      <p>
         <span class="font-weight-bold"> 3.3)</span> Em caso de conclusão do tratamento por parte da CONTRATADA,
         fica firmado que: o inadimplemento de 2 (duas) parcelas importará no vencimento integral e antecipado
         do débito, sujeitando o(a) CONTRANTE/DEVEDOR(A), além da execução do presente instrumento, ao pagamento
         do valor integral do débito, sobre o qual incidirá a aplicação de multa de 2%, juros de mora de 1% ao
         mês e correção monetária pelo IGP-M e mais custas processuais e honorários advocatícios na base de 20%
         sobre o valor total do débito.
      </p>

      <h3>
         4) DA DURAÇÃO DO CONTRATO
      </h3>

      <p>
         O presente instrumento vigerá até que sejam satisfeitas todas as obrigações ora
         assumidas pelas partes, comprometendo-se ambas em não protelar o tratamento e
         colaborar com o regular andamento do que fora firmado, salvo a hipótese que o
         profissional responsável julgue a suspensão necessária para o sucesso do tratamento.
      </p>
   </div>
</page size="A4">

<page size="A4">
   <div class="page-padding">
      <h3 class="text-align-center">
         CONTRATO DE PRESTAÇÃO DE SERVIÇOS ODONTOLÓGICOS N° ${treatmentId}
      </h3>

      <h3>
         1) DAS PARTES CONTRATANTES:
      </h3>

      <h3>
         1.1 - CONTRATANTE: ${pacientName}
      </h3>

      <h3>
         1.2 – PACIENTE: ${pacientName}
      </h3>

      <h3>
         1.3 – CONTRATADA: PLANEJA ODONTO
      </h3>

      <h3>
         2) OBJETO DO CONTRATO
      </h3>

      <p>
         O objeto do presente instrumento é a prestação de serviços odontológicos propostos e
         autorizados no paciente ${pacientName}, a ser realizado pelo corpo clínico da CONTRATADA,
         conforme avaliação discriminada que passa a fazer parte deste.
      </p>

      <h3>
         3) DO VALOR E PAGAMENTO
      </h3>

      <p>
         <span class="font-weight-bold"> 3.1) </span> Para incentivar a pontualidade no que se refere os pagamentos,
         a CONTRATADA aplicará, sobre o valor da parcela,
         desconto no importe de 10% (dez por cento) para pagamento até a data do vencimento.
      </p>

      <p>
         <span class="font-weight-bold"> 3.2)</span> Caso o CONTRATANTE/PACIENTE não realizar o pagamento até a data do
         vencimento escolhida pelo mesmo,
         incorrerá sobre o valor da parcela multa no importe de 2% (dois por cento) e juros de 0,0333% (zero vírgula
         zero
         trezentos e trinta e três por cento)
         por dia de atraso e IGP-M.
      </p>

      <p>
         <span class="font-weight-bold"> 3.3)</span> Em caso de conclusão do tratamento por parte da CONTRATADA,
         fica firmado que: o inadimplemento de 2 (duas) parcelas importará no vencimento integral e antecipado
         do débito, sujeitando o(a) CONTRANTE/DEVEDOR(A), além da execução do presente instrumento, ao pagamento
         do valor integral do débito, sobre o qual incidirá a aplicação de multa de 2%, juros de mora de 1% ao
         mês e correção monetária pelo IGP-M e mais custas processuais e honorários advocatícios na base de 20%
         sobre o valor total do débito.
      </p>

      <h3>
         4) DA DURAÇÃO DO CONTRATO
      </h3>

      <p>
         O presente instrumento vigerá até que sejam satisfeitas todas as obrigações ora
         assumidas pelas partes, comprometendo-se ambas em não protelar o tratamento e
         colaborar com o regular andamento do que fora firmado, salvo a hipótese que o
         profissional responsável julgue a suspensão necessária para o sucesso do tratamento.
      </p>


      <h3>
         5) DAS OBRIGAÇÕES DA CONTRATADA
      </h3>

      <p>
         <span class="font-weight-bold"> 5.1)</span> Executar o tratamento indicado em ambiente de trabalho seguro ao
         paciente,
         observando os padrões de higiene aplicáveis ao caso.
      </p>

      <p>
         <span class="font-weight-bold"> 5.2)</span> Realizar os procedimentos de acordo com a melhor técnica
         odontológica,
         observando o estado atual da ciência.
      </p>
   </div>
</page>

<page size="A4">
   <div class="page-padding">
      <h3 class="text-align-center">
         CONTRATO DE PRESTAÇÃO DE SERVIÇOS ODONTOLÓGICOS N° ${treatmentId}
      </h3>
      <p>
         <span class="font-weight-bold"> 5.3)</span> Esclarecer previamente o CONTRATANTE, diante das especificações de
         cada procedimento, contratado ou eventual, a respeito das vantagens, riscos, consequências e valores do que
         fora proposto.
      </p>

      <p>
         <span class="font-weight-bold"> 5.4)</span> Informar o CONTRATANTE de cada procedimento realizado a respeito do
         plano de tratamento e sua sequência.
      </p>

      <p>
         <span class="font-weight-bold"> 5.5) </span> Observar os preceitos éticos contidos no Código de Ética
         Odontológica
      </p>

      <p>
         <span class="font-weight-bold"> 5.6)</span> Resguardar a privacidade do CONTRATANTE/PACIENTE durante todo o
         tratamento.
      </p>

      <p>
         <span class="font-weight-bold"> 5.7)</span> Dar assistência necessária ao CONTRATANTE/PACIENTE no que tange o
         tratamento proposto e realizado, compreendido o tempo necessário para recuperação.
      </p>

      <h3>
         6) DAS OBRIGAÇÕES DO CONTRATANTE/PACIENTE
      </h3>

      <p>
         <span class="font-weight-bold"> 6.1)</span> Informar o CONTRATADO a respeito de seu histórico em relação à
         sensibilidade e alergias para medicamentos a anestésicos, problemas de sangramento bem como, fornecer
         documentos e informações acerca de seus tratamentos odontológicos anteriores.
      </p>

      <p>
         <span class="font-weight-bold"> 6.2)</span> Comparecer pontualmente às consultas agendadas para a realização do
         tratamento bem como, aquelas para avaliação do pós- procedimento, buscando desmarcá-las apenas em casos
         justificados e com antecedência mínima de 24 (vinte e quatro) horas, sob pena de ser-lhe cobrado valor
         referente a uma consulta à época da infração.
      </p>

      <p>
         <span class="font-weight-bold"> 6.3)</span> Acatar todas as recomendações e prescrições efetuadas pela
         CONTRATADA, seja em relação a medicamentos, controles e cuidados durante e após o tratamento, conforme
         instruções previamente repassadas ante os procedimentos a serem realizados.
      </p>

      <p>
         <span class="font-weight-bold"> 6.4)</span> Realizar todos os exames solicitados pela CONTRATADA de modo a
         propiciar condições para a perfeita realização do tratamento.
      </p>

      <p>
         <span class="font-weight-bold"> 6.5)</span> Honrar com o pagamento dos valores e nas condições conforme
         descrito no item “3” deste instrumento.
      </p>

      <p>
         <span class="font-weight-bold"> 6.6)</span> É dever do(a) CONTRATANTE/PACIENTE informar a CONTRATADA a mudança
         de endereço residencial e de contato telefônico a fim de que mantenha seu cadastro informações atualizadas, uma
         vez que, caso assim não proceda, assumirá todas as consequências de sua omissão.
      </p>

      <h3>
         7) DO CONSENTIMENTO E CIÊNCIA DO CONTRATANTE/PACIENTE
      </h3>

      <p>
         <span class="font-weight-bold"> 7.1)</span> O CONTRATANTE/PACIENTE DECLARA que recebeu todas as informações e
         esclarecimentos a respeito dos procedimentos clínico-cirúrgicos propostos e autorizados e, desde já, manifesta
         seu aceite pelo tratamento e condições ora contratadas
      </p>

      <p>
         <span class="font-weight-bold"> 7.2)</span> Tomei ciência através do Cirurgião Dentista Responsável dos riscos
         e complicações inerentes aos procedimentos clínico-cirúrgicos envolvidos no tratamento bem como, se
         necessários, da utilização de métodos alternativos de tratamento, sendo que CONFIO no julgamento do
         profissional responsável para realizar os procedimentos adicionais ou diferentes daqueles que inicialmente
         foram propostos, os quais autoriza a realização, caso sejam necessários.
      </p>
   </div>
</page>

<page size="A4">
   <div class="page-padding">
      <h3 class="text-align-center">
         CONTRATO DE PRESTAÇÃO DE SERVIÇOS ODONTOLÓGICOS N° ${treatmentId}
      </h3>

      <p>
         <span class="font-weight-bold"> 7.3)</span> Fui orientado sobre a utilização de medicações durante os períodos
         pré e pós operatório, portanto, DECLARO estar ciente de todos os cuidados e procedimentos que devo seguir,
         desde o período que antecede o início do tratamento até a completa recuperação.
      </p>

      <p>
         <span class="font-weight-bold"> 7.4)</span> A realização de tratamentos não descritos na avaliação e que tenham
         se tornado indispensáveis ao sucesso do tratamento serão cobrados a parte pela CONTRATADA, respeitando o valor
         praticado na ocasião para o procedimento necessário.
      </p>

      <p>
         <span class="font-weight-bold"> 7.5)</span> Autorizo a realização de fotografias e filmagens do meu tratamento,
         com finalidades de documentação e utilização para trabalhos didáticos e científicos, neste ultimo caso,
         resguardo o devido sigilo quanto à identificação pessoal.
      </p>

      <p>
         <span class="font-weight-bold"> 7.6)</span> Sou responsável e confirmo a veracidade das informações que
         prestei, sendo que todas foram transcritas em minha Anamnese. DECLARO que em caso de omissão ou inverdades nas
         informações que prestei, estas resultarão em problemas quanto ao resultado do tratamento proposto, o que caso
         ocorra, excluíra totalmente a responsabilidade da CONTRATADA.
      </p>

      <p>
         <span class="font-weight-bold"> 7.7)</span> Fui informada de que, devida as circunstâncias individuais e
         pessoais de cada paciente, há risco de INSUCESSO, RECIDIVA (RECAÍDA) OU RETRATAMENTO, a despeito dos cuidados e
         zelo que devem ser tomados.
      </p>

      <p>
         <span class="font-weight-bold"> 7.8))</span> Que me foram prestadas todas as informações dos custos do
         tratamento proposto anteriormente à realização dos procedimentos, os quais me comprometo a pagar de acordo com
         o que fora firmado no item”3” deste instrumento.
      </p>

      <p>
         <span class="font-weight-bold"> 7.9)</span> Li e compreendi a natureza e o objetivo do tratamento proposto e
         estou de acordo com todo o conteúdo descrito nesse instrumento, mais uma vez afirmando minha ciência quanto aos
         procedimentos e orientações dos riscos e benefícios inerentes ao tratamento proposto bem como, de tratamentos
         alternativos, caso estes se fizerem necessários.
      </p>

      <p>
         <span class="font-weight-bold"> 7.10)</span> Que estou sendo atendido(a) por Profissional que segue as Normas
         de Biossegurança e da Ética vigentes, o qual me informou que sou livre para interromper meu tratamento a
         qualquer momento e deixou-me ciente das complicações que resultarão frente a minha desistência.
      </p>

      <h3>
         8) DA RESPONSABILIDADE
      </h3>

      <p>
         <span class="font-weight-bold"> 8.1)</span> Nos termos do artigo 14, §4° da lei 8.078/90 (Código de Defesa do
         Consumidor), responde a CONTRATADA por eventuais danos causados ao CONTRATANTE/PACIENTE quando da realização do
         tratamento, desde que comprovada sua culpa para o resultado lesivo.
      </p>

      <p>
         <span class="font-weight-bold"> 8.2)</span> Por se tratar de obrigação de meio, ou seja, sem obrigação de
         resultado, incumbe a CONTRATADA, agir dentro da melhor técnica na execução dos serviços, aplicando todos os
         esforços e meios necessários para alcance do objetivo almejado no tratamento.
      </p>

      <p>
         <span class="font-weight-bold"> 8.3)</span>Não responderá a CONTRATADA pelos danos estéticos, morais e
         financeiros, ou qualquer consequência negativa ao tratamento do CONTRATANTE/PACIENTE, que decorra de sua falta
         de cooperação durante e após a execução deste, ou ainda pela omissão de informações relevantes para o
         diagnóstico clínico.
      </p>

      <p>
         <span class="font-weight-bold"> 8.4)</span> São hipóteses de não cooperação por parte do paciente:
      </p>
   </div>
</page>

<page size="A4">
   <div class="page-padding">
      <h3 class="text-align-center">
         CONTRATO DE PRESTAÇÃO DE SERVIÇOS ODONTOLÓGICOS N° ${treatmentId}
      </h3>

      <p>
         <span class="font-weight-bold"> 8.4.1) </span> não comparecimento a consultas agendadas;
      </p>

      <p>
         <span class="font-weight-bold"> 8.4.2)</span> abandono do tratamento;
      </p>

      <p>
         <span class="font-weight-bold"> 8.4.3)</span> não observação das recomendações prescritas pelo profissional
         responsável.
      </p>

      <p>
         <span class="font-weight-bold"> 8.4.4) </span> deixar de comunicar imediatamente a CONTRATADA sobre fato
         pertinente ao tratamento.
      </p>

      <h3>
         9) DO ABANDONO DO TRATAMENTO
      </h3>

      <p>
         <span class="font-weight-bold"> 9.1)</span> Considera-se abandono de tratamento se o CONTRATANTE/PACIENTE:
      </p>

      <p>
         <span class="font-weight-bold"> 9.1.1)</span> Faltar a 3 (três) consultas consecutivas, independente de
         justificativa;
      </p>

      <p>
         <span class="font-weight-bold"> 9.1.2)</span> Deixar de comparecer na sede da CONTRATADA por lapso temporal
         superior a 30 (trinta) dias, independentemente de justificativas, sem a anuência expressa da CONTRATADA.
      </p>

      <p>
         <span class="font-weight-bold"> 9.1.3)</span> Quando ocorrer atraso no devido pagamento por mais de 30 (trinta)
         dias da data do respectivo vencimento.
      </p>

      <p>
         <span class="font-weight-bold"> 9.2)</span> O abandono do tratamento equivale, para efeitos legais, à rescisão
         contratual motivada por iniciativa do CONTRATANTE/PACIENTE.
      </p>

      <p>
         <span class="font-weight-bold"> 9.3)</span> O abandono de tratamento isenta a CONTRATADA de qualquer
         responsabilidade ou consequências futuras.
      </p>

      <h3>
         10) DAS GARANTIAS
      </h3>

      <p>
         Não existem garantias explícitas ou implícitas, pois o que se contrata pelo presente instrumento não são
         objetos e sim serviços, restando, portanto, como garantia apenas a aplicação correta da técnica adequada ao
         caso. O prognóstico constante do prontuário é apenas de ordem estatística, não significando necessariamente o
         resultado.
         Por exemplo, quedas de restaurações e próteses podem ocorrer e não gera nenhum direito a indenização de
         qualquer natureza. Caso essas hipóteses ocorram dentro de 90 (noventa) dias da data em que fora encerrado o
         procedimento, desde que provada à improbidade técnica, o procedimento será refeito pela CONTRATADA sem ônus
         adicionais ao CONTRATANTE/PACIENTE.
      </p>

      <h3>
         11) DA RESCISÃO DO CONTRATO
      </h3>

      <p>
         <span class="font-weight-bold"> 11.1)</span> O presente contrato pode ser rescindido pelas partes, uma vez
         observado o descumprimento de qualquer clausula ou condição pactuada, ressalva a parte inocente o direito de
         reaver o valor correspondente a perda/dano sofrido.
      </p>

      <p>
         <span class="font-weight-bold"> 11.2))</span> Caso ocorra a rescisão por iniciativa do CONTRATANTE/PACIENTE ou
         motivada por culpa deste, os tratamentos iniciados serão cobrados como concluídos.
      </p>

      <p>
         <span class="font-weight-bold"> 11.3)</span> Caso ocorra a rescisão por iniciativa da CONTRATADA, apenas os
         tratamentos concluídos serão cobrados.
      </p>

   </div>
</page>

<page size="A4">
   <div class="page-padding">
      <h3 class="text-align-center">
         CONTRATO DE PRESTAÇÃO DE SERVIÇOS ODONTOLÓGICOS N° ${treatmentId}
      </h3>

      <h3>
         12) DO SIGILO
      </h3>

      <p>
         <span class="font-weight-bold"> 12.1)</span> O CONTRATANTE/PACIENTE declara plena ciência e concordância de que
         os dados existentes nos cadastros da CONTRATADA não podem ser repassados a pessoa, instituição ou entidade
         estranhas as partes constantes neste instrumento, sendo as informações sigilosas e protegidas legalmente.
      </p>

      <h3>
         13) DO FORO
      </h3>

      <p>
         Para dirimir quaisquer controvérsias oriundas deste CONTRATO, as partes elegem o foro da comarca de <span
            id="comarca">COMARCA</span>, renunciando qualquer outro por mais privilegiado que seja.
         E, por estarem, assim, justos e contratados, firmam o presente instrumento, em 2 (duas) vias de iguais teor
         entregues as respectivas vias a cada parte, obrigando-se por si e seus sucessores a qualquer título, na
         presença de 2 (duas) testemunhas que também o subscrevem.
      </p>

      <div style="display: flex; flex-direction: row;">
         <div style="flex: 1; justify-content: center; align-items: center;">
            <div class="sign-underline">
               CONTRATANTE
            </div>
         </div>

         <div style="flex: 1; justify-content: center; align-items: center;">
            <div class="sign-underline">
               PACIENTE
            </div>
         </div>
      </div>


      <div style="display: flex; flex-direction: row; margin-top: 20px;">
         <div style="flex: 1; justify-content: center; align-items: center;">
            <div class="sign-underline">
               CONTRATADA
            </div>
         </div>

         <div style="flex: 1; justify-content: center; align-items: center;">

         </div>
      </div>

      <div style="margin-top: 50px;">
         <p class="font-weight-bold">TESTEMUNHA 1</p>
      </div>

      <div style="display: flex; margin-top: 20px; flex-direction: column;">
         <div style="flex: 1;">
            <div style="display: flex; flex-direction: row;">
               <div style="flex: 1;">
                  <p style="margin-top: 5px;" class="font-weight-bold">Nome:</p>
               </div>

               <div class="sign-underline" style="flex: 4;">

               </div>
            </div>
         </div>

         <div style="flex: 1;">
            <div style="display: flex; flex-direction: row;">
               <div style="flex: 1;">
                  <p style="margin-top: 5px;" class="font-weight-bold">RG:</p>
               </div>

               <div class="sign-underline" style="flex: 4;">

               </div>
            </div>
         </div>
      </div>

      <div style="margin-top: 50px;">
         <p class="font-weight-bold">TESTEMUNHA 2</p>
      </div>

      <div style="display: flex; margin-top: 20px; flex-direction: column;">
         <div style="flex: 1;">
            <div style="display: flex; flex-direction: row;">
               <div style="flex: 1;">
                  <p style="margin-top: 5px;" class="font-weight-bold">Nome:</p>
               </div>

               <div class="sign-underline" style="flex: 4;">

               </div>
            </div>
         </div>

         <div style="flex: 1;">
            <div style="display: flex; flex-direction: row;">
               <div style="flex: 1;">
                  <p style="margin-top: 5px;" class="font-weight-bold">RG:</p>
               </div>

               <div class="sign-underline" style="flex: 4;">

               </div>
            </div>
         </div>
      </div>

   </div>
</page>
<page size="A4">
   <div class="page-padding">
      <h3 class="text-align-center">
         CONTRATO DE PRESTAÇÃO DE SERVIÇOS ODONTOLÓGICOS N° ${treatmentId}
      </h3>

      <h3> Anamnese Odontologica </h3>

      ${odontologicalQuestionaireHTML}
   </div>
</page>

<page size="A4">
   <div class="page-padding">
      <h3 class="text-align-center">
         CONTRATO DE PRESTAÇÃO DE SERVIÇOS ODONTOLÓGICOS N° ${treatmentId}
      </h3>

      <h3> Anamnese Medica </h3>
        
      ${medicalQuestionaireHTML}
   </div>
</page>

<page size="A4">
   <div class="page-padding">
      <h3 class="text-align-center">
         CONTRATO DE PRESTAÇÃO DE SERVIÇOS ODONTOLÓGICOS N° <span id="contractId"></span>
      </h3>

      <h3> Informações do Tratamento Indicado pelo Profissional: </h3>

      <div>
			<table>
				<tr>
               <th>
                  Procedimento
               </th>
               <th>
                  Valor
               </th>
            </tr>

            ${proceduresTableDataHTML}
            
			</table>
         
         <p>
            <span class="font-weight-bold">Total Tratamento:</span> R$ ${totalCost},00
         </p>

         <p>
            <span class="font-weight-bold">Total Protético:</span> R$ ${prothesisCost},00
         </p>
		</div>
      
      <div style="display: flex; flex-direction: row;">
         <div style="flex: 1; justify-content: center; align-items: center;">
            <div class="sign-underline">
               Cirurgião dentista
            </div>
         </div>

         <div style="flex: 1; justify-content: center; align-items: center;">
            <div class="sign-underline">
               Paciente ou Responsável
            </div>
         </div>
      </div>

   </div>
</page>

</html>
    
`;
