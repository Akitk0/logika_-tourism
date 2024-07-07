
async function getProducts() {
    // Виконуємо запит до файлу "store_db.json" та очікуємо на відповідь
    let response = await fetch("db.json")
    // Очікуємо на отримання та розпакування JSON-даних з відповіді
    let products = await response.json()
    // Повертаємо отримані продукти
    return products
};
function getCardHTML(item){
    return `div class="my-card" style="width: 18rem;>
    <img src="img/${item.image}">
    <h5 class="text-my-card">{item.title}</h5>
    <p class="description-card"></p>
    ${item.price}
    </p>
    <button type="bitton" class=" btn-secondary "
                    data-product='${JSON.stringify(item)}
    додати в кошик</button>
    </div>


}
// Викликаємо асинхронну функцію та очікуємо на отримання продуктів
getProducts().then(function (products) {
    let productsList = document.querySelector('.products-list')
    if (productsList) {
        products.forEach(function (product) {
            // Відображаємо товари на сторінці
            productsList.innerHTML += getCardHTML(product)
        })
    }
    // Отримуємо всі кнопки "Купити" на сторінці
    let buyButtons = document.querySelectorAll('.products-list .cart-btn');
    // Навішуємо обробник подій на кожну кнопку "Купити"
     if (buyButtons) {
     buyButtons.forEach(function (button) {
     button.addEventListener('click', addToCart)
     });
     }
})

let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`
function scrollDown() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}
let button = document.querySelector('.arrow-next')
