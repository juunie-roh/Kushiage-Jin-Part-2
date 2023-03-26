const headerMenuBtn = document.getElementById('headerMenuBtn');
const header = headerMenuBtn.parentElement.parentElement.parentElement;

headerMenuBtn.addEventListener('click', function () {
  headerMenuBtn.classList.toggle('active');
  document.getElementById('lnb').classList.toggle('active');
  header.classList.toggle('active');
});

const headerMenus = document.querySelectorAll('#lnb ol li a');
for (menu of headerMenus) {
  menu.addEventListener('click', function() {
    headerMenuBtn.classList.remove('active');
    document.getElementById('lnb').classList.remove('active');
    header.classList.remove('active');
  });
}