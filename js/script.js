window.addEventListener('DOMContentLoaded', function() {

    const plus = document.querySelectorAll('.content__wrapper .scan .item__footer-form'),
          ok = document.querySelectorAll('.content__wrapper .scan .item__footer-form .ok');

    plus.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            ok[i].classList.toggle('active');
            plus[i].classList.toggle('edit');
        });
    });
});