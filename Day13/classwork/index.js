//foreach
let arr=[1,2,3,4,6,7,8,9,10,12,13,14,15,16]
// let ans=arr.forEach((el,index)=>{
//     // console.log(el,index)
//     return el;
// });
// console.log(ans)
// let ans=arr.map((el,i)=>{
//     return (i,el);
// })
// console.log(ans)
// let ans=arr.filter((el,i)=>{
//     return el%2==0 && el%4==4 && el==2
// })
// console.log(ans);
// let ans=arr.filter((el,i)=>{
//     return typeof el =="string" || el%5==0;
// })
// console.log(ans);
// let ans=arr.reduce((acc,el)=>{
//     return acc+el
// },1);
// console.log(ans)
// let ans=arr.filter((el,i)=>{
//     return el%5==0;
// }).map((el,index)=>{
//     return el*2;
// }).reduce((acc,el)=>{
//     return acc+el;
// })
// console.log(ans);
// let ans=arr.filter((el,i)=>{
//     return el%5==0 ;
// }).map((el,index)=>{
//     return el*2 && el%3==0;
// }).reduce((acc,el)=>{
//     return acc+el;
// },9)
// console.log(ans);
// let arr1=[3,5,1,6,8,43,6,78,3,4,5,6,45,56];
// let ans=arr1.sort((a,b)=>{return b-a
// });
// console.log(arr1)
let data=[
    {name:"watch",price:200670,desc:"Good Watch",rating:4},
    {name:"shoe",price:1200,desc:"Good shoe",rating:4.5},
    {name:"car",price:2000,desc:"Wonderful car",rating:4.9},
    {name:"phone",price:205600,desc:"Wow phone",rating:4},
    {name:"laptop",price:208000,desc:"Nice Laptop",rating:3},
    {name:"bottle",price:30,desc:"Good Bottle",rating:4.3},
]
// console.log(data[0].name)
// data.sort((a,b)=>{return a.price-b.price})
// console.log(data)
data.sort((a,b)=>{
    let namea=a.name.toUpperCase();
    let nameb=b.name.toUpperCase();
    if(namea<nameb){
        return -1;
    }
    if(namea>nameb){
        return 1;
    }
})
//data.sort((a,b)=>a.name.localCompare(b.name))
console.log(data)