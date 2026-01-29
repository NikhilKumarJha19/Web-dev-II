// let arr = [5,-3,16,-11,-7.8]
//let res=[]

// while(arr.length>0){
//     let val = arr.shift()
//     if(val>0){
//     }
// }

// console.log(res)


function palindrome(){
let arr2 = [ 1, 2 ,3, 2, 1]

let original = []
let reverse =[]

for (let i=0; i< arr2.length; i++){
    original.push(arr2[i]);

}

while(arr2.length>0){
    reverse .push(arr2.pop())

}
for (i =0; i< original.length; i++){
    if(original[i] !== reverse[i]){
        return"Not a palindrome"
    }
}
return"its a palindrome"
}

console.log(palindrome())


