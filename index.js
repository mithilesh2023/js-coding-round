// 1. How to find Duplicate elements in a given Array?

// const arrNumber=[1,2,3,4,2,6,1,3]
// const duplicate=arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
// console.log(duplicate)

//2. How to find Max and Min value in a given Array in Javascript?

// const arrNumber=[1,2,5,6,4,3];
// const maxFunction=(arr)=>{
//     return arr.reduce(function(pre,cur){
//         return pre>cur?pre:cur
//     })
// }
// const minFunction=(arr)=>{
//     return arr.reduce(function(pre,cur){
//         return pre<cur?pre:cur
//     })
// }
// console.log(maxFunction(arrNumber))
// console.log(minFunction(arrNumber))

// 3. Given  a string , revese each word in  the sentence 
//   Harsh bhai kaise ho
const names = "Harsh bhai kaise ho";

var save = names.split(" ")
    .map(function (word) {
        return word.split("").reverse().join("")
    })
console.log(save.join(" "));


//4. How to check if an object is an array or not?

 function array(ele){
    return Array.isArray(ele);
}
console.log(array([]))
console.log(array({}))

//5. How to empty an array in javascript?

// do not reset it to a new array , and do not loop through to pop each value

let empty=[1,2,3,4,5]
   empty.length=0;
   console.log(empty.length)

   //6. How would you check if a number is an integer?
   
   let int=12.3;
   if(int%1===0){
        console.log('integer')
   }
   else{
    console.log('false')
   }

//    or

console.log(Number.isInteger(int))

//7.  How to duplicate this : duplicate([1,2,3,4,5]) 

function duplicate(a){
    return  a.concat(a)
}
console.log(duplicate([1,2,3,4,5]))


