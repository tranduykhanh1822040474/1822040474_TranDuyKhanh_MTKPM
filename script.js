// script.js - DevOps Demo Website
// Sinh vien: Tran Duy Khanh - 1822040474

// Hien thi thong bao chao mung khi trang tai xong
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website da tai thanh cong!");
  console.log("Sinh vien: Tran Duy Khanh - 1822040474");
  console.log("CI/CD Pipeline: GitHub Actions -> GitHub Pages");

  // Them hieu ung highlight cho badge khi hover
  const badge = document.querySelector(".badge");
  if (badge) {
    badge.addEventListener("mouseenter", function () {
      badge.style.background = "#1f6feb44";
    });
    badge.addEventListener("mouseleave", function () {
      badge.style.background = "#1f6feb22";
    });
  }

  // Dong ho hien thi thoi gian hien tai
  const footer = document.querySelector("footer p");
  if (footer) {
    const now = new Date();
    const timeStr = now.toLocaleString("vi-VN");
    footer.textContent += " | Tai trang luc: " + timeStr;
  }

  // Dem so buoc pipeline
  const steps = document.querySelectorAll(".pipeline .step");
  console.log("So buoc trong pipeline: " + steps.length);
});
