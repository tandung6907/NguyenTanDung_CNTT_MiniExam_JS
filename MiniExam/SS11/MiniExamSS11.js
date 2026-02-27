let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{ id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
{ id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
{ id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true }
];

function findProducts(obj) {
    let findById;
    while (true) {
        findById = prompt("Nhập ID sản phẩm cần tìm: ");
        if (findById.length !== 0) {
            break;
    }
    alert("Vui lòng không để trống tìm kiếm!!!");
    }
    let find = obj.find(p => p.id === findById);
    if (find !== -1) {
        console.log(`Sản phẩm có ID ${findById} là ${find.name}`);
        return;
    }
    console.log(`Không có sản phẩm nào có ID ${findById} !!`);
}
findProducts(products);

function checkPrice(obj) {
    let checkPrice = obj.every(p => p.price > 0);
    if (checkPrice) {
        console.log(` ==> Kết quả kiểm tra: 
- ${checkPrice ? "Dữ liệu bảng giá hợp lệ" : "Phát hiện sản phẩm chưa cập nhật giá"}`)
    }
}
checkPrice(products);

function formatDisplay(obj) {
    let check = false;
    if (obj.inStock === "true") {
        check = true;
    }
    let catalogDisplay = obj.map((item) => {
        return console.log(`${item.name} - Giá: ${item.price} | ${check = true ? "Còn hàng" : "Hết hàng"}`);
    })
    console.log(catalogDisplay);
}
formatDisplay(products);