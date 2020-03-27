(function () {
  const links = document.querySelectorAll('.link');
  const arrowLink = document.querySelectorAll('.link__arrow');

  links.forEach((link) => {
    link.addEventListener('mouseenter', (e) => {
      link.children[0].classList.add('link__arrow_blue');
    })

    link.addEventListener('mouseleave', (e) => {
      link.children[0].classList.remove('link__arrow_blue');
    })
  })
})()