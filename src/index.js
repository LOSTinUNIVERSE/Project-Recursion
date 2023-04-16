bring and array of fibonacci numbers by sequence
const arr = []

function fibsRec(num, fib3, fib1 = 0, fib2 = 1) {
    arr.push(fib1)
    if (arr.length == num) return
    fib3 = fib2 + fib1
    fib1 = fib2
    fib2 = fib3
    fibsRec(num, fib3, fib1, fib2)
}
fibsRec(8)
console.log(arr);

const unsortedArray = [1, 3, 5, 6, 2, 4, 7, 8]

// mergeSort(1, 8, unsortedArray)


const result2 = function compare(leftArray, rightArray) {
    let leftIndex = 0
    let rightIndex = 0
    const result = []
    let resultIndex = 0

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result[resultIndex] = (leftArray[leftIndex])
            leftIndex++
            resultIndex++
        }
        else {
            result[resultIndex] = (rightArray[rightIndex])
            rightIndex++
            resultIndex++
        }
    }
    if (rightIndex < rightArray.length) {
        result[resultIndex] = rightArray[rightIndex]
    }
    if (leftIndex < leftArray.length) {
        result[resultIndex] = leftArray[leftIndex]
    }

    return console.log(result)
}
const unsortedArray = [1, 3, 5, 6, 2, 4, 7, 8]
function mergeSort(array) {
    if (array.length <= 1) { return array }

    const mid = (array.length / 2);
    const leftHalf = array.slice(0, mid);
    const rightHalf = array.slice(mid);

    const sortedLeft = mergeSort(leftHalf)
    const sortedRight = mergeSort(rightHalf)

    return result2(leftHalf, rightHalf)
}
// mergeSort(unsortedArray)
