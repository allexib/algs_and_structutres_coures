const array = [1,5,7,3,5,1,5,7,11,6,2]
let count = 0
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i;
        }
    }
    return null
}

console.log(linearSearch(array, 5))
console.log('count = ', count)



