let str="sv University";
console.log(str.length)
console.log(str.length-1)
console.log(str[2]);
str.replace("s","r")
console.log(str)
let arr=[1,2,2,"dj",true,null,undefined,""];
console.log(arr)
console.log("gh");
arr.push("disco")
arr[4]="red"
console.log(arr)
arr.pop();//remove last element
arr.pop("dj")
console.log(arr)
let obj={
    Devraj:{classname:"b.tech",rb:98,sub:["gh","jgu","hf"]},
    Maity:{classname:"b.tech",rb:100,sub:["rd","uy","er"]},
    1:undefined
}
console.log(obj.Devraj);
console.log(obj.Devraj.sub[2]);
console.log(obj["Devraj"])
obj.Devraj="My name";
delete obj.Maity;
console.log(obj);
let name1="jvjhfvkhe"
let Class="fjhgfhjhtlj"
let hobbies=["khhgkjhjh","jgfgjjh"]
let newobj={
    name1,Class,hobbies
}
let ans =[1,2,3,[9,4,6,[5,1,9]]]
console.log(ans[3][3][0])
let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}
console.log(superHeroes[1].villains[0].health);
console.log(superHeroes[1].villains[0.].health);