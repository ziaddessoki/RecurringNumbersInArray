// check if the array got comon numbers
const array1 = [1,6,8,5,3,3,7,1,2,2,2]

const recurringCheck = arr =>{
  recurringNum = []
  for( let i = 0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i] === arr[j]){
        return arr[i];
      }
    }
  }return undefined;
}

const recurringCheck2 = arr =>{
let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i]
    } else {
      map[arr[i]] = i;
    }
  }
  return undefined
}

recurringCheck2(array1)