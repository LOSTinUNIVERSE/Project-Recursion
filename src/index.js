// bring and array of fibonacci numbers by sequence
// const arr = []

// function fibsRec(num, fib3, fib1 = 0, fib2 = 1) {
//     arr.push(fib1)
//     if (arr.length == num) return
//     fib3 = fib2 + fib1
//     fib1 = fib2
//     fib2 = fib3
//     fibsRec(num, fib3, fib1, fib2)
// }
// fibsRec(8)
// console.log(arr);

const unsortedArray = [1, 3, 5, 6, 2, 4, 7, 8]
function sort(arrForSort, i, end) {
    const array = []
    const { length } = arrForSort
    if (length == 1) { return }
    if (length > 0) {
        for (; i < end; i++) {
            array.push(arrForSort[i])
        }
        sort(array, length - length, length / 2)

        console.log(array);
    }
}
sort(unsortedArray, 0, 4)
