const headerMenuBtn = document.getElementById('headerMenuBtn');
const header = document.querySelector('header');
const headerMenus = document.querySelectorAll('#lnb ol li a');

headerMenuBtn.addEventListener( 'click', () => {

  headerMenuBtn.classList.toggle( 'active' );
  document.getElementById('lnb').classList.toggle( 'active' );
  header.classList.toggle( 'active' );

} );

headerMenus.forEach( (menu) => {

  menu.addEventListener( 'click', () => {

    headerMenuBtn.classList.remove( 'active' );
    document.getElementById( 'lnb' ).classList.remove( 'active' );
    header.classList.remove( 'active' );

  } );

} );

// for (menu of headerMenus) {
//   menu.addEventListener('click', function() {
//     headerMenuBtn.classList.remove('active');
//     document.getElementById('lnb').classList.remove('active');
//     header.classList.remove('active');
//   });
// }