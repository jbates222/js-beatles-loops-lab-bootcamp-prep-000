function theBeatlesPlay(musicians, instruments) {
  var arr = {};
  for (let i = 0; i < musicians.length; i++) {
    arr = [...arr, musicians[i] + " plays " + instruments[i]];
  }
  return arr;
}
var num = 0;
var johnLennonFacts = function(facts) {
  while (num < facts.length) {
    var thing = facts;
    thing.splice(num, 1, facts[num] + "!!!");
    num++;
    }
  return thing;
}