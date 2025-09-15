import swap from "../utils/swap.js";

var array = [ 3, 4, 1, 10, 100, 5, 2, 0, 9, 22, 6];
            
            
function selectionSort(arr) {
    var isMinimum;

    for (var i = 0; i <= (arr.length - 1); i++) {
        isMinimum = i;

        for (var j = i+1; j <= (arr.length - 1); j++) {
            if (arr[isMinimum] > arr[j]) {
                isMinimum = j;
            }
        }
        if (i !== isMinimum) swap(arr, i, isMinimum);
    }

    return arr;
}

console.log(selectionSort(array));

