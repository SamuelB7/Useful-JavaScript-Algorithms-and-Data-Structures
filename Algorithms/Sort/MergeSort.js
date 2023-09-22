/* 
    Merge sort is a divide-and-conquer sorting algorithm.
    It works by repeatedly dividing the unsorted array into two halves, sorting each half, and then merging the sorted halves back together.
    The algorithm recursively sorts each half until the entire array is sorted.
    Merge sort is not efficient but still can be used in many cases.
    Time complexity:  O(n log n)
*/

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergedArray.push(left[i]);
            i++;
        } else {
            mergedArray.push(right[j]);
            j++;
        }
    }

    return mergedArray.concat(left.slice(i)).concat(right.slice(j));
}