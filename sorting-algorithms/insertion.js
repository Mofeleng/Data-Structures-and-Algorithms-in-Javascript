var array = [ 3, 4, 1, 10, 100, 5, 2, 0, 9, 22, 6];


function insertionSort(arr) {

    for (var i = 1; i < arr.length; i++) {
        var currentValue = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }

    return arr;
}

console.log(insertionSort(array))