let contacts = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    phone: "0901234567",
    email: "nguyenvanan@email.com",
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    phone: "0912345678",
    email: "tranthibinh@email.com",
  },
  {
    id: 3,
    name: "Lê Văn Cường",
    phone: "0923456789",
    email: "levancuong@email.com",
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    phone: "0934567890",
    email: "phamthidung@email.com",
  },
  {
    id: 5,
    name: "Hoàng Văn Em",
    phone: "0945678901",
    email: "hoangvanem@email.com",
  },
];

let nextId = 6;
let editingId = null;

function validateName(name) {
  if (!name || name.trim() === "") {
    return "Họ tên không được để trống!";
  }
  if (name.trim().length < 2) {
    return "Họ tên phải có ít nhất 2 ký tự!";
  }
  const nameRegex =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠ-ỹ\s]+$/;
  if (!nameRegex.test(name.trim())) {
    return "Họ tên không được chứa số hoặc ký tự đặc biệt!";
  }
  return null;
}

function validatePhone(phone) {
  if (!phone || phone.trim() === "") {
    return "Số điện thoại không được để trống!";
  }
  const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
  if (!phoneRegex.test(phone.trim())) {
    return "Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại 10 chữ số (bắt đầu bằng 0) hoặc định dạng quốc tế (+84...)";
  }
  return null;
}

function validateEmail(email, currentEditingId = null) {
  if (!email || email.trim() === "") {
    return "Email không được để trống!";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return "Email không hợp lệ!";
  }
  const duplicate = contacts.find(
    (c) =>
      c.email.toLowerCase() === email.trim().toLowerCase() &&
      c.id !== currentEditingId,
  );
  if (duplicate) {
    return "Email đã tồn tại trong danh bạ!";
  }
  return null;
}

function renderTable() {
  const tbody = document.getElementById("contact-tbody");
  tbody.innerHTML = "";

  if (contacts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5">
          <div class="empty-state"><p>Chưa có liên hệ nào.</p></div>
        </td>
      </tr>`;
    return;
  }

  contacts.forEach((contact, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${escapeHtml(contact.name)}</td>
      <td>${escapeHtml(contact.phone)}</td>
      <td>${escapeHtml(contact.email)}</td>
      <td>
        <div class="action-buttons">
          <button class="btn-edit" onclick="handleEdit(${contact.id})">Sửa</button>
          <button class="btn-delete" onclick="handleDelete(${contact.id})">Xóa</button>
        </div>
      </td>`;
    tbody.appendChild(tr);
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

function resetForm() {
  document.getElementById("contact-form").reset();
  document.querySelector(".btn-add").textContent = "Thêm";
  editingId = null;
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const email = document.getElementById("contact-email").value.trim();

    const nameError = validateName(name);
    if (nameError) {
      alert(nameError);
      return;
    }

    const phoneError = validatePhone(phone);
    if (phoneError) {
      alert(phoneError);
      return;
    }

    const emailError = validateEmail(email, editingId);
    if (emailError) {
      alert(emailError);
      return;
    }

    if (editingId !== null) {
      const idx = contacts.findIndex((c) => c.id === editingId);
      if (idx !== -1) {
        contacts[idx] = { id: editingId, name, phone, email };
      }
      resetForm();
      renderTable();
      alert("Cập nhật liên hệ thành công!");
    } else {
      contacts.push({ id: nextId++, name, phone, email });
      resetForm();
      renderTable();
    }
  });

function handleEdit(id) {
  const contact = contacts.find((c) => c.id === id);
  if (!contact) return;

  document.getElementById("contact-name").value = contact.name;
  document.getElementById("contact-phone").value = contact.phone;
  document.getElementById("contact-email").value = contact.email;

  document.querySelector(".btn-add").textContent = "Cập nhật";
  editingId = id;

  document
    .querySelector(".form-section")
    .scrollIntoView({ behavior: "smooth" });
}

function handleDelete(id) {
  const confirmed = confirm("Bạn có chắc chắn muốn xóa liên hệ này?");
  if (!confirmed) return;

  contacts = contacts.filter((c) => c.id !== id);

  if (editingId === id) {
    resetForm();
  }

  renderTable();
  alert("Xóa liên hệ thành công!");
}

renderTable();
