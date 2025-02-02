

//tringle
function calculateTriangle(){
    //get tringle base
    const triangleBaseValue = document.getElementById('tringle-base');
    const triangleBase = triangleBaseValue.value;
    const base = parseFloat(triangleBase);
    //console.log(base)
    //get triangle hight
    const triangleHightInput = document.getElementById('triangle-hight');
    const triangleHight = triangleHightInput.value;
    const hight = parseFloat(triangleHight);


    //input benish
    triangleHightInput.value ='';
    triangleBaseValue.value = '';
    //console.log(hight)
    const area = 0.5 * base * hight;
    console.log(area)

    const triangleAreaSpm = document.getElementById('triangle-are');
    triangleAreaSpm.innerText = area;

    const triangleScoreOutput = document.getElementById('triangle-score');
    triangleScoreOutput.innerText = area;
    showCalculation();
    hideCalculation();
    areaScrol();
    
}  


 //Rectangle
 function calculateRectangle(){

    //get Rectangle Wight
   const RectangleInput = document.getElementById('rectangle-weght');
   const RectangleInputeValue = RectangleInput.value;
   const wight = parseFloat(RectangleInputeValue);
   //console.log(wight);

    //get Rectangle lenght

    const RectangleLenghtInput = document.getElementById('rectangle-lenght');
    const RectangleLenght = RectangleLenghtInput.value;
    const Lenght= parseFloat(RectangleLenght);
    //console.log(Lenght)

      //input benish
      RectangleInput.value ='';
      RectangleLenghtInput.value = '';

    const Area = wight * Lenght;
    console.log(Area)

    //Dis[play area
    const RectangleAreaSpm = document.getElementById('rectangle-area');
    RectangleAreaSpm.innerText = Area;


    const rectangleScoreOutput = document.getElementById('rectangle-score');
    rectangleScoreOutput.innerText = Area;
    areaScrol();
    showCalculation();
     elementById('triangle-hidden');
     elementById('parallelogram-hidden');
     elementById('rhombus-hidden');
     elementById('pentagon-hidden');
     elementById('ellipse-hidden');
 
}