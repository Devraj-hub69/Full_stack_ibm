let videoData = JSON.parse(localStorage.getItem("videodata"));

let bodyData = document.getElementById("bodydata");

async function video(data) {

    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${data.id.videoId}`;
    iframe.height = "674px";
    iframe.width = "1220px";
    let title = document.createElement("p");
    title.innerText = data.snippet.title;
    let channel_title = document.createElement("p");
    channel_title.innerText = data.snippet.channelTitle;
    let description = document.createElement("p");
    description.innerText = data.snippet.description;
    let channel_id=document.createElement("p");
    channel_id.innerText=data.snippet.channelId;
    iframe.setAttribute = ("allowfullscreen", true);
    bodyData.append(iframe, title, channel_title,description,channel_id);
}
video(videoData);

//for suggetions
let API_KEY = "AIzaSyBGkvDY2HiKW1hAjt5OpQUjA8j6HHOa7aQ";
let suggetion = document.getElementById("suggetion");
let search_term = document.getElementById("search") || "India Gate";
// async function getData() {
//     try {
//         let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)
//         let result = await data.json();
//         //console.log(result.items);
//         showData(result.items);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// getData()
let storeData=JSON.parse(localStorage.getItem("store"));
async function showData(storeData) {
    //document.getElementById("loading").style.display = "none";;
    storeData.forEach((el,index) => {
        let snippet=el.snippet;
        let id=el.id;
        let box = document.createElement("div");
        box.className = "videobox";
        let img = document.createElement("img");
        img.src=snippet.thumbnails.medium.url;
        let title = document.createElement("h2");
        title.innerText = snippet.title;
        let channel_title = document.createElement("h3");
        channel_title.innerText = snippet.channelTitle;
        let description = document.createElement("p");
        description.innerText = snippet.description;
        let channel_id=document.createElement("p");
        channel_id.innerText=snippet.channelId;

        box.append(img,title,channel_title,description,channel_id);
        suggetion.append(box);
        box.onclick=()=>{
            let obj={
                snippet,id
            }
            localStorage.setItem("videodata",JSON.stringify(obj))
            window.location.href="video.html";
        }
    });
}
showData(storeData);