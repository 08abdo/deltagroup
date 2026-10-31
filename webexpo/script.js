// 1. تبديل الوضع (Dark / Light)
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const savedTheme = localStorage.getItem("site-theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeIcon.classList.replace("fa-sun", "fa-moon");
} else {
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("site-theme", "light");
  } else {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("site-theme", "dark");
  }
});

// 2. التحكم في النافذة المنبثقة لإنستغرام (Modal)
const openInstaBtn = document.getElementById("open-insta-modal");
const closeInstaBtn = document.getElementById("close-modal");
const instaModal = document.getElementById("insta-modal");

// فتح النافذة
openInstaBtn.addEventListener("click", () => {
  instaModal.classList.add("show");
});

// إغلاق النافذة من زر (X)
closeInstaBtn.addEventListener("click", () => {
  instaModal.classList.remove("show");
});

// إغلاق النافذة عند الضغط في أي مكان خارج البطاقة
instaModal.addEventListener("click", (e) => {
  if (e.target === instaModal) {
    instaModal.classList.remove("show");
  }
});

// إغلاق بالزر Esc في لوحة المفاتيح
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && instaModal.classList.contains("show")) {
    instaModal.classList.remove("show");
  }
});
