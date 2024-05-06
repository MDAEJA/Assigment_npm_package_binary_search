const binary_search = (arr,target)=>{
    if(!Array.isArray(arr)) return "provide only array"
    arr.sort();
   let start = 0 , end = arr.length;
   for(let i=0; i<arr.length; i++){
    let mid =( end - start  / 2);
    if(arr[mid] === target){
        console.log("The number " + target +" is at index  " +mid);
        return;
    }
    if(arr[mid] < target)  start = mid + 1;
    else end = mid - 1;
   }
   return "Target value is not found"
}

const utility = {
    binary_search
}

module.exports = utility