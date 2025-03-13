

async function getData() {

    let data = await fetch(`http://localhost:3000/posts`);
    let res = await data.json();
    showData(res);
    console.log(res)
}
getData()
let parent = document.getElementById("parent")
async function showData(arr) {
    parent.innerHTML=null;
    arr.forEach((el, index) => {
        let box = document.createElement("div");
        box.className = "box";
        let id = document.createElement("p");
        id.innerHTML = el.id;
        let title = document.createElement("p")
        title.innerHTML = el.title;
        let views = document.createElement("p");
        views.innerHTML = el.views;
        let button=document.createElement("button");
        button.innerText="Update";
        button.addEventListener("click",()=>{
            let input=prompt("enter new title");
            title.innerHTML=input;
        })
        box.append(id, title, views,button);
        parent.append(box);
    })
}
// let update=document.getElementsByTagName("button");
// button.addEventListener("click",async()=>{
//     let input=prompt("enter your value");
//     title.innerText=input;
//     showData(res);
// })

let button = document.getElementById("btn");
button.addEventListener("click", async () => {
    let value = document.getElementById("input").value;
    let obj = {
        title: value,
        views: Math.random(100, 1000)
    }
 try{
    let res = await fetch(`http://localhost:3000/posts`, {
        method: "post",
        headers: {
            "context-Type": "application/json"
        },
        body:JSON.stringify(obj)
    });
    let responce=await res.json();
    // console.log(responce)
    if(responce){
        getData();
        alert("Data saved successfully")
    }
 }
 catch(e){
    console.log(e);
 }
})