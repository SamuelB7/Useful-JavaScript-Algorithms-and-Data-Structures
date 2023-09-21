/* 
    Linear Search is the simplest search algorithm.
    It works by iterating over the input data structure and comparing each element to the target value.
    If the target value is found, the algorithm returns its index. Otherwise, it returns -1.
    It’s not the most efficient search algorithm but is very easy to understand and implement.

    Time complexity:  O(n)
*/

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}