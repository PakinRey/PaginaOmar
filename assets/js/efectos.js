const efectoScroll = document.querySelector('.scroll_Efect');

window.addEventListener('scroll', () => {
  const efectoScrollPos = efectoScroll.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  if (efectoScrollPos < windowHeight / 2) {
    efectoScroll.classList.add('active');
  } else {
    efectoScroll.classList.remove('active');
  }
});

