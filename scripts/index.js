let // references
  navigationButton = null
  mobileMenu = null;

const toggleMobileMenu = () => {
  navigationButton.classList.toggle('header__button--active');
  mobileMenu.classList.toggle('navigation--active');
}

const init = () => {
  [navigationButton] = document.getElementsByClassName('js-header__button');
  [mobileMenu] = document.getElementsByClassName('js-navigation');
  navigationButton.addEventListener('click', toggleMobileMenu);
}

document.addEventListener('DOMContentLoaded', init);