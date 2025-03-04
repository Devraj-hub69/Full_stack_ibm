// let name ="synchronous";
// console.log(name);
// let surName="code";
// console.log(surName);
// setTimeout(()=>{
//     console.log("syncromously syncing")
// },3000)
// console.log(name,surName);
// queueMicrotask(()=>console.log("microtask syncing"))

// for(var i=0;i<5;i++){
//     console.log(i)
//     setTimeout(()=>{
//         console.log(i);
//     },1000)
//     console.log(i)
// }
// let pypromise=new Promise((resolve,reject)=>{//mocrotask
//     let flag=true;
//     if(flag){
//         resolve("promise is resolve with green flag");
//     }
//     else{
//         reject("rejected with red flag")
//     }
// });
// console.log(pypromise);

async function fetchdata(){
    let data=await fetch("https://fakestoreapi.com/products/1");
    let ans= await data.json();
   // console.log(data)
    console.log(ans);
}
fetchdata()
