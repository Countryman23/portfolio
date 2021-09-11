const worksData = [
    {
        name: "Статичный сайт",
        title: 'Статичный сайт',
        img: "staticSite.jpg",
        path: 1,
        stack: ['HTML', 'CSS'],
        descr: 'Создание лендинга для своей практики.',
        link: 'https://countryman23.github.io/staticSite/'
    },
    {
        name: "Динамичный сайт",
        title: 'Динамичный сайт',
        img: "motionSite.jpg",
        path: 2,
        stack: ['HTML', 'CSS'],
        descr: 'Создание лендинга с анимацией.',
        link: 'https://countryman23.github.io/motionSite/'
    },
    {
        name: "Адаптивный сайт",
        title: 'Адаптивный сайт',
        img: "adaptiveSite.jpg",
        path: 3,
        stack: ['HTML', 'CSS'],
        descr: 'Создание лендинга с адаптацией под мобильные устойства.',
        link: 'https://countryman23.github.io/adaptiveSite/'
    },
    // {
    //     name: "Калькулятор",
    //     title: 'Статичный сайт',
    //     img: "staticSite.jpg",
    //     path: 4,
    //     stack: ['HTML', 'CSS'],
    //     descr: 'Создание лендинга для своей практики.',
    //     link: 'https://countryman23.github.io/staticSite/'
    // },
    // {
    //     name: "ТУДУ лист",
    //     title: 'Статичный сайт',
    //     img: "staticSite.jpg",
    //     path: 4,
    //     stack: ['HTML', 'CSS'],
    //     descr: 'Создание лендинга для своей практики.',
    //     link: 'https://countryman23.github.io/staticSite/'
    // },
    // {
    //     name: "Календарь",
    //     title: 'Статичный сайт',
    //     img: "staticSite.jpg",
    //     path: 4,
    //     stack: ['HTML', 'CSS'],
    //     descr: 'Создание лендинга для своей практики.',
    //     link: 'https://countryman23.github.io/staticSite/'
    // },
    {
        name: "Приложение на React.js - Социальная сеть",
        title: 'iChat',
        img: "iChat.jpg",
        path: 4,
        stack: ['axios', 'bootstrap', 'react', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk', 'redux-form', 'reselect'],
        descr: 'Сообщество умных людей (в разработке).',
        link: 'https://countryman23.github.io/iChat/#/'
    },
    // {
    //     name: "Разработка приложения - React-Pizza",
    //     title: 'React приложение',
    //     img: "pizza.jpg",
    //     path: 1,
    //     stack: ['react','hooks','gulp', 'sass'],
    //     descr: 'Разработка  интернет - магазина React-pizza.',
    //     link: 'https://github.com/Snegurjan/react-pizza'
    // },
    // {
    //     name: "Приложение на React.js - Music-fm",
    //     title: 'Music-fm',
    //     img: "music-fm.jpg",
    //     path: 2,
    //     stack: ['axios', 'bootstrap', 'md5 (хеширование)', 'react', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk'],
    //     descr: 'Приложение на React.js, предназначено для поиска треков, альбомов и исполнителей. В приложении реализованы возможности авторизации, добавление треков/альбомов/исполнителей в избранное. Также есть возможность просмотра своего профиля, друзей и других зарегестрированных пользователей. Приложение использует API сервиса last.fm.',
    //     link: 'https://github.com/Snegurjan/music'
    // },
    // {
    //     name: "Приложение на React.js - Marvel",
    //     title: 'Marvel',
    //     img: "marvel.png",
    //     path: 3,
    //     stack: ['react', 'react-router-dom',],
    //     descr: 'Приложение на React.js,приложение с описанием героев Marvel',
    //     link: 'https://github.com/Snegurjan/Marv-app'
    // },
    // {
    //     name: "Приложение на React.js - Социальная сеть",
    //     title: 'Социальная сеть',
    //     img: "social-network.jpg",
    //     path: 4,
    //     stack: ['axios', 'bootstrap', 'react', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk', 'redux-form', 'reselect'],
    //     descr: 'Приложение разрабатывалось по известному (в узких кругах) курсу "React JS - путь самурая".',
    //     link: 'https://github.com/Snegurjan/m-app'
    // },
    // {
    //     name: "Fullstack MERN - приложение",
    //     title: 'Link App',
    //     img: "link.png",
    //     path: 5,
    //     stack: ['MongoDB','Express','React.JS','Node.JS'],
    //     descr: 'Полноценное приложение с серверной частью',
    //     link: 'https://github.com/Snegurjan/app-link'
    // },
    // {
    //     name: 'Верстка лендинга салона красоты',
    //     title: 'Верстка',
    //     img: "salon.png",
    //     path: 6,
    //     stack: ['HTML', 'CSS'],
    //     descr: 'Сайт салона',
    //     link: 'https://snegurjan.github.io/summer-marathon/'
    // },
    // {
    //     name: "Верстка лэндинга портфолио",
    //     title: 'Верстка',
    //     img: "portfolio.png",
    //     path: 7,
    //     stack: ['Html', 'Less','CSS'],
    //     descr: 'Адаптивная верстка лэндинга Портфолио по PSD макету.',
    //     link: 'https://snegurjan.github.io/porfolio/'
    // },
    // {
    //     name: "Приложение на React JS - Todo App",
    //     title: 'React JS Todo',
    //     img: "remall.png",
    //     path: 8,
    //     stack: ['axios', 'firebase', 'formik', 'react', 'redux', 'react-router', 'redux-thunk', 'yup', 'sass'],
    //     descr: 'Приложение Вспомнить все разработано на React JS . ',
    //     link: 'https://github.com/Snegurjan/RememberEverything'
    // },
    // {
    //     name: "Тестовое задание корзина покупок",
    //     title: 'React',
    //     img: "shop.png",
    //     path: 9,
    //     stack: ['react', 'react-navigation'],
    //     descr: 'Приложение на React тестовое задание',
    //     link: 'https://github.com/Snegurjan/testovoe-SHOP-02.10.2020'
    // },
    // {
    //     name: "Сайт на bootstrap",
    //     title: 'Bootstrap',
    //     img: "bstrp.png",
    //     path: 10,
    //     stack: ['bootstrap'],
    //     descr: 'Сайт разработан на бутсрап',
    //     link: 'https://snegurjan.github.io/btstrp-site/'
    // },
]

export default worksData