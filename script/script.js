document.addEventListener('DOMContentLoaded', () => {

    const search = document.querySelector('.search');
    const cartBtn = document.getElementById('cart');
    const wishListBtn = document.getElementById('wishlist');
    const goodsWrapper = document.querySelector('.goods-wrapper');
    const cart = document.querySelector('.cart');
    

    const createCardGoods = (id, title, price, img) => {
        const card = document.createElement('div');        
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML= `<div class="card">
                            <div class="card-img-wrapper">
                                <img class="card-img-top" src="${img}" alt="">
                                <button class="card-add-wishlist" data-goods-id="${id}"></button>
                            </div>
                            <div class="card-body justify-content-between">
                                <a href="#" class="card-title">${title}</a>
                                <div class="card-price">${price} ₽</div>
                                <div>
                                    <button class="card-add-cart" data-goods-id="${id}">Добавить в корзину</button>
                                </div>
                            </div>
                        </div>`;
        return card;                

    };

    goodsWrapper.appendChild(createCardGoods(1, 'Дартс', 2000, 'img/temp/Archer.jpg'));
    goodsWrapper.appendChild(createCardGoods(2, 'Фламинго', 3000, 'img/temp/Flamingo.jpg'));
    goodsWrapper.appendChild(createCardGoods(3, 'Носки', 333, 'img/temp/Socks.jpg'));
    

    const closeCart = (event) => {
        const target = event.target;
        
        console.log(target);

        if (target === cart || target.classList.contains('cart-close')) {
            cart.style.display = '';
        };

        //закрытие корзины при нажатии на клавишу 'ESC' (не работает при первоначальном открыти страницы и окна корзины, а только при повторном нажатии на окно, потом без перезагрузки страницы срабатывает каждый раз. Почему???)
        document.addEventListener('keydown', (event) => {
            if (event.code == 'Escape') {
                cart.style.display = '';
            }
          });        
    };

    const openCart = () => {
        cart.style.display = 'flex';
        
        //запрет на прееход по ссылке (посмотрел на LearnJS, сам не понимаю этого кода до конца, как проверить, что он работает и правильно ли я вообще сюда вставил этот код?:)))
        cart.onclick = (event) => {
            if (event.target.nodeName != 'A') return;
          
            let href = event.target.getAttribute('href');
            alert( href );
          
            return false;
          };
    };


    cartBtn.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);
    

});