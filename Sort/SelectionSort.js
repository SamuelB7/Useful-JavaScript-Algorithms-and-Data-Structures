/* 
    Selection sort is one of the simplest sorting algorithms that exists.
    It works by repeatedly finding the smallest element in an unsorted array and swapping it with the first element. 
    The algorithms repeat this process on the remaining array elements until the array is completely sorted.
    It is not an efficient algorithm, but it’s very simple to understand and implement.
    Time complexity:  O(n²)
*/

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }

    return array;
}