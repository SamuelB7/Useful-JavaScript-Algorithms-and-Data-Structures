function threeSum(numbersArray, targetSum) {
    let result = [];
    numbersArray.sort((a, b) => a - b); // sort the array first
    for (let i = 0; i < numbersArray.length - 2; i++) {
        if (i > 0 && numbersArray[i] === numbersArray[i - 1]) continue; // skip the same element to avoid duplicate triplets
        let left = i + 1;
        let right = numbersArray.length - 1;
        while (left < right) { // when left and right pointers meet, terminate the loop
            let sum = numbersArray[i] + numbersArray[left] + numbersArray[right];
            if (sum === targetSum) {
                result.push([numbersArray[i], numbersArray[left], numbersArray[right]]);
                while (left < right && numbersArray[left] === numbersArray[left + 1]) left++; // skip the same element to avoid duplicate triplets
                while (left < right && numbersArray[right] === numbersArray[right - 1]) right--; // skip the same element to avoid duplicate triplets
                left++;
                right--;
            } else if (sum < targetSum) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

function threeSumAlt(numbersArray) { // same as above but targetSum is 0
    let result = [];
    numbersArray.sort((a, b) => a - b);
    for (let i = 0; i < numbersArray.length - 2; i++) {
        if (i === 0 || (i > 0 && numbersArray[i] !== numbersArray[i - 1])) {
            let left = i + 1;
            let right = numbersArray.length - 1;
            let sum = 0 - numbersArray[i];
            while (left < right) {
                if (numbersArray[left] + numbersArray[right] === sum) {
                    result.push([numbersArray[i], numbersArray[left], numbersArray[right]]);
                    while (left < right && numbersArray[left] === numbersArray[left + 1]) left++;
                    while (left < right && numbersArray[right] === numbersArray[right - 1]) right--;
                    left++;
                    right--;
                } else if (numbersArray[left] + numbersArray[right] > sum) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    return result;
}