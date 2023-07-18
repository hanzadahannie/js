// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
//
//     [1, 2, 3, 0, 4, 5, 6]
// let array=[1, 2, 3, 0, 4, 5, 6]
// function handleFilter() {
//     let result= array.map((it) => it * it)
//     console.log(result)
// }
// handleFilter()


// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
//
//     [1, 2, 3, 0, 4, 5, 6]
// function handleFilter(){
//     let array = [1, 2, 3, 0, 4, 5, 6]
//     let result = array.map(it=>it > 0)
//     console.log(result)
// }
// handleFilter()

// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
//
//     [1, 2, -3, 0, 4, -5, 6]

// function handleFilter(){
//     let array = [1, 2, -3, 0, 4, -5, 6]
//     let result = array.map( el => el > 0 ? el: "fals")
//     console.log(result)
// }
// handleFilter()

// Дан массив с числами. Оставьте в нем только отрицательные числа.
//
//     [1, 2, -3, 0, 4, 5, -6]

//
//     let array = [1, 2, -3, 0, 4, 5, -6]
//     function handleFilter(){
//     let result = array.filter((el) => el < 0)
//     console.log(result)
// }
// handleFilter()

// Дан массив с числами. Оставьте в нем только четные числа.
//
//     [1, -2, 3, 0, 4, -5, 6]

//     let array = [1, 2, -3, 0, 4, 5, -6]
//     function handleFilter(){
//     let result = array.filter((el) => el %2 === 0)
//     console.log(result)
// }
// handleFilter()

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
//
//     ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun, 'even]


//     let array = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun','even']
//     function handleFilter(){
//     let result = array.filter((el) => el.length > 5)
//     console.log(result)
// }
// handleFilter()

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
//
//     [1, 2, -3, 0, -4, 5, -6]
//
// let array = [1, 2, -3, 0, -4, 5, -6]
// function handleFilter(){
//     let result = array.filter((el) => el < 0)
//     console.log(result.length)
// }
// handleFilter()

// [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']

// <==== function declaration ====>

// function handleFilter(num, str) {
//     return num.concat(str)
// }
//
// console.log(handleFilter([1,2,3,4], ['a','b','c','d']))

// // <==== arrow function ====>
//
// const handleFilter =(num, str)=> {
//     return num.concat(str)
// }
//
// console.log(handleFilter([1,2,3,4], ['a','b','c','d']))

// / [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']
//     const handleFilter= (arr, str) => {
//     let res = str.split(' ').join(' ')
//     let res2 = arr.concat(res)
//     return res2
// }
// console.log(handleFilter([2, 3, 4, 5], 'hello world' ))

// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// const handleFilter =(arr, str)=> {
//     let res = str.split(' ').join('').split('')
//     let res2 = arr.concat(res)
//     return res2
// }
// console.log(handleFilter([2, 3, 4, 5], 'hello world' ))


// [2, 3, 4, 5], 'hello world' =>
// [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]

const handleFilter= (arr, str) => {
    let res = str.split(' ').join('').split('')
    let res2 = arr.concat(res)
    return res2.concat(arr)
}
console.log(handleFilter([2, 3, 4, 5], 'hello world' ))



