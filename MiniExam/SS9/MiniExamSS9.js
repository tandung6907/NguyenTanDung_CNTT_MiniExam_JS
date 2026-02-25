let orders = [
  "Đơn hàng A",
  "Đơn hàng B",
  "Đơn hàng C",
  "Đơn hàng D",
  "Đơn hàng E",
];
let revenues = [1500, 2800, 1200, -500, 3200];

function stringFormatting() {
  let orderReports = [];
  orders.map((name, index) => {
    let a = name + " mang về " + revenues[index] + " USD ";
    orderReports.push(a);
  });
  console.log(orderReports);
}
stringFormatting();

function totalRevenues() {
  return revenues.filter((value) => value > 0).reduce((sum, p) => sum + p, 0);
}

totalRevenues();
