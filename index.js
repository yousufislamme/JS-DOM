const btn = document.getElementById('click');
let bgColor = document.getElementById('bg');

btn.addEventListener("click", function () {

   bgColor.classList.toggle("bg");
});
