
async function fetchData() {
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    let data2 = await data.json();
    function displayData(data2) {
      data2.forEach((el, index) => {
        let div = document.createElement("div");
        div.className = "product";
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h3");
        name.innerText = el.title;
        let price = document.createElement("h3");
        price.innerText = `Price: $${el.price}`;
        let category = document.createElement("h3");
        category.innerText = `Category: ${el.category}`;
        let rating = document.createElement("h3");
        rating.innerText = `Rating: ⭐${el.rating.rate}, Count:${el.rating.count}`;
        let button1 = document.createElement("button");
        button1.innerText = "View Details";
          button1.addEventListener("click", () => {
            window.location.href = "product-Details.html";
            //showData(el, index);
          });

        let AllProducts = document.getElementById("AllProducts");
        div.append(image, name, price, category, rating, button1);
        AllProducts.append(div);
      });
    }
    displayData(data2);

    //Filtering products based on elements
    let filterByPrice = document.getElementById("sortByPrice");
    filterByPrice.addEventListener("change", function () {
      let filtered = [...data2];
      const selected = filterByPrice.options[filterByPrice.selectedIndex].value;
      if (selected == "low") {
        filtered = filtered.filter((el, index) => el.price <= 100);
        filtered.sort((a, b) => a.price - b.price);
      }
      if (selected == "medium") {
        filtered = filtered.filter(
          (el, index) => el.price >= 100 && el.price <= 200);
        filtered.sort((a, b) => a.price - b.price);
      }
      if (selected == "high") {
        filtered = filtered.filter((el, index) => el.price > 200);
        filtered.sort((a, b) => a.price - b.price);
      }
      let AllContent = document.getElementById("AllProducts");
      AllContent.innerHTML = "";
      displayData(filtered);
    });
    //   //Filtering products based on category
    let filterByType = document.getElementById("filterBytype");
    filterByType.addEventListener("change", function () {
      let filtered = [...data2];
      const selected = filterByType.options[filterByType.selectedIndex].value;
      if (selected == "men's clothing") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "men's clothing"
        );
      }
      if (selected == "women's clothing") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "women's clothing"
        );
      }
      if (selected == "jewellery") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "jewelery"
        );
      }
      if (selected == "Electronics") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "electronics"
        );
      }
      let AllContent = document.getElementById("AllProducts");
      AllContent.innerHTML = "";
      displayData(filtered);
    });

    function getData() {
      // console.log(searchBar.value);
      let query = document.getElementById("searchBar").value.toLowerCase();
      let filtered = data2.filter((p) => p.title.toLowerCase().includes(query));
      let AllContent = document.getElementById("AllProducts");
      AllContent.innerHTML = "";
      displayData(filtered);
    }
    const debounce = function (fn, delay) {
      let timer;
      return function () {
        let context = this,
          args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(context, args);
        }, delay);
      };
    };
    const searchFunction = debounce(getData, 500);
    let debounce1 = document.getElementById("searchBar");
    let debounce2 = document.getElementById("searchBar2");
    debounce1.addEventListener("input", searchFunction);

    //implementation of  search function by throtteling
    function getData2() {
      // console.log(searchBar.value);
      let query = document.getElementById("searchBar2").value.toLowerCase();
      let filtered = data2.filter((p) => p.title.toLowerCase().includes(query));
      AllContent.innerHTML = "";
      displayData(filtered);
    }

    function searchFunction2() {
      getData2();
    }


  } catch (e) {
    console.log(e);
  }
}
fetchData();

// implementation of  search function by debounce
//let searchBar = document.getElementById("searchBar");
