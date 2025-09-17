export function merge(arr1, arr2) {
    var mergedArr = []; //stores final array
    var cursorArr1 = 0; //pointer for array 1
    var cursorArr2 = 0; // pointer for array 2
    
    while (cursorArr1 < arr1.length && cursorArr2 < arr2.length) {
        if (arr1[cursorArr1] > arr2[cursorArr2]) {
            mergedArr.push(arr2[cursorArr2])
            cursorArr2++;
        } else {
            mergedArr.push(arr1[cursorArr1]);
            cursorArr1++;
        }
    }

    while (cursorArr1 < arr1.length) {
        mergedArr.push(arr1[cursorArr1]);
        cursorArr1++;
    }

    while (cursorArr2 < arr2.length) {
        mergedArr.push(arr2[cursorArr2]);
        cursorArr2++;
    }

    return mergedArr;
}
