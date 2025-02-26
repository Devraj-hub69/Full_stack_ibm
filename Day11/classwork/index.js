// console.log(this)
// let obj={
//     name:"Shanti",
//     class:"B.Tech in CSE",
//     myFunction:()=>{
//         console.log(this);//this is not work in arrow function
//        console.log("I am a method inside a object");
//     },
//     subjects:["DBMS","OS","AI","DL"],
//     newObj:{
//         1:80,
//         nestedFunction:function(){
//             console.log(this)
//             console.log("I am a nested method of objects");
//         },
//         nestednewobj:{
//             method:function(){
//                 console.log("i am here")
//             }
//         }
//     }
// }
// obj.myFunction();
// obj.newObj.nestedFunction();
// let num=10,num2=21;
// if(num<num2){
//     console.log(`${num} is less than ${num}`);
// }
// else{
//     console.log(`${num} is not less than ${num2}`);
// }
// let n1=prompt("enter the number");

// if(n1%5==0 && n1%3==0){
//     alert("Fizz Buzz")
// }
// else if(n1%3==0){
//     alert("Fizz")
// }
// else if(n1%5==0){
//     alert("Buzz");
// }

// else{
//     alert("not divisible")
// }
// let n=10;

// for(let i=1;i<=n;i++){
//     console.log(i);
// }
//For loop
// let num=30;
// for(let i=3;i<=num;i=i+3){
//     console.log(i);
// }
// let arr=[1,2,3,4,5,6,7];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],i);
// }
// let str="Shanti Kumari";
// for(let i=0;i<str.length;i++){
//     console.log("a"+str[i])
// }
// let arr=["a","b","c","d","e","f","g","h"];
// for(let num of arr){
//     console.log(num);
// }


//while loop
// let num=5;
// while(num<10){
//    //logic
//    i++;
// }
let arr2=[1,2,3,4,5,6,7,8,9,10];
for(let el of arr2){
    if(el%2==0){
        console.log(`${el} is even number`);
    }else{
        console.log(`${el} is odd number`);
    }
}
let arr=[1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
