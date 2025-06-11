function isEven(number) {
    return number % 2 === 0;
  }
  
  const number = parseInt(prompt("Nhập vào số cần kiểm tra:"));
  
  if (!isNaN(number)) {
    let result = isEven(number);
  
    if (result === true) {
      alert(number + " là số chẵn");
    } else {
      alert(number + " là số lẻ");
    }
  } else {
    alert("Bạn phải nhập một số nguyên hợp lệ!");
  }
  