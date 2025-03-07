let API_KEY = "AIzaSyBGkvDY2HiKW1hAjt5OpQUjA8j6HHOa7aQ";
let bigdiv = document.getElementById("bigdiv");
let search_term = document.getElementById("search") || "India Gate";
async function getData() {
    try {
        let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)
        let result = await data.json();
        console.log(result.items)
    }
    catch (error) {
        console.log(error);
    }
}
getData()
async function showData(arr) {
    document.getElementById("loading").style.display = "none";;
    arr.forEach(({ snippet, id }) => {
        let box = document.createElement("div");
        box.className = "videobox";
        let img = document.createElement("img");
        img.snippet.thumbnails.medium.url;
        let title = document.createElement("p");
        title.innerText = snippet.title;
        let channel_title = document.createElement("p");
        channel_title.innerText = snippet.channelTitle;
        let description = document.createElement("p");
        description.innerText = snippet.description;

        box.append(img,title,channel_title,description);
        bigdiv.append(box);
        box.onclick=()=>{
            let obj={
                snippet,id
            }
            localStorage.setItem("videodata",JSON.stringify(obj))
        }
    })
}