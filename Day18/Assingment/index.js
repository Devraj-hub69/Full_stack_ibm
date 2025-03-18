let API_KEY = "AIzaSyC8o6jWQ0tHr_HmJlj16OhgirwUPcBk5Os";
let lowerbody = document.getElementById("lowerbody");
let search_term = document.getElementById("search") || "India Gate";
// async function getData() {
//     try {
//         let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)
//         let result = await data.json();
//         //console.log(result.items);
//        localStorage.setItem("store",JSON.stringify(result.items));
//         showData(result.items);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// getData()
let storeData = JSON.parse(localStorage.getItem("store"));
async function showData(storeData) {
    document.getElementById("loading").style.display = "none";
    storeData.forEach((el, index) => {
        let snippet = el.snippet;
        let id = el.id;
        let box = document.createElement("div");
        box.className = "videobox";
        let img = document.createElement("img");
        img.src = snippet.thumbnails.medium.url;
        let title = document.createElement("p");
        title.innerText = snippet.title;
        let channel_title = document.createElement("p");
        channel_title.innerText = snippet.channelTitle;
        let description = document.createElement("p");
        description.innerText = snippet.description;
        let channel_id = document.createElement("p");
        channel_id.innerText = snippet.channelId;

        box.append(img, title, channel_title, description, channel_id);
        lowerbody.append(box);
        box.onclick = () => {
            let obj = {
                snippet, id
            }
            localStorage.setItem("videodata", JSON.stringify(obj))
            window.location.href = "video.html";
        }
    });
}
showData(storeData);

//implementation of  search function by debounce
let searchBar = document.getElementById("searchBar");
function getData() {
    // console.log(searchBar.value);
    let query = document.getElementById("searchBar").value.toLowerCase();
    let filtered = box.filter((p) => p.name.toLowerCase().includes(query));
    AllContent.innerHTML = "";
    showData(filtered);
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

//implementation of  search function by throtteling
// function getData2() {
//     // console.log(searchBar.value);
//     let query = document.getElementById("searchBar2").value.toLowerCase();
//     let filtered = products.filter((p) => p.name.toLowerCase().includes(query));
//     AllContent.innerHTML = "";
//     displayData(filtered);
// }

// function searchFunction2() {
//     getData2();
// }