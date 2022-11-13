let list = [55, 14, -42, 0, 15, 16, 8, 3,-23];

let mergeSort = (list) =>{
  if(list.length <= 1) return list;
  let middle = list.length / 2 ;
  let left = list.slice(0, middle);
  let right = list.slice(middle, list.length);
  return merge(mergeSort(left), mergeSort(right));
}

let merge = (left, right) => {
  let result = [];
  while(left.length || right.length) {
    if(left.length && right.length) {
      if(left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    } else if(left.length) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
  return result;
}

console.log(mergeSort(list))