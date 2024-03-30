const header = document.getElementById('header');
const headerNav = document.querySelector('.header_nav');
let headerFixed = false;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let capa = document.getElementById('capa');
  let capaVisible = capa.getBoundingClientRect().bottom > 0;

  if (!capaVisible && !headerFixed) {
    headerNav.classList.add('fixedHeader');
    headerFixed = true;
  } else if (capaVisible && headerFixed) {
    headerNav.classList.remove('fixedHeader');
    headerNav.classList.remove('scrollHide'); // Remover scrollHide quando o headerNav não está mais fixo
    headerFixed = false;
  }

  // Verifica se o header_nav está fixo e adiciona ou remove a classe scrollHide conforme a direção de rolagem
  if (headerFixed) {
    let scrollTop = window.scrollY || window.pageYOffset;
    if (scrollTop > lastScrollTop) {
      headerNav.classList.add('scrollHide');
    } else {
      headerNav.classList.remove('scrollHide');
    }
    lastScrollTop = scrollTop;
  }
});
