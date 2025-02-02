
function elementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function shoElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('hidden');
}

function showCalculation(){
    shoElementById('triangle-hidden');
    shoElementById('rectangle-hidden');
    shoElementById('parallelogram-hidden');
    shoElementById('rhombus-hidden');
    shoElementById('pentagon-hidden');
    shoElementById('ellipse-hidden');
}

function hideCalculation(){
    //elementById('triangle-hidden');
    elementById('rectangle-hidden');
    elementById('parallelogram-hidden');
    elementById('rhombus-hidden');
    elementById('pentagon-hidden');
    elementById('ellipse-hidden');
}

 //scrol
 function areaScrol() {
    const areaScrol = document.getElementById('area-scrol');
    if (areaScrol) {
        shoElementById('area-scrol');
        window.scrollTo({ top: areaScrol.offsetTop, behavior: 'smooth' });
    } else {
        console.error('Area Calculate not found');
    }
}