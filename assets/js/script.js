let btnThucAn = document.querySelector('.btn_ta')
let btnThucUong = document.querySelector('.btn_tu')


let lst_ta = document.querySelector('.list_ta')
let lst_tu = document.querySelector('.list_tu')



btnThucAn.addEventListener('click', function () {
    lst_ta.classList.add('active')
    lst_tu.classList.remove('active')
    btnThucAn.classList.add('doimauBtn')
    btnThucUong.classList.remove('doimauBtn')
});


btnThucUong.addEventListener('click', function () {
    lst_ta.classList.remove('active')
    lst_tu.classList.add('active')
    btnThucAn.classList.remove('doimauBtn')
    btnThucUong.classList.add('doimauBtn')
});


// Sign Up
function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
      username: username,
      email: email,
      password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công");
  }

  // Login
  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("Không tìm thấy username");
    } else if (
      username == data.username &&
      email == data.email &&
      password == data.password
    ) {
      alert("Đăng nhập thành công");
      window.location.href = "admin.html";
    } else {
      alert("Đăng nhập thất bại");
    }
  }
 
