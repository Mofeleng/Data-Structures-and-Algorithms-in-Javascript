
function binarySearch(arr, val) {
    let lpoint = 0;
    let rpoint = arr.length - 1;
    let mpoint = Math.floor((lpoint + rpoint)/2);

    if (arr.length === 0) return -1;

    while(arr[mpoint] !== val && lpoint <= rpoint) {
        if (val > arr[mpoint]) {
            lpoint = mpoint + 1; // move our start to the middle + 1
        }
        if (val < arr[mpoint]) {
            rpoint = mpoint - 1; // move our end to the middle - 1
        }
        mpoint = Math.floor((lpoint + rpoint)/2);
    }
    if (arr[mpoint] !== val) {
        return -1;
    }
    return mpoint;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16], 600));
