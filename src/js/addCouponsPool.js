document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('coupons', JSON.stringify(coupons))
})

const coupons = [{
    name:             'Formula1 Austrian Gran-prix',
    shortDescription: 'Dictumst viverra rhoncus justo hendrerit viverra placerat. Imperdiet suscipit dis varius. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa.',
    longDescription:  'Rhoncus potenti dapibus torquent pellentesque nunc sed himenaeos ornare tincidunt. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa. Vulputate lacus non fusce nascetur ut proin sociis! Eleifend dapibus tincidunt at primis convallis. Odio turpis dictumst amet dignissim vehicula eget laoreet. Suscipit sit natoque ligula sed lorem. Mus nulla sapien, dui imperdiet et semper non. Dapibus aliquam turpis feugiat hendrerit massa ridiculus, id class purus ornare? Ultricies ultrices mus sociosqu taciti facilisis nam scelerisque ad lacinia habitasse! Porttitor ornare malesuada tempus. Sociis.',
    company:          'Lorem ipsum',
    category:         'Sport',
    expiryDate:       '2025-08-24T12:52',
    price:            '666',
    imgUrl:           '../img/coupons/formula1.png'
}, {
    name:             'Semi-finals Champions League',
    shortDescription: 'Dictumst viverra rhoncus justo hendrerit viverra placerat. Imperdiet suscipit dis varius. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa.',
    longDescription:  'Rhoncus potenti dapibus torquent pellentesque nunc sed himenaeos ornare tincidunt. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa. Vulputate lacus non fusce nascetur ut proin sociis! Eleifend dapibus tincidunt at primis convallis. Odio turpis dictumst amet dignissim vehicula eget laoreet. Suscipit sit natoque ligula sed lorem. Mus nulla sapien, dui imperdiet et semper non. Dapibus aliquam turpis feugiat hendrerit massa ridiculus, id class purus ornare? Ultricies ultrices mus sociosqu taciti facilisis nam scelerisque ad lacinia habitasse! Porttitor ornare malesuada tempus. Sociis.',
    company:          'Lorem ipsum',
    category:         'Sport',
    expiryDate:       '2025-08-24T12:52',
    price:            '666',
    imgUrl:           '../img/coupons/champions-league.png'
}, {
    name:             'Helicopter ride',
    shortDescription: 'Dictumst viverra rhoncus justo hendrerit viverra placerat. Imperdiet suscipit dis varius. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa.',
    longDescription:  'Rhoncus potenti dapibus torquent pellentesque nunc sed himenaeos ornare tincidunt. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa. Vulputate lacus non fusce nascetur ut proin sociis! Eleifend dapibus tincidunt at primis convallis. Odio turpis dictumst amet dignissim vehicula eget laoreet. Suscipit sit natoque ligula sed lorem. Mus nulla sapien, dui imperdiet et semper non. Dapibus aliquam turpis feugiat hendrerit massa ridiculus, id class purus ornare? Ultricies ultrices mus sociosqu taciti facilisis nam scelerisque ad lacinia habitasse! Porttitor ornare malesuada tempus. Sociis.',
    company:          'Lorem ipsum',
    category:         'Sightseeing',
    expiryDate:       '2025-08-24T12:52',
    price:            '666',
    imgUrl:           '../img/coupons/helicopter-ride.png'
}, {
    name:             'Make up',
    shortDescription: 'Dictumst viverra rhoncus justo hendrerit viverra placerat. Imperdiet suscipit dis varius. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa.',
    longDescription:  'Rhoncus potenti dapibus torquent pellentesque nunc sed himenaeos ornare tincidunt. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa. Vulputate lacus non fusce nascetur ut proin sociis! Eleifend dapibus tincidunt at primis convallis. Odio turpis dictumst amet dignissim vehicula eget laoreet. Suscipit sit natoque ligula sed lorem. Mus nulla sapien, dui imperdiet et semper non. Dapibus aliquam turpis feugiat hendrerit massa ridiculus, id class purus ornare? Ultricies ultrices mus sociosqu taciti facilisis nam scelerisque ad lacinia habitasse! Porttitor ornare malesuada tempus. Sociis.',
    company:          'Lorem ipsum',
    category:         'Health',
    expiryDate:       '2025-08-24T12:52',
    price:            '666',
    imgUrl:           '../img/coupons/make-up.png'
}, {
    name:             'Motorbike ride',
    shortDescription: 'Dictumst viverra rhoncus justo hendrerit viverra placerat. Imperdiet suscipit dis varius. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa.',
    longDescription:  'Rhoncus potenti dapibus torquent pellentesque nunc sed himenaeos ornare tincidunt. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa. Vulputate lacus non fusce nascetur ut proin sociis! Eleifend dapibus tincidunt at primis convallis. Odio turpis dictumst amet dignissim vehicula eget laoreet. Suscipit sit natoque ligula sed lorem. Mus nulla sapien, dui imperdiet et semper non. Dapibus aliquam turpis feugiat hendrerit massa ridiculus, id class purus ornare? Ultricies ultrices mus sociosqu taciti facilisis nam scelerisque ad lacinia habitasse! Porttitor ornare malesuada tempus. Sociis.',
    company:          'Lorem ipsum',
    category:         'Sport',
    expiryDate:       '2025-08-24T12:52',
    price:            '666',
    imgUrl:           '../img/coupons/motorbike-ride.png'
}, {
    name:             'Driver license',
    shortDescription: 'Dictumst viverra rhoncus justo hendrerit viverra placerat. Imperdiet suscipit dis varius. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa.',
    longDescription:  'Rhoncus potenti dapibus torquent pellentesque nunc sed himenaeos ornare tincidunt. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa. Vulputate lacus non fusce nascetur ut proin sociis! Eleifend dapibus tincidunt at primis convallis. Odio turpis dictumst amet dignissim vehicula eget laoreet. Suscipit sit natoque ligula sed lorem. Mus nulla sapien, dui imperdiet et semper non. Dapibus aliquam turpis feugiat hendrerit massa ridiculus, id class purus ornare? Ultricies ultrices mus sociosqu taciti facilisis nam scelerisque ad lacinia habitasse! Porttitor ornare malesuada tempus. Sociis.',
    company:          'Lorem ipsum',
    category:         'Others',
    expiryDate:       '2025-08-24T12:52',
    price:            '666',
    imgUrl:           '../img/coupons/driver-license.png'
}, {
    name:             'Photo session',
    shortDescription: 'Dictumst viverra rhoncus justo hendrerit viverra placerat. Imperdiet suscipit dis varius. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa.',
    longDescription:  'Rhoncus potenti dapibus torquent pellentesque nunc sed himenaeos ornare tincidunt. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa. Vulputate lacus non fusce nascetur ut proin sociis! Eleifend dapibus tincidunt at primis convallis. Odio turpis dictumst amet dignissim vehicula eget laoreet. Suscipit sit natoque ligula sed lorem. Mus nulla sapien, dui imperdiet et semper non. Dapibus aliquam turpis feugiat hendrerit massa ridiculus, id class purus ornare? Ultricies ultrices mus sociosqu taciti facilisis nam scelerisque ad lacinia habitasse! Porttitor ornare malesuada tempus. Sociis.',
    company:          'Lorem ipsum',
    category:         'Others',
    expiryDate:       '2025-08-24T12:52',
    price:            '666',
    imgUrl:           '../img/coupons/photo-session.png'
}, {
    name:             'Massage',
    shortDescription: 'Dictumst viverra rhoncus justo hendrerit viverra placerat. Imperdiet suscipit dis varius. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa.',
    longDescription:  'Rhoncus potenti dapibus torquent pellentesque nunc sed himenaeos ornare tincidunt. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa. Vulputate lacus non fusce nascetur ut proin sociis! Eleifend dapibus tincidunt at primis convallis. Odio turpis dictumst amet dignissim vehicula eget laoreet. Suscipit sit natoque ligula sed lorem. Mus nulla sapien, dui imperdiet et semper non. Dapibus aliquam turpis feugiat hendrerit massa ridiculus, id class purus ornare? Ultricies ultrices mus sociosqu taciti facilisis nam scelerisque ad lacinia habitasse! Porttitor ornare malesuada tempus. Sociis.',
    company:          'Lorem ipsum',
    category:         'Health',
    expiryDate:       '2025-08-24T12:52',
    price:            '666',
    imgUrl:           '../img/coupons/massage.png'
}, {
    name:             'Yoga session',
    shortDescription: 'Dictumst viverra rhoncus justo hendrerit viverra placerat. Imperdiet suscipit dis varius. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa.',
    longDescription:  'Rhoncus potenti dapibus torquent pellentesque nunc sed himenaeos ornare tincidunt. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa. Vulputate lacus non fusce nascetur ut proin sociis! Eleifend dapibus tincidunt at primis convallis. Odio turpis dictumst amet dignissim vehicula eget laoreet. Suscipit sit natoque ligula sed lorem. Mus nulla sapien, dui imperdiet et semper non. Dapibus aliquam turpis feugiat hendrerit massa ridiculus, id class purus ornare? Ultricies ultrices mus sociosqu taciti facilisis nam scelerisque ad lacinia habitasse! Porttitor ornare malesuada tempus. Sociis.',
    company:          'Lorem ipsum',
    category:         'Sport',
    expiryDate:       '2025-08-24T12:52',
    price:            '666',
    imgUrl:           '../img/coupons/yoga-session.png'
}, {
    name:             'Horse riding',
    shortDescription: 'Dictumst viverra rhoncus justo hendrerit viverra placerat. Imperdiet suscipit dis varius. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa.',
    longDescription:  'Rhoncus potenti dapibus torquent pellentesque nunc sed himenaeos ornare tincidunt. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa. Vulputate lacus non fusce nascetur ut proin sociis! Eleifend dapibus tincidunt at primis convallis. Odio turpis dictumst amet dignissim vehicula eget laoreet. Suscipit sit natoque ligula sed lorem. Mus nulla sapien, dui imperdiet et semper non. Dapibus aliquam turpis feugiat hendrerit massa ridiculus, id class purus ornare? Ultricies ultrices mus sociosqu taciti facilisis nam scelerisque ad lacinia habitasse! Porttitor ornare malesuada tempus. Sociis.',
    company:          'Lorem ipsum',
    category:         'Sport',
    expiryDate:       '2025-08-24T12:52',
    price:            '666',
    imgUrl:           '../img/coupons/horse-riding.png'
}, {
    name:             'Zoo session',
    shortDescription: 'Dictumst viverra rhoncus justo hendrerit viverra placerat. Imperdiet suscipit dis varius. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa.',
    longDescription:  'Rhoncus potenti dapibus torquent pellentesque nunc sed himenaeos ornare tincidunt. Parturient nostra fringilla hendrerit ut nulla montes ut penatibus arcu massa. Vulputate lacus non fusce nascetur ut proin sociis! Eleifend dapibus tincidunt at primis convallis. Odio turpis dictumst amet dignissim vehicula eget laoreet. Suscipit sit natoque ligula sed lorem. Mus nulla sapien, dui imperdiet et semper non. Dapibus aliquam turpis feugiat hendrerit massa ridiculus, id class purus ornare? Ultricies ultrices mus sociosqu taciti facilisis nam scelerisque ad lacinia habitasse! Porttitor ornare malesuada tempus. Sociis.',
    company:          'Lorem ipsum',
    category:         'Sightseeing',
    expiryDate:       '2025-08-24T12:52',
    price:            '666',
    imgUrl:           '../img/coupons/zoo-session.png'
}]
