// let arr=[3,6,9,2,56,34,98,56,23,12,90];
// function sorting(arr){
//     for(let i=0;i<=arr.length;i++){
//         for(let j=0;j<=arr.length;j++){
//             if(arr[i]<arr[j]){
//                 let t1=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=t1;
//             }
//         }
//     }
//     return arr;
// }
// console.log(sorting(arr))
const products=[
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "category": "Electronics",
      "price": 49.99,
      "rating": 4.5,
      "image": "https://m.media-amazon.com/images/I/61GrtFhbGSL._SX522_.jpg"
    },
    {
      "id": 2,
      "name": "Gaming Mouse",
      "category": "Electronics",
      "price": 166.99,
      "rating": 4.2,
      "image": "https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg"
    },
    {
      "id": 3,
      "name": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.7,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31Nkz6AHD5Wv6ncHsBXqgG3FnwFX1efSHqg&s"
    },
    {
      "id": 4,
      "name": "Smartwatch",
      "category": "Wearable",
      "price": 199.99,
      "rating": 4.8,
      "image": "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/t/i/titanium_green_gray_trail_loop_pdp_image_position-1__en-us-removebg-preview_1.png"
    },
    {
      "id": 5,
      "name": "Running Shoes",
      "category": "Fashion",
      "price": 59.99,
      "rating": 4.3,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE17uZC2jnURrUxtgGeFCWj1BsTGFwQrTMFw&s"
    },
    {
      "id": 6,
      "name": "Leather Wallet",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.0,
      "image": "https://m.media-amazon.com/images/I/61BcsGl04sL._SX522_.jpg"
    },
    {
      "id": 7,
      "name": "Digital Camera",
      "category": "Electronics",
      "price": 349.99,
      "rating": 4.6,
      "image": "https://x.imastudent.com/content/0004905_sony-cybershot-dsc-rx10-mark-iv-digital-camera_500.jpeg"
    },
    {
      "id": 8,
      "name": "Backpack",
      "category": "Accessories",
      "price": 39.99,
      "rating": 4.4,
      "image": "https://m.media-amazon.com/images/I/71qpXciYP1L.jpg"
    },
    {
      "id": 9,
      "name": "Sunglasses",
      "category": "Fashion",
      "price": 24.99,
      "rating": 4.1,
      "image": "https://m.media-amazon.com/images/I/51wwVl2r-WL._AC_UY1100_.jpg"
    },
    {
      "id": 10,
      "name": "Water Bottle",
      "category": "Home & Kitchen",
      "price": 14.99,
      "rating": 4.2,
      "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/bottle/j/x/0/2000-bottle-gallon-with-time-marker-large-capacity-2000ml-1-original-imagpyhdrd2qzwhf.jpeg?q=90&crop=false"
    },
    {
      "id": 11,
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "price": 59.99,
      "rating": 4.5,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRX1eVcsfS25YF_oiwJX3OQ_iwkehdnbFaA&s"
    },
    {
      "id": 12,
      "name": "Electric Kettle",
      "category": "Home & Kitchen",
      "price": 174.99,
      "rating": 4.6,
      "image": "https://www.wonderchef.com/cdn/shop/files/6799471_1024x1024.jpg?v=1735753171"
    },
    {
      "id": 13,
      "name": "Portable Power Bank",
      "category": "Electronics",
      "price": 89.99,
      "rating": 4.3,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFltRvmtEbtcE50hSR0EHe3TYWvucqbhnshg&s"
    },
    {
      "id": 14,
      "name": "Smart LED Bulb",
      "category": "Home & Kitchen",
      "price": 19.99,
      "rating": 4.7,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5XCgL00FQsKyoqH4mK-JPzYNSb0mb_L6Jg&s"
    },
    {
      "id": 15,
      "name": "Noise Cancelling Earbuds",
      "category": "Electronics",
      "price": 89.99,
      "rating": 4.8,
      "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-4-anc-select-202409_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1725502554118"
    },
    {
      "id": 16,
      "name": "Travel Pillow",
      "category": "Accessories",
      "price": 152.99,
      "rating": 4.2,
      "image": "https://mysleepyhead.com/media/catalog/product/s/l/sleepy-head-day-518333_1.jpg"
    },
    {
      "id": 17,
      "name": "Yoga Mat",
      "category": "Fitness",
      "price": 229.99,
      "rating": 4.5,
      "image": "https://m.media-amazon.com/images/I/71b5fW+s18L.jpg"
    },
    {
      "id": 18,
      "name": "Men's Wrist Watch",
      "category": "Fashion",
      "price": 129.99,
      "rating": 4.6,
      "image": "https://s.alicdn.com/@sc04/kf/He5ebf8f9382849ffa9530910e3796ea20.jpg_720x720q50.jpg"
    },
    {
      "id": 19,
      "name": "Wireless Charger",
      "category": "Electronics",
      "price": 227.99,
      "rating": 4.3,
      "image": "https://m.media-amazon.com/images/I/61oIAKY9s1L.jpg"
    },
    {
      "id": 20,
      "name": "Graphic T-Shirt",
      "category": "Fashion",
      "price": 139.99,
      "rating": 4.1,
      "image": "https://assets.ajio.com/medias/sys_master/root/20230706/XPdB/64a6f249eebac147fc5a69b6/-1117Wx1400H-465975073-black-MODEL.jpg"
    }
  ]
  function showData(arr){
    arr.forEach((el,index)=>{
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
     document.getElementById("products").append(productBox);
    });
   
  }
showData(products)
  
  let cart=[];
  function addToCart(el,index){
    console.log(el,index)
    cart.push(el);
    localStorage.setItem("cartData",JSON.stringify(cart));
    //stringify
    console.log(cart);
    alert("Item added to card...")
  }
  function goToCart() {
  window.location.href = "cart.html";
  }
  let filterprice=document.getElementById("filtering");

  filterprice.addEventListener("change",function(){
    let filtered=[...products];
    const selectfilter=filterprice.options[filterprice.selectedIndex].value;
    if(selectfilter=="low"){
        filtered=filtered.filter((el,index)=>el.price<100);
    }
    if(selectfilter=="medium"){
        filtered=filtered.filter((el,index)=>el.price>=100 && el.price<=200);
    }
    if(selectfilter=="high"){
        filtered=filtered.filter((el,index)=>el.price>200);
    }
    let products2=document.getElementById("products");
  products2.innerHTML="";
  showData(filtered);
  })

let sortprice=document.getElementById("sorting");

sortprice.addEventListener("change",function(){
    let sorted=[...products];
    const selectsort=sortprice.options[sortprice.selectedIndex].value;
    if(selectsort=="lowtohigh"){
        sorted.sort((a,b)=>a.price-b.price);
    }
    if(selectsort=="hightolow"){
        sorted.sort((a,b)=>b.price-a.price);
    }
    let products3=document.getElementById("products");
  products3.innerHTML="";
  showData(sorted);
  })


  
  