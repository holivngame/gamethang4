// script.js
let currentPage = 1;

// Các mật khẩu cho từng trang
const correctPassword = {
  1: "sondinh12",
  2: "sondinh23",
  3: "sondinh34"
};

// Hàm chuyển trang
function nextPage(page) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById('page' + i).classList.add('hidden');
  }
  document.getElementById('page' + page).classList.remove('hidden');
  currentPage = page;
}

// Hàm kiểm tra mật khẩu
function checkPassword(stage) {
  let inputPassword = "";
  let errorMessage = "";

  if (stage === 1) {
    inputPassword = document.getElementById('password1').value;
    errorMessage = 'error-message1';
  } else if (stage === 2) {
    inputPassword = document.getElementById('password2').value;
    errorMessage = 'error-message2';
  } else if (stage === 3) {
    inputPassword = document.getElementById('password3').value;
    errorMessage = 'error-message3';
  }

  if (inputPassword === correctPassword[stage]) {
    nextPage(currentPage + 1);
  } else {
    document.getElementById(errorMessage).classList.remove('hidden');
  }
}

// Mở đầu ở trang 1
nextPage(1);
