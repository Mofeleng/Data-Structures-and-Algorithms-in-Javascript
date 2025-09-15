import swap from '../utils/swap.js';

var a = [3, 1, 2, 5, 10, 11, 12, 13];

function bubbleSort(arr) {
    var isBigger;
    var noSwaps;
    var passes = 0;
    for (let i = (arr.length - 1); i >= 0; i--) {
        noSwaps = true;
        passes++;
        for (let j = 0; j < i; j++) {
            isBigger = arr[j] > arr[j+1];
            if (isBigger) {                
                swap(arr, j, (j+1));
                noSwaps = false;
            }
        }

        if (noSwaps) {
            console.log("Looped: ", passes, "times")
            break;
        }
    }
    return arr;
}
console.log(bubbleSort(a))