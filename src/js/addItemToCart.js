export default function addItemToCart(couponName) {

    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart === null) {
        cart = []
    }

    if (cart.filter(c => c === couponName).length === 0) {
        cart.push(couponName)
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(`Coupon "${couponName}" was added to the cart`)
    } else {
        throw `Coupon "${couponName}" is already in the cart`
    }
}
