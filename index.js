function dwarfRollCall(dwarves) {
  var call =`1. ${dwarves[0]} `;
  for(var i=1; i<dwarves.length; i++){
    call += `${i+1}. ${dwarves[i]} `;
  }return String(call);
}

function summonCaptainPlanet(planeteerCalls){
   var captain= [];
   for (var i=0; i < planeteerCalls.length; i++){
    captain.push(planeteerCalls[i].toUpperCase() + "!");
   }return captain;
}

function longPlaneteerCalls(words) {
  for(var i=0; i<words.length; i++){
    if (words[i].length> 4){
      return true;
    } else return false;
}
}

function findTheCheese (foods) {
  var cheese =["cheddar", "gouda", "camembert"];
  for (var i = 0; i<foods.length; i++){
    if (foods[i]=== cheese[0] || foods[i]=== cheese[1] || foods[i]=== cheese[2]){
      return foods[i];
    }
  }return "no cheese!";
}