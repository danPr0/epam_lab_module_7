import addItemToCart from './addItemToCart.js'

document.addEventListener('DOMContentLoaded', () => {

    const couponName = new URL(window.location.href).searchParams.get('couponName')
    const coupon = JSON.parse(localStorage.getItem('coupons')).filter(c => c.name === couponName)[0]

    const fullHoursToExpire = Math.floor((new Date(coupon.expiryDate) - new Date()) / (1000 * 60 * 60))
    const fullDaysToExpire = Math.floor(fullHoursToExpire / 24)

    const element = document.createElement('div')
    element.className = 'item-details'
    element.innerHTML = `        
        <section class="section-1">
            <img src="${coupon.imgUrl}" alt="coupon-image">
            <h2>Item detailed description</h2>
            <p>${coupon.longDescription}</p>
        </section>
        <section class="section-2">
            <h1>${coupon.name}</h1>
            <p class="description">${coupon.shortDescription}</p>
            <p class="time-left">
                <span class="time-left__label">Time Left To Buy</span><br>
                <span class="time-left__value">${fullDaysToExpire} days ${fullHoursToExpire % 24} hours</span>
            </p>
            <p class="purchase">
                <span class="purchase__price">$${coupon.price}</span>
                <button class="purchase__button">
                    <span class="purchase__button__text">Add to cart</span>
                    <span class="material-icons">shopping_cart</span>
                </button>
            </p>
        </section>`
    element.getElementsByClassName('purchase__button')[0].onclick = () => addItemToCart(coupon.name)

    const root = document.getElementsByTagName('main')[0]
    root.appendChild(element)
})
