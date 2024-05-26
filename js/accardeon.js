'use strict';

document.querySelectorAll('.accardeon__trigger').forEach((item) => {
  item.addEventListener('click', ()=>{
    item.parentNode.classList.toggle('accardeon__item--active')
  })
});
