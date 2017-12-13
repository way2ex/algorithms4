/**
 * 中序表达式转为后序表达式
 * 输入： ( ( 1 + 2 ) * ( ( 3 - 4 ) * ( 5 - 6 ) ) )
 * 输出： (1 2 +) ((3 4 -) (5 6 -) *) *
 */
function InfixToPostfix(pression) {
    var pressArr = pression.split(' ');
    var stack = [];
    var pressArray = [];
    for (let cha of pressArr) {
        if (cha.match(/\d+/g)) {
            pressArray.push(cha);
        } else if (cha === '(') {
            stack.push(cha);
        } else if (cha.match(/[\+\-\*\/]/g)) {
            if (isOpLowerTo(cha, stack[stack.length - 1])) {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    pressArray.push(stack.pop());
                }
            }
            stack.push(cha);
        } else {
            let op = stack.pop();
            while(op != '(') {
                pressArray.push(op);
                op = stack.pop();
            }
        }
    }
    if (stack.length) {
        while (stack.length) {
            pressArray.push(stack.pop());
        }
    }

    return pressArray.join(' ');
}

function isOpLowerTo(firstOp, secondOp) {
    if('+-'.includes(firstOp) && '*/'.includes(secondOp)) {
        return true;
    } else {
        return false;
    }
}

/**
 * 计算后序表达式的值
 */
function evaluate(pression) {
    var pressArr = pression.split(' ');
    var stack = [];
    for (let char of pressArr) {
        if (char.match(/\d+/g)) {
            stack.push(char);
        } else if (char.match(/[\*\-\+\/]/g)) {
            switch(char) {
                case '+': 
                    stack.push(+stack.pop() + + +stack.pop());break;
                case '-':{
                    let a = +stack.pop();
                    let b = +stack.pop();
                    stack.push(parseInt(b - a));
                    break;
                }
                case '*':
                    stack.push(+stack.pop() * +stack.pop());break;
                case '/':{
                    let a = +stack.pop();
                    let b = +stack.pop();
                    stack.push(parseInt(b / a));
                    break;
                }
            }
        }
    }
    return +stack.pop();
}


var pression = `1 + 2 * 5 - 3 / 1 + ( 4 - 6 ) * ( ( 3 - 5 ) + ( 6 - 7 ) )`;
console.log(InfixToPostfix(pression));
console.log(evaluate(InfixToPostfix(pression)));
