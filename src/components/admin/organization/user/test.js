const input = [1, 2, -1, 0, -2, 1];
const input = [-2, -1, 0, -2, 1];

const sortInput = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i+1; j < arr.length ; j++) {
      if(arr[i] > arr[j]) {
        let tmp = arr[j];
        arr[i] = arr[j];
      }
    }
  }
}
