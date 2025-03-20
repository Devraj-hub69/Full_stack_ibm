const signup=document.getElementById("signup");
signup.addEventListener("click",()=>{
    window.location.href="register.html"
})
document.getElementById("login").onclick = function() {
    document.getElementById("loginModal").style.display = "flex";
}
document.querySelector(".close").onclick = function() {
    document.getElementById("loginModal").style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) {
        document.getElementById("loginModal").style.display = "none";
    }
}