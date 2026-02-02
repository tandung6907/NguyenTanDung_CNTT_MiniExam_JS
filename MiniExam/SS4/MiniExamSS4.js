let n =+ prompt("Nhập vào 1 số bất kỳ: ");

if (n % 2 == 0) {
    console.log("Số trên là só chẵn");
} else {
    console.log("Số trên là số lẻ");
}

if (n > 0) {
    console.log("Số trên là só dương");
} else if (n === 0) {
    console.log("Số trên là số 0");
} else {
    console.log("Số trên là số âm");   
}

if (n > 0) {
    for (let i=0 ; i<=n ; i++) {
        console.log(`Các số từ 1 đến ${n} là: ${i}`);
    }
} else {
    console.log("Giá trị n không hợp lệ để tạo dãy số");
}

let sum = 0;
for (let i=1 ; i<=50 ; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log("Fizz");
        sum += i;
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz");
    } else if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz");
    } else {
        console.log(`${i}`);
    }
}

console.log(`Tổng các số in ra chữ "Fizz" là: ${sum}`);


