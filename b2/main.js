function minOfArray(arr) {
  if (!Array.isArray(arr)) {
    alert('Không hợp lệ');
    return;
  }
  if (arr.length === 0) {
    alert('Mảng không có giá trị');
    return;
  }

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

const arr1 = [3, 5, 1, 8, -3, 7, 8];
console.log(`Min của mảng arr1 là: ${minOfArray(arr1)}`);

const arr2 = [7, 12, 6, 9, 20, 56, 89];
console.log(`Min của mảng arr2 là: ${minOfArray(arr2)}`);

const arr3 = [];
console.log(`Min của mảng arr3 là: ${minOfArray(arr3)}`);

const arr4 = [0, 0, 0, 0, 0, 0];
console.log(`Min của mảng arr4 là: ${minOfArray(arr4)}`);
