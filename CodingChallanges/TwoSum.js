function twoSum(numbersArray, targetSum) {
    let result = [];
    numbersArray.sort((a, b) => a - b);
    for (let i = 0; i < numbersArray.length - 1; i++) {
        if (i > 0 && numbersArray[i] === numbersArray[i - 1]) continue;
        let left = i + 1;
        while (left < numbersArray.length) {
            let sum = numbersArray[i] + numbersArray[left];
            if (sum === targetSum) {
                result.push(i, left);
                while (numbersArray[left] === numbersArray[left + 1]) left++;
                left++;
            }
            left++;
        }
    }
    return result;
}