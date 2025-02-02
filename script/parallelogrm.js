

function calculateParallelogrm(){

    // get parrallelogrm base input
    const parallelogrmInputValue = document.getElementById('parallelogram-base');
    const parallelogramBase = parallelogrmInputValue.value;
    const base = parseFloat(parallelogramBase);
    //console.log(base)

    //get parallelogrm lenth input
    const parallelogrmInput = document.getElementById('parallelogram-hight');
    const parallelogramHight = parallelogrmInput.value;
    const hight = parseFloat(parallelogramHight);
    //console.log(hight)

    //input benish
    parallelogrmInputValue.value ='';
    parallelogrmInput.value = '';

    const area= base * hight;
    console.log(area);

    //display area
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;


    const parallelogramScoreOutput = document.getElementById('parallelogram-score');
    parallelogramScoreOutput.innerText = area;
    areaScrol();
    showCalculation();
     elementById('triangle-hidden');
     elementById('rectangle-hidden');
     //elementById('parallelogram-hidden');
     elementById('rhombus-hidden');
     elementById('pentagon-hidden');
     elementById('ellipse-hidden');
}

//Rhombus
function calculateRhombus(){

    //get rhombus d1 input 
    const rhombusInput = document.getElementById('rhombus-d1');
    const rhombusD1 = rhombusInput.value;
    const d1 = parseFloat(rhombusD1);
    //console.log(d1)

    //get rhombus d2 input
    const rhombusInputValue = document.getElementById('rhombus-d2');
    const rhombusD2 = rhombusInputValue.value;
    const d2 = parseFloat(rhombusD2);
    //console.log(d2)


     //input benish
     rhombusInput.value ='';
     rhombusInputValue.value = '';

    const area = 0.5 * d1 * d2;
    console.log(area)

    //display area
    const rhombuseArea = document.getElementById('rhombus-area');
    rhombuseArea.innerText = area;


    const rhombusScoreOutput = document.getElementById('rhombus-score');
    rhombusScoreOutput.innerText = area;
    areaScrol();
    showCalculation();
     elementById('triangle-hidden');
     elementById('rectangle-hidden');
     elementById('parallelogram-hidden');
     //elementById('rhombus-hidden');
     elementById('pentagon-hidden');
     elementById('ellipse-hidden');
}

 //Pentagon
 function calculatePentagon(){

    //get pentagon p input
    const pentagonInput = document.getElementById('pentagon-p');
    const PentagonP = pentagonInput.value;
    const p = parseFloat(PentagonP);
    //console.log(p)

    //get pentagon b input
    const pentagonInputValue = document.getElementById('pentagon-b');
    const PentagonB = pentagonInputValue.value;
    const b = parseFloat(PentagonB);
    //console.log(b)


     //input benish
     pentagonInput.value ='';
     pentagonInputValue.value = '';

    const area = 0.5 * p * b;
    console.log(area)

    //display area
    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = area;


    const pentagonScoreOutput = document.getElementById('pentagon-score');
    pentagonScoreOutput.innerText = area;
    areaScrol();
    showCalculation();
     elementById('triangle-hidden');
     elementById('rectangle-hidden');
     elementById('parallelogram-hidden');
     elementById('rhombus-hidden');
     //elementById('pentagon-hidden');
     elementById('ellipse-hidden');
 }


 //Ellipse

function CalculateEllipse(){

    //get ellipse a input
    const EllipseInput = document.getElementById('ellipse-a');
    const EllipseValue = EllipseInput.value;
    const A = parseFloat(EllipseValue);
    //console.log(A)

    //get ellipse b input
    const ellipseInputValue = document.getElementById('ellipse-b');
    const EllipseB = ellipseInputValue.value;
    const b = parseFloat(EllipseB);
    //console.log(b)

     //input benish
     EllipseInput.value ='';
     ellipseInputValue.value = '';

    const area = 3.141592654 * A * b;
    console.log(area)

    //display area
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;


    const ellipseScoreOutput = document.getElementById('ellipse-score');
    ellipseScoreOutput.innerText = area;
    areaScrol();
    showCalculation();
     elementById('triangle-hidden');
     elementById('rectangle-hidden');
     elementById('parallelogram-hidden');
     elementById('rhombus-hidden');
     elementById('pentagon-hidden');
     //elementById('ellipse-hidden');
}