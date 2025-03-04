function getData(){
    let passdata=JSON.parse(localStorage.getItem("cartData"));
    console.log(passdata)
    passdata.forEach((el,index)=>{
        let productBox=document.createElement("div");
        productBox.className="product-box";
       let heading=document.createElement("h3");
       heading.innerText=el.category;

     let img=document.createElement("img");
     img.src=el.image;

     let name=document.createElement("h3");
     name.innerText=el.name;

     let price=document.createElement("h3");
     price.innerText=el.price;

     let rating=document.createElement("h3");
     rating.innerText=el.rating;

     let button=document.createElement("button");
     button.innerText="Add To cart";
     button.addEventListener("click",()=>{
        addToCart(el,index);
     })
     productBox.append(heading,img,name,price,rating,button);
     document.getElementById("itemback").append(productBox);
    });
}
getData();

function deleteFun(el,index){
    let deletedcartdata=JSON.parse(localStorage.getItem("Datacart"));
    deletedcartdata.splice(index,1);
    console.log()
    localStorage.setItem("Datacart",JSON.stringify())
}