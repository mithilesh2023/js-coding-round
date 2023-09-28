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
// const names = "Harsh bhai kaise ho";

// var save = names.split(" ")
//     .map(function (word) {
//         return word.split("").reverse().join("")
//     })
// console.log(save.join(" "));


//4. How to check if an object is an array or not?

//  function array(ele){
//     return Array.isArray(ele);
// }
// console.log(array([]))
// console.log(array({}))

//5. How to empty an array in javascript?

// do not reset it to a new array , and do not loop through to pop each value

// let empty=[1,2,3,4,5]
//    empty.length=0;
//    console.log(empty.length)

//6. How would you check if a number is an integer?
   
//    let int=12.3;
//    if(int%1===0){
//         console.log('integer')
//    }
//    else{
//     console.log('false')
//    }

//    or

// console.log(Number.isInteger(int))

//7.  How to duplicate this : duplicate([1,2,3,4,5]) 

// function duplicate(a){
//     return  a.concat(a)
// }
// console.log(duplicate([1,2,3,4,5]))


// function abc(str){
//     return str.split('').reverse().join('')
// }
// console.log(abc("hello world"))

//----------function------------------

// 8. Write a javascript function that reverse  a number;
// let num=12456789;
// function abc(arr){
//     return Number(arr.toString().split("").reverse().join(''))
// }
// // let a=Number(num.toString().split('').reverse().join(""));
// console.log(abc(num))

// or

// function reverseit(num){
//     var rev=0;
//     while(num>0){
//     var rem=num%10;
//     rev=rev*10+rem;
//     num=Math.floor(num/10);
//     }
//     return rev;
// }
// console.log(reverseit(1234567))

//  9. Write a javascript function that checks whether a passed string is palindrome or not?

// function palidrome(str){
//     let result=str.split('').reverse().join('')
//     return result === str
// }
// console.log(palidrome('lool'))
// console.log(palidrome('pool'))

// 10. write a javascript function that returns a passed string with letters in alphbetical order?

// function alphbeticalOrder(str){
//     return str.split('').sort().join('')
// }
// console.log(alphbeticalOrder('mithilesh'))

// 11. write a javascript function that accept a string as a parameter and converts the first letter of each word of the string in upper case?

// function uppercase(str){
//     let letter=str.split(' ').map((ele)=>{
//         return ele.charAt(0).toUpperCase() + ele.substring(1)
//     })
//     return letter.join(' ');
// }
// console.log(uppercase("hello bhai kaise ho"))

// 12. write a javascript function to get the number of occurrences of each letter in specified string
// eg   apple  a=1 p=2 l=1 e=1

// function occ(str){
// let occurrences={};
// str.split('').forEach(function(ele){
//     if(occurrences.hasOwnProperty(ele)===false){
//     occurrences[ele]=1;
// }else{
//     occurrences[ele]++;
// }
// })
// return occurrences;
// }
// console.log(occ('mithilesh'))

// --------loop---------------

// 13. loop an array and add all members of it?

let sum=[1,2,3,4,5,6,7,8]
let value=0;
sum.forEach(function(ele){
    value=value+ele;
})
console.log(value)


