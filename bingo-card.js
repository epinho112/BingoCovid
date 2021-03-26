window.onload = function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  }
  else{
    alert("Your browser does not support this script.");
  }

  $(document).ready(function () {
    $('td').click(function () {
        console.log(this.id)
        //Check to see if background color is set or if it's set to white.
        console.log(this.style.background)
        if(this.style.background == "" || this.style.background == "rgb(255, 114, 64)" || this.style.background =="rgb(255, 108, 67)" || this.style.background =="rgb(255, 103, 70)" || this.style.background =="rgb(255, 97, 74)" || this.style.background =="rgb(255, 91, 78)") {

            $(this).css('background', '#0CB377');
            $(this).css('color', '#FEF96D');
        }
        else {
          if(this.id == "square0" || this.id == "square1" || this.id == "square2" || this.id == "square3" || this.id == "square4" ) {
            $(this).css('background', 'rgb(255,114,64)');
          }
          if(this.id == "square5" || this.id == "square6" || this.id == "square7" || this.id == "square8" || this.id == "square9" ) {
            $(this).css('background', 'rgb(255,108,67)');
          }
          if(this.id == "square10" || this.id == "square11" || this.id == "square12" || this.id == "square13") {
            $(this).css('background', 'rgb(255,103,70)');
          }
          if(this.id == "square14" || this.id == "square15" || this.id == "square16" || this.id == "square17" || this.id == "square18" ) {
            $(this).css('background', 'rgb(255,97,74)');
          }
          if(this.id == "square19" || this.id == "square20" || this.id == "square21" || this.id == "square22" || this.id == "square23" ) {
            $(this).css('background', 'rgb(255,91,78)');
          } 
        }
    });
});
}

function newCard() {
  for(var i=0 ; i<24 ; i++){
      setSquare(i);
    }
};
var usedNums = new Array(61);



function setSquare(thisSquare){
  var currentSquare = "square" + thisSquare;
  var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
  var colBasis = colPlace[thisSquare] * 15;
  var newNum = colBasis + getNewNum() + 1;

  do{
    newNum = colBasis + getNewNum() + 1;
  }while(usedNums[newNum]);
  
  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  };

  newCard();
  return false;
}