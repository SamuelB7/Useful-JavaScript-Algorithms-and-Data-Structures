/* 
    Quicksort is also a divide-and-conquer sorting algorithm.
    It works by partitioning the unsorted array around a pivot element, recursively sorting the two sub arrays, and then merging the sorted sub arrays back together.
    The pivot element is typically chosen to be the median element of the unsorted array.
    Quicksort is one of the most used sorting algorithms.
    Time complexity:  O(n log n)
*/

function partition(array, left, right) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]]
            i++;
            j--;
        }
    }
    return i;
}

function quick(array, left, right) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quick(array, left, index - 1);
        }
        if (index < right) {
            quick(array, index, right);
        }
    }
    return array;
}

function quickSort(array) {
    return quick(array, 0, array.length - 1);
}