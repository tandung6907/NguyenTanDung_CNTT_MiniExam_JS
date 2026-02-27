let orders = [
  "Đơn hàng A",
  "Đơn hàng B",
  "Đơn hàng C",
  "Đơn hàng D",
  "Đơn hàng E",
];
let revenues = [1500, 2800, 1200, -500, 3200];

function stringFormatting() {
  let o = orders.map((name, index) => {
    return `${name} mang về ${revenues[index]} USD`;
  });
  console.log(o);
  
}
stringFormatting();

function totalRevenues() {
  return revenues
  .filter((value) => value > 0)
  .reduce((sum, p) => sum + p, 0);
}

console.log(totalRevenues());
