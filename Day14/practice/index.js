let arr=[3,6,9,2,56,34,98,56,23,12,90];
function sorting(arr){
    for(let i=0;i<=arr.length;i++){
        for(let j=0;j<=arr.length;j++){
            if(arr[i]<arr[j]){
                let t1=arr[i];
                arr[i]=arr[j];
                arr[j]=t1;
            }
        }
    }
    return arr;
}
console.log(sorting(arr))