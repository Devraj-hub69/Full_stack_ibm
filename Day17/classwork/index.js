let API_KEY = "AIzaSyBGkvDY2HiKW1hAjt5OpQUjA8j6HHOa7aQ";
let lower_body = document.getElementById("bigdiv");
let search_term = document.getElementById("query").value || "India Gate";
async function getData() {
    try{
        let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)
    console.log(data)
    let res = await data.json();
    console.log(res);
    }
    catch(e){
        console.log(e);
    }
    
}
getData()
 async function showdata(arr) {
    arr.forEach(({snippet})=>{
    })
 }