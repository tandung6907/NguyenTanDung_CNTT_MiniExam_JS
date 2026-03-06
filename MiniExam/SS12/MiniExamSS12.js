let products = [
  {
    id: "P01",
    name: "Laptop MacBook Pro M3",
    price: 2000,
    category: "Laptop",
    inStock: true,
  },
  {
    id: "P02",
    name: "Chuột không day Logitech",
    price: 45,
    category: "Phụ kien",
    inStock: true,
  },
  {
    id: "P03",
    name: "Bàn phím cơ Keychron",
    price: 95,
    category: "Phụ kiện",
    inStock: false,
  },
  {
    id: "P04",
    name: "Man hinh Dell UltraSharp",
    price: 450,
    category: "Man hinh",
    inStock: true,
  },
  {
    id: "P05",
    name: "Tai nghe Sony WH-1000XM5",
    price: 350,
    category: "Phu kiện",
    inStock: true,
  },
];

function filterAndSort(obj) {
  let result = obj
    .filter((p) => p.inStock === true)
    .sort((a, b) => b.price - a.price);

  let output = "--- DANH SÁCH ĐÃ SẮP XẾP ---\n";
  result.forEach((p) => {
    output += `ID: ${p.id} NAME: ${p.name} PRICE: ${p.price}\n`;
  });

  console.log(output);
}

function extractInfor(obj) {
  let result = obj.filter(
    (p) => p.category.toLowerCase().includes("phụ") && p.inStock,
  );

  if (result.length === 0) {
    console.log("Không có sản phẩm nào phụ kiện!!!");
    return;
  }

  console.log("Danh sách phụ kiện còn hàng:");
  result.forEach((p) => {
    console.log(`ID: ${p.id} - ${p.name} - ${p.price}`);
  });
}

function totalPrice(obj) {
  let result = obj.filter((p) => p.inStock === true);

  if (result.length === 0) {
    console.log("Không có sản phẩm còn hàng");
    return;
  }

  let total = result.reduce((acc, cur) => acc + cur.price, 0);

  console.log("Tổng tiền sản phẩm còn hàng:", total);
}

filterAndSort(products);
extractInfor(products);
totalPrice(products);
