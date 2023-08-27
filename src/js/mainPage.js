// import _ from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm';
import _ from 'lodash'
import addItemToCart from './addItemToCart.js'

document.addEventListener('DOMContentLoaded', () => {

    scrollRestoration()
    try {
        while (document.documentElement.scrollHeight <= window.innerHeight) {
            if (!addCoupons()) {
                break
            }
        }

        filteringCoupons()
        loadingMoreData()
    } catch (e) {
        console.log(e)
    }

    document.getElementsByClassName('back-to-top-button')[0].addEventListener('click', () => {
        window.scrollTo(0, 0)
    })
})

function addCoupons(enableAnimation = true) {

    const couponsInOneLine = 5
    const couponsToAdd = couponsInOneLine * 2

    const category = document.getElementsByClassName('filter__select__chosen-option')[0].textContent
    const namePart = document.getElementsByClassName('filter__input')[0].value

    const root = document.getElementsByClassName('coupons__container')[0]

    const coupons = JSON.parse(localStorage.getItem('coupons'))
                        .filter(c => (category === 'All Categories' || c.category === category)
                            && c.name.toLowerCase().indexOf(namePart.toLowerCase()) !== -1
                            && new Date(c.expiryDate) > new Date())
                        .slice(root.children.length, root.children.length + couponsToAdd)
    if (coupons.length === 0) {
        return false
    }

    for (let coupon of coupons) {
        const fullDaysToExpire = Math.floor((new Date(coupon.expiryDate) - new Date()) / (1000 * 60 * 60 * 24))
        const element = document.createElement('div')
        element.className = 'coupon'
        element.innerHTML = `
                <div class="coupon__image-container">
                    <img src="${coupon.imgUrl}" alt="coupon-image">
                </div>
                <div class="coupon__info">
                    <span class="name">
                        <a class="name__link" href="../html/itemDetails.html?couponName=${coupon.name}">${coupon.name}</a>
                    </span>
                    <button class="add-to-favourites"><span class="material-icons">favorite_border</span></button>
                    <span class="description">${coupon.shortDescription}</span>
                    <span class="validity">Expires ${fullDaysToExpire === 0 ? 'today' : `in ${fullDaysToExpire} days`}</span>
                    <div class="separator"></div>   
                    <span class="price">$${coupon.price}</span>
                    <button class="add-to-cart-button">Add to cart</button>
                </div>`
        element.setAttribute('data-category', coupon.category)
        element.getElementsByClassName('add-to-cart-button')[0].onclick = () => addItemToCart(coupon.name)

        if (enableAnimation) {
            element.style.visibility = 'hidden'
            setTimeout(() => {
                element.style.visibility = 'visible'
                element.classList.add('animated-appearance')
            }, coupons.indexOf(coupon) * 250)
        }
        root.appendChild(element)
    }

    return true
}

function filteringCoupons() {

    const searchInput = document.getElementsByClassName('filter__input')[0]
    const categorySelect = document.getElementsByClassName('filter__select')[0]
    const chosenCategory = document.getElementsByClassName('filter__select__chosen-option')[0]

    function filter() {
        const coupons = document.getElementsByClassName('coupons__container')[0]
        coupons.innerHTML = ''
        while (document.documentElement.scrollHeight <= window.innerHeight) {
            if (!addCoupons()) {
                break
            }
        }
    }

    let inputFilterTimer
    searchInput.addEventListener('input', () => {
        clearTimeout(inputFilterTimer)
        inputFilterTimer = setTimeout(() => filter(), 500)
    });

    const selectOptions = categorySelect.getElementsByClassName('filter__select__options')[0].children;
    [...selectOptions].forEach(c => c.addEventListener('click', () => {
        if (chosenCategory.textContent !== c.textContent) {
            chosenCategory.textContent = c.textContent
            filter()
        }
    }))

    const categories = [...document.getElementsByClassName('category')]
    categories.forEach(c => {
        c.addEventListener('click', () => {
            chosenCategory.textContent = c.getElementsByClassName('name')[0].textContent
            filter()
        })
    })
}

function loadingMoreData() {

    window.addEventListener('scroll', _.throttle(() => {
        if (document.documentElement.scrollHeight - window.scrollY - window.innerHeight <= 1) {
            const loadingGif = document.getElementsByClassName('loading-gif')[0]
            setTimeout(() => {
                loadingGif.style.visibility = 'visible'
            }, 500)
            setTimeout(() => {
                loadingGif.style.visibility = 'hidden'
                addCoupons()
            }, 1500)
        }
    }, 500))
}

function scrollRestoration() {

    window.history.scrollRestoration = 'manual'
    window.addEventListener('scroll', () => {
        sessionStorage.setItem('lastScrollHeight', window.scrollY.toString())
    })

    const scrollYTo = parseInt(sessionStorage.getItem('lastScrollHeight'))
    while (document.documentElement.scrollHeight - scrollYTo - window.innerHeight < 0) {
        if (!addCoupons(false)) {
            break
        }
    }
    window.scrollTo(0, scrollYTo)
}

