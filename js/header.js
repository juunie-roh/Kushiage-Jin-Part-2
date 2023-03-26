const headerMenuBtn = document.getElementById('headerMenuBtn');
const header = headerMenuBtn.parentElement.parentElement.parentElement;

headerMenuBtn.addEventListener('click', function () {
  headerMenuBtn.classList.toggle('active');
  document.getElementById('lnb').classList.toggle('active');
  header.classList.toggle('active');
});