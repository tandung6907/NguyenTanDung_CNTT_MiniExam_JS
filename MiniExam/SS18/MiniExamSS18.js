const infor = [{ id: 1, name: "TD", phone: "1234567", email: "aa@gmail.com" }];

let nameInput = document.getElementById("contact-name");
let email = document.getElementById("contact-email");
let phone = document.getElementById("contact-phone");
let list = document.getElementById("contact-tbody"); 

function renderInfor() {
  list.innerHTML = "";
  infor.forEach((p) => {
    const tr = document.createElement("tr"); 
    tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.phone}</td>
      <td>${p.email}</td>
      <td>
        <div class="action-buttons">
          <button class="btn-edit">Sửa</button>
          <button class="btn-delete" onclick="removeInfor(${p.id})">Xóa</button>
        </div>
      </td>`;
    list.appendChild(tr);
  });
}

renderInfor();

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault(); 
  addInfor();
});

function addInfor() {
  const nameVal = nameInput.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameVal) return;
  if (!regex.test(emailVal)) return;
  if (isNaN(phoneVal) || phoneVal.length > 9) return;

  const newInfor = {
    id: Date.now(),
    name: nameVal,
    email: emailVal,
    phone: phoneVal,
  };

  infor.push(newInfor);
  renderInfor();

  document.getElementById("contact-form").reset();
}

function removeInfor(id) {
  const index = infor.findIndex((p) => p.id === id);
  if (index === -1) return;
  infor.splice(index, 1);
  renderInfor();
}
