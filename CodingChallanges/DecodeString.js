function decodeString(string) {
    let number = 0;
    let tempString = '';
    let stack = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '[') {
            if (tempString.length > 0) {
                stack.push(tempString);
                tempString = '';
            }
            stack.push(number);
            number = 0;
        } else if (string[i] === ']') {
            if (tempString.length > 0) {
                stack.push(tempString);
                tempString = '';
            }

            let newString = '';
            let first = stack.pop();

            while (first && typeof first === 'string') {
                newString = `${first}${newString}`;
                first = stack.pop();
            }

            newString = newString.repeat(first);
            stack.push(newString);

        } else {
            if (!isNaN(parseInt(string[i]))) {
                number = 10 * number + parseInt(string[i]);
            } else {
                tempString = `${tempString}${string[i]}`;
            }
        }
    }

    if (tempString.length > 0) {
        stack.push(tempString);
    }
    return stack.join('');
};