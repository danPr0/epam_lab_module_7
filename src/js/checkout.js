document.addEventListener("DOMContentLoaded", () => {

    const checkoutContainer = document.getElementsByClassName('checkout-container')[0]
    const emptyCartMessage = document.getElementsByClassName('empty-cart-message')[0]

    const coupons = JSON.parse(localStorage.getItem('coupons'))
    const cart = JSON.parse(localStorage.getItem('cart'))

    if (cart !== null) {
        let sum = 0
        for (const couponName of cart) {
            const coupon = coupons.filter(c => c.name === couponName)[0]
            sum += parseInt(coupon.price)

            const element = document.createElement('div')
            element.className = 'coupon-info'
            element.innerHTML = `                
                <img src="${coupon.imgUrl}" alt="coupon-image">
                <article>
                    <h2>
                        <a class="coupon-details-link" href="../html/itemDetails.html?couponName=${coupon.name}">${coupon.name}</a>
                    </h2>
                    <p>fkljdklfjsdklfjsdklfjklsd fjsdklffk ljdklf jsdfsdfsdfs dfsdfsdfsdfsdf sdfsdfsdf sdsdklfjsdklfjkls dfjsd klfjsdkl fjsdjfsdklf jsdklfjsdklfjklsdfjks dfjlsdfjsdklfjsdkljk fkljdklfjsdkl fjsdklfjkl sdfjsdklfjsdklfjsdjfsd klfjsdklfjsdklfj klsdfjksdfjlsdfjsdklfjsdkljkjsdklfjsdjfsdklfjsdklfjsdklfjklsdfjksdfjlsdfjsdklfjsdkljk</p>
                </article>
                <p class="price">$${coupon.price}</p>`

            const root = document.getElementsByClassName('coupon-list')[0]
            root.appendChild(element)
        }

        const totalPrice = document.getElementsByClassName('total__value')[0]
        totalPrice.textContent = `$${sum}`

        checkoutContainer.style.removeProperty('display')
        emptyCartMessage.style.display = 'none'
    } else {
        checkoutContainer.style.display = 'none'
        emptyCartMessage.style.removeProperty('display')
    }
})
