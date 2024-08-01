
async function getProducts() {
    // Виконуємо запит до файлу "store_db.json" та очікуємо на відповідь
    let response = await fetch("db.json")
    // Очікуємо на отримання та розпакування JSON-даних з відповіді
    let products = await response.json()
    // Повертаємо отримані продукти
    return products
};
function getCardHTML(item) {
    return `<div class="card my-3">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <h5>${item.price}$</h5>
                         <button class="order-btn my-3" data-tour= '${JSON.stringify(item)}' data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front text"> Забронювати
                            </span>
                        </button>
                    </div>
                    <img src="img/${item.image}" class="card-img-bottom" alt="...">
                </div>`


}
// Викликаємо асинхронну функцію та очікуємо на отримання продуктів
function bookTour(event) {
    let tourData = event.target.getAttribute('data-tour')
    let tour = JSON.parse(tourData)

}
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        let tourData = button.getAttribute('data-tour')
        let tour = JSON.parse(tourData)
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        let title = exampleModal.querySelector('.tour-title')
        let date = exampleModal.querySelector('.tour-date')
        let description = exampleModal.querySelector('.tour-description')
        let price = exampleModal.querySelector('.tour-price')

        title.innerHTML = tour.title
        date.innerHTML = tour.date
        description.innerHTML = tour.description
        price.innerHTML = tour.price + `$`

    })
}

getProducts().then(function (products) {
    let productsList = document.querySelector('.tours')
    productsList.innerHTML = ''
    if (productsList) {
        products.forEach(function (product) {
            // Відображаємо товари на сторінці
            productsList.innerHTML += getCardHTML(product)
        })
    }
    // // Отримуємо всі кнопки "Купити" на сторінці
    // let buyButtons = document.querySelectorAll('.products-list .cart-btn');
    // // Навішуємо обробник подій на кожну кнопку "Купити"
    //  if (buyButtons) {
    //  buyButtons.forEach(function (button) {
    //  button.addEventListener('click', addToCart)
    //  });
    //  }
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

