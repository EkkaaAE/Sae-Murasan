document.addEventListener("DOMContentLoaded", function () {
  const logos = document.getElementById("logos");
  const showBtn = document.getElementById("show");
  const hideBtn = document.getElementById("hide");

  // Kondisi awal
  showBtn.style.display = "block";
  hideBtn.style.display = "none";

  showBtn.addEventListener("click", function () {
    logos.style.right = "0px";
    showBtn.style.display = "none";
    hideBtn.style.display = "block";
  });

  hideBtn.addEventListener("click", function () {
    logos.style.right = "-48px";
    showBtn.style.display = "block";
    hideBtn.style.display = "none";
  });
});
