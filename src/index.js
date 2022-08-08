module.exports = function check(str, bracketsConfig) {
  // your solution
  let open = ['{', '[', '(', '|'];
let brackets = {
  '}': '{',
  ']': '[',
  ')': '(',
  '|': '|'
};

function check(str, bracketsConfig){
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

     if(rightBrackets.length == bracketsConfig.length){
       for(let i = 0; i < rightBrackets.length; i ++){
         if(let j = 0; j < ri)
       }
     }
}

}
