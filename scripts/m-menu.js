(function () {
  const menuBtn = document.querySelector('.m-menu-link');
  const closeBtn = document.querySelector('.close-m-menu');
  const menu = document.querySelector('.m-menu');
  const menuItems = document.querySelectorAll('.m-menu-item');

  const toogleActive = () => {
    menu.classList.toggle('m-menu_active');
  }

  menuBtn.addEventListener('click', toogleActive);

  closeBtn.addEventListener('click', toogleActive);

  menuItems.forEach(item => {
    item.addEventListener('click', toogleActive)
  });

})();