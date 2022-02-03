var arr = [2,7,11,15,14,5,9,6];
var target = 19;
for(let i = 0 ; i < arr.length ; i++){
    for (let j = i + 1; j <= arr.length - 1; j++){
        if(arr[i] + arr[j] == target){
         {
            console.log([i,j],(target));
            document.write("The Index of array is: " + [i,j],"=",target);

           } 
        }
    }
}