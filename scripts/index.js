let // references
  navigationButton = null
  mobileMenu = null;

const toggleMobileMenu = () => {
  navigationButton.classList.toggle('header__button--active');
}

const init = () => {
  [navigationButton] = document.getElementsByClassName('js-header__button');

  navigationButton.addEventListener('click', toggleMobileMenu);
}

document.addEventListener('DOMContentLoaded', init);