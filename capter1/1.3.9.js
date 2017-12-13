/**
 * 补全左括号，输入：  1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )
 * 输出 ：( ( 1 + 2 ) * ( 3 - 4 ) * ( 5 - 6 ) ) )
 */

var pression = '12 + 2 ) * 333 - 4 ) * 5 - 6444 ) ) )'.split(' ');

var pressStack = [];
var opStack = [];

for (let i = 0; i < pression.length; i++) {
    if ('+-*/'.indexOf(pression[i]) !== -1) {
        opStack.push(pression[i]);
    } else if ( pression[i].match(/\d+/g) ){
        pressStack.push(pression[i]);
    } else {
        let subPression = opStack.pop() + pressStack.pop() + ')';
        subPression = '(' + pressStack.pop() + subPression;
        pressStack.push(subPression);
    }
}

console.log(pressStack.join());