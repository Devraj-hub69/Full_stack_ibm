let form=document.getElementById("userform");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let text=document.getElementById("text").value;
    let password=document.getElementById("Password").value;
    let password2=document.getElementById("Password2").value;
    // console.log(name,email,text,password,password2);
    let obj={
        name,email,text,password,password2
    }
    if(obj.password!=password2){
        return alert("mismatched");
    }
    let td1=document.createElement("td");
    td1.innerText=obj.name;
    let td2=document.createElement("td");
    td2.innerText=obj.email;
    let td3=document.createElement("td");
    td3.innerText=obj.text;
    let td4=document.createElement("td");
    td4.innerText=obj.password;
    let td5=document.createElement("td");
    td5.innerText=obj.password2;
    tr.append(td1,td2,td3,td4,td5,td6);
    let tbody=document.getElementById("tbody").append(tr);


    
});