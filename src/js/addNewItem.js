document.addEventListener("DOMContentLoaded", () => {
    processFormSubmit()
    showFileNamesOnInput()
})

function processFormSubmit() {

    const form = document.getElementsByClassName('add-coupon-form')[0]
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let coupons = JSON.parse(localStorage.getItem('coupons'))
        if (coupons === null) {
            coupons = []
        }

        const couponName = form.elements.namedItem('name').value
        if (coupons.filter(c => c.name === couponName).length !== 0) {
            throw `Coupon with name "${couponName}" already exists.`
        }

        const files = document.getElementsByClassName('image-input')[0]
        const reader = new FileReader()
        reader.readAsDataURL(files.files[0])
        reader.onload = () => {
            const couponToAdd = {
                name: couponName,
                shortDescription: getFormInputValue('shortDescription'),
                longDescription: getFormInputValue('longDescription'),
                company: getFormInputValue('company'),
                category: getFormInputValue('category'),
                expiryDate: getFormInputValue('expiryDate'),
                price: getFormInputValue('price'),
                imgUrl: reader.result
            }
            coupons.unshift(couponToAdd)
            localStorage.setItem('coupons', JSON.stringify(coupons))
            console.log(`Coupon "${couponName}" was added successfully.`)
        }
    })
    function getFormInputValue(key) {
        return form.elements.namedItem(key).value
    }
}

function showFileNamesOnInput() {

    const imagesInput = document.getElementsByClassName('images__input')[0]
    imagesInput.addEventListener('change', () => {
        const filenames = document.getElementsByClassName('images__filenames')[0]
        filenames.textContent = imagesInput.files[0].name
    })
}
