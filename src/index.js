module.exports = function check(str, bracketsConfig) {
  // your solution
let open = ['{', '[', '(', '|'];
let brackets = {
  '}': '{',
  ']': '[',
  ')': '(',
  '|': '|'
};

  let stack = [];
  let curSymbol = '';
  let topElem = '';
  let rightBrackets = [];

  for(let i = 0; i < str.length; i ++){
    curSymbol = str[i];

    if(open.includes(curSymbol)) {
      stack.push(curSymbol);
    }
    else{
      if(stack.length === 0){
        return false;
      }

     topElem = stack[stack.length - 1];

      if(brackets[curSymbol] === topElem){
        rightBrackets.push([brackets[curSymbol], curSymbol]);
        stack.pop(); 
      } 
      else{
      return false;  
      }
    }
}
rightBrackets = rightBrackets.reverse();

if(stack.length === 0){
for(let i = 0; i < rightBrackets.length; i ++){
  if(rightBrackets[i][0] != bracketsConfig[i][0] || rightBrackets[i][1] != bracketsConfig[i][1]) return false;
  else 
if(rightBrackets[0][0] == bracketsConfig[i][0] && rightBrackets[0][1] == bracketsConfig[i][1] )
  return true;
  else return false;
} 
}
else return false;      
}
