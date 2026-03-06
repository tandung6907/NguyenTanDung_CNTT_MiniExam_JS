let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("input-email").value;
  let password, checkpass;
  while (true) {
    password = document.getElementById("input-password").value;
    checkpass = document.getElementById("check-password").value;

    if (password === checkpass) {
      const user = {
        email: email,
        password: password,
        check: checkpass,
      };
      console.log(user);
      break;
    }
    alert("Vui lòng nhập lại mật khẩu giống mật khẩu đăng ký!");
    break;
  }
});
