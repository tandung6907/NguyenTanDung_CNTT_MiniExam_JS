let names = "Quý, Nam, Lan, Hùng, Nam";

let students = names.split(", ");
console.log(students);

students.reverse();
console.log("Mảng đảo ngược: ", students);
// có

if (students.includes("Lan")) {
  console.log("Tên Lan tồn tại trong mảng");
} else {
  console.log("Tên Lan không tồn tại trong mảng");
}

for (let i=0 ; i<students.length ; i++) {
    if (students[i] === "Nam") {
        console.log(`Vị trí index của Nam đầu tiên là: ${i}`);
        break;
    }
}

let prices = [100, 200, 300, 400];

for (const price of prices) {
  console.log(price);
}

for (const index in prices) {
  console.log(index);
}
