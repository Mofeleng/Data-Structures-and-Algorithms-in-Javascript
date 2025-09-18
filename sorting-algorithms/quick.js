import pivot from "../utils/pivot.js";

function quickSort(arr, left=0, right=arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        var left = quickSort(arr, left, pivotIndex - 1);
        var right = quickSort(arr, pivotIndex+1, right);
    }; //if l = r then we are on an array with 1 element

    return arr;
}

console.log(quickSort([100, -2, 5, 3, 2,4 ,1, 0]))