// Map
let arr =[10,20,30,40,50]
let res = arr.map((x)=>{
    return x+5
})
console.log(res);

// Reduce
let arr1 =[10,20,30,40,50]
let res1 = arr.reduce((x,y)=>{
    return x+y;
},10)
console.log(res1);


// Push
let arr2=[10,20,30,40]
arr2.push(50)
console.log(arr2)
// Pop
arr2.pop()
console.log(arr2)
// Shift
arr2.shift()
console.log(arr2)
// UnShift
arr2.unshift(11)
console.log(arr2)

