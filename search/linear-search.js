

function linearSearch(arr, num, index = 0) {
    if (arr.length === 0) return -1;
    if (arr[0] === num) return index;
    return linearSearch(arr.slice(1), num, index + 1);
}

console.log(linearSearch([3, 2, 1, 4, 100, 0], 100));

