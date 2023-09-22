/* 
    The Binary Search works by repeatedly dividing the array in half and comparing the target value to the middle element.
    If the target value is equal to the middle element, the algorithm returns its index.
    Otherwise, the algorithm continues to search on the half of the array that contains the target value.
    Please keep in mind that in order for this algorithm to function properly, the array needs to be sorted beforehand.
    This search algorithm has good efficiency.

    Time complexity:  O(log n)
*/

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const element = array[mid];
        if (element < target) {
            left = mid + 1;
        } else if (element > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}