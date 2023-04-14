// bring and array of fibonacci numbers by sequence
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
