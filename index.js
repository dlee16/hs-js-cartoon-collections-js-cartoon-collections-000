function dwarfRollCall(dwarves) {
  var call =`1. ${dwarves[dwarves.length/2]} `;
  for(var i=dwarves.length/2 + 1; i<dwarves.length; i++){
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
  var cheese =["cheddar", "gouda", "camembert", "swiss"];
  for (var i = 0; i<foods.length; i++){
    if (foods[i]=== cheese[0] || foods[i]=== cheese[1] || foods[i]=== cheese[2] || foods[i]===cheese[3]){
      return foods[i];
    }
  }return "no cheese!";
}

// ['banana', 'cheddar', 'apple'] -> "cheddar"
// ["berry", "cheddar", "apple", "gouda"] -> "cheddar"

function wordsThatStartWithB(words){
  var bWords=[]; 
  for (var i =0; i<words.length; i++){
    if (words[i].startWith("b")){
      bWords.push(words[i])
    }
  }
  return bWords
}
        
 // "brian".startsWith("b") => true
        // "emily".startsWith("b") => false

wordsThatStartWithB(['brian', 'joe', 'alex']) // ['brian']
wordsThatStartWithB(['berry', 'banana', 'cherry']) // ['berry', 'banana']
wordsThatStartWithB(['cher', 'chad', 'chad2']) // []
