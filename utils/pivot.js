import swap from "./swap.js";

function pivot(arr,start=0, end=arr.length+1) {
    var pivot = arr[start];
    var swapIdx = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i); // swap the small value with the current value at i
        }
    }

    swap(arr, start, swapIdx); //swap the start value with the new index which is the last swapped value that was smaller than the pivot value

    return swapIdx; //this is the new index of the pivot(anchored pivot, will not change anymore)
}

export default pivot;
