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
    .filter((p) => p.inStock === "true")
    .sort((a, b) => b.price - a.price);

  let output = "--- DANH SÁCH ĐÃ SẮP XẾP ---\n";
  result.forEach((p) => {
    output += `ID: ${p.id} NAME: ${p.name} PRICE: ${p.price}\n`;
  });
}
filterAndSort(products);

function extractInfor(obj) {
  let result = obj.map((p) => {
    if (p.category !== "Phụ kiện") {
      alert("Không có sản phẩm nào phụ kiện!!!");
      return;
    }
    return console.log(result);
  });
  console.log(result);
}
extractInfor(products);

function totalPrice(obj) {
  let result = obj.filter((p) => p.inStock === "false");

  let total;
  if (result) {
    total = obj.reduce((acc, cur) => acc + cur.price, 0);
  }

  console.log(total);
}

totalPrice(products);
