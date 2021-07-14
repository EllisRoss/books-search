import {AppStateType, InferActionTypes} from "./store";
import {Book} from "../types/types";

const BOOKS_RECEIVED = 'books-search/search/BOOKS_RECEIVED';
const IS_FETCHING_CHANGED = 'books-search/search/IS_FETCHING_CHANGED';

let initialState = {
    searchResults: 0,
    isFetching: false,
    books: [
        {
            "kind": "books#volume",
            "id": "MqRXAwAAQBAJ",
            "etag": "xpFiO0GaUL0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/MqRXAwAAQBAJ",
            "volumeInfo": {
                "title": "Node.js Разработка серверных веб-приложений на JavaScript",
                "authors": [
                    "Дэвид Хэррон"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет использовать его в серверных приложениях. В основе платформы лежит исключительно быстрый движок JavaScript, заимствованный из браузера Chrome, к которому добавлена быстрая и надежная библиотека асинхронного сетевого ввода/вывода. Основной упор в Node.js делается на создании высокопроизводительных, хорошо масштабируемых клиентских и серверных приложений.На практических примерах вы научитесь пользоваться серверным и клиентским объектами HTTP, каркасами Connect и Express, освоите алгоритмы асинхронного выполнения и узнаете, как работать с базами данных на основе SQL и с MongoDB.Начав с практических рекомендаций по установке и настройке Node.js в режиме разработки и эксплуатации, вы научитесь разрабатывать клиентские и серверные HTTP-приложения; познакомитесь с применяемой в Node.js системой организации модулей на основе спецификации CommonJS, позволяющей реализовать подмножество технологии объектно-ориентированного проектирования.Издание предназначено для программистов, знакомых с основами JavaScript и веб-разработки.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457573277"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457573273"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "un",
                "previewLink": "http://books.google.ru/books?id=MqRXAwAAQBAJ&printsec=frontcover&dq=js&hl=&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 240.12,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 216.11,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&rdid=book-MqRXAwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 240120000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 216110000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D1%81%D0%B5%D1%80%D0%B2%D0%B5-sample-pdf.acsm?id=MqRXAwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=MqRXAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "iFcHCgAAQBAJ",
            "etag": "qfM4MrucxDw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/iFcHCgAAQBAJ",
            "volumeInfo": {
                "title": "Node.js. Путеводитель по технологии",
                "authors": [
                    "Кирилл Сухов"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "За последние несколько лет платформа Node.js стремительно повысила свой статус от экспериментальной технологии до основы для серьезных промышленных проектов. Тысячи программистов оценили возможность построения достаточно сложных, высоко нагруженных приложений на простом, элегантном и, самое главное, легковесном механизме.Все эти скучные слова правдивы, но на самом деле не это главное. Прежде всего Node.js – это совершенно увлекательная и захватывающая вещь, с которой по-настоящему интересно работать!Есть одна проблема – невозможно рассказывать про использование Node.js в отрыве от остальных технологий современной веб-разработки (и Highload-разработки). Я и не стал этого делать, дав обзор инструментов, без которых сегодня трудно обойтись. Прежде всего это чудесный язык JavaScript, и в книге рассказано о новинках в его последней и будущей спецификациях (EcmaScript 5 и 6). Кроме того, дается краткое введение в большинство связанных веб-технологий – от NoSQL-хранилищ данных (Memcached, MongoDB, Redis) до CSS-препроцессоров и MVC JavaScript-фреймворков. Конечно, эту книгу нельзя рассматривать как полноценный учебник по MongoDB, LESS или EcmaScript 6, Dart или CoffeScript, но в ней дано основное представление об этих довольно интересных вещах, вполне достаточное для начала работы.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457834613"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457834611"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ru",
                "previewLink": "http://books.google.ru/books?id=iFcHCgAAQBAJ&pg=PA39&dq=js&hl=&cd=2&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 276,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 248.4,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&rdid=book-iFcHCgAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 276000000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 248400000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%9F%D1%83%D1%82%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%BF%D0%BE_%D1%82-sample-pdf.acsm?id=iFcHCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=iFcHCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "&lt;anonymous&gt; (C:\\Users\\Geol\\time.<b>js</b>:5:10) at Module._compile (module.<b>js</b>:456:<br>\n26) at Object.Module._extensions..<b>js</b> (module.<b>js</b>:474:10) at Module.load (module.<br>\n<b>js</b>:356:32) at Function.Module._load (module.<b>js</b>:312:12) at Function.Module."
            }
        },
        {
            "kind": "books#volume",
            "id": "MqRXAwAAQBAJ",
            "etag": "xpFiO0GaUL0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/MqRXAwAAQBAJ",
            "volumeInfo": {
                "title": "Node.js Разработка серверных веб-приложений на JavaScript",
                "authors": [
                    "Дэвид Хэррон"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет использовать его в серверных приложениях. В основе платформы лежит исключительно быстрый движок JavaScript, заимствованный из браузера Chrome, к которому добавлена быстрая и надежная библиотека асинхронного сетевого ввода/вывода. Основной упор в Node.js делается на создании высокопроизводительных, хорошо масштабируемых клиентских и серверных приложений.На практических примерах вы научитесь пользоваться серверным и клиентским объектами HTTP, каркасами Connect и Express, освоите алгоритмы асинхронного выполнения и узнаете, как работать с базами данных на основе SQL и с MongoDB.Начав с практических рекомендаций по установке и настройке Node.js в режиме разработки и эксплуатации, вы научитесь разрабатывать клиентские и серверные HTTP-приложения; познакомитесь с применяемой в Node.js системой организации модулей на основе спецификации CommonJS, позволяющей реализовать подмножество технологии объектно-ориентированного проектирования.Издание предназначено для программистов, знакомых с основами JavaScript и веб-разработки.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457573277"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457573273"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "un",
                "previewLink": "http://books.google.ru/books?id=MqRXAwAAQBAJ&printsec=frontcover&dq=js&hl=&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 240.12,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 216.11,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&rdid=book-MqRXAwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 240120000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 216110000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D1%81%D0%B5%D1%80%D0%B2%D0%B5-sample-pdf.acsm?id=MqRXAwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=MqRXAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "iFcHCgAAQBAJ",
            "etag": "qfM4MrucxDw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/iFcHCgAAQBAJ",
            "volumeInfo": {
                "title": "Node.js. Путеводитель по технологии",
                "authors": [
                    "Кирилл Сухов"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "За последние несколько лет платформа Node.js стремительно повысила свой статус от экспериментальной технологии до основы для серьезных промышленных проектов. Тысячи программистов оценили возможность построения достаточно сложных, высоко нагруженных приложений на простом, элегантном и, самое главное, легковесном механизме.Все эти скучные слова правдивы, но на самом деле не это главное. Прежде всего Node.js – это совершенно увлекательная и захватывающая вещь, с которой по-настоящему интересно работать!Есть одна проблема – невозможно рассказывать про использование Node.js в отрыве от остальных технологий современной веб-разработки (и Highload-разработки). Я и не стал этого делать, дав обзор инструментов, без которых сегодня трудно обойтись. Прежде всего это чудесный язык JavaScript, и в книге рассказано о новинках в его последней и будущей спецификациях (EcmaScript 5 и 6). Кроме того, дается краткое введение в большинство связанных веб-технологий – от NoSQL-хранилищ данных (Memcached, MongoDB, Redis) до CSS-препроцессоров и MVC JavaScript-фреймворков. Конечно, эту книгу нельзя рассматривать как полноценный учебник по MongoDB, LESS или EcmaScript 6, Dart или CoffeScript, но в ней дано основное представление об этих довольно интересных вещах, вполне достаточное для начала работы.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457834613"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457834611"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ru",
                "previewLink": "http://books.google.ru/books?id=iFcHCgAAQBAJ&pg=PA39&dq=js&hl=&cd=2&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 276,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 248.4,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&rdid=book-iFcHCgAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 276000000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 248400000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%9F%D1%83%D1%82%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%BF%D0%BE_%D1%82-sample-pdf.acsm?id=iFcHCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=iFcHCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "&lt;anonymous&gt; (C:\\Users\\Geol\\time.<b>js</b>:5:10) at Module._compile (module.<b>js</b>:456:<br>\n26) at Object.Module._extensions..<b>js</b> (module.<b>js</b>:474:10) at Module.load (module.<br>\n<b>js</b>:356:32) at Function.Module._load (module.<b>js</b>:312:12) at Function.Module."
            }
        },
        {
            "kind": "books#volume",
            "id": "MqRXAwAAQBAJ",
            "etag": "xpFiO0GaUL0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/MqRXAwAAQBAJ",
            "volumeInfo": {
                "title": "Node.js Разработка серверных веб-приложений на JavaScript",
                "authors": [
                    "Дэвид Хэррон"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет использовать его в серверных приложениях. В основе платформы лежит исключительно быстрый движок JavaScript, заимствованный из браузера Chrome, к которому добавлена быстрая и надежная библиотека асинхронного сетевого ввода/вывода. Основной упор в Node.js делается на создании высокопроизводительных, хорошо масштабируемых клиентских и серверных приложений.На практических примерах вы научитесь пользоваться серверным и клиентским объектами HTTP, каркасами Connect и Express, освоите алгоритмы асинхронного выполнения и узнаете, как работать с базами данных на основе SQL и с MongoDB.Начав с практических рекомендаций по установке и настройке Node.js в режиме разработки и эксплуатации, вы научитесь разрабатывать клиентские и серверные HTTP-приложения; познакомитесь с применяемой в Node.js системой организации модулей на основе спецификации CommonJS, позволяющей реализовать подмножество технологии объектно-ориентированного проектирования.Издание предназначено для программистов, знакомых с основами JavaScript и веб-разработки.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457573277"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457573273"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "un",
                "previewLink": "http://books.google.ru/books?id=MqRXAwAAQBAJ&printsec=frontcover&dq=js&hl=&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 240.12,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 216.11,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&rdid=book-MqRXAwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 240120000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 216110000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D1%81%D0%B5%D1%80%D0%B2%D0%B5-sample-pdf.acsm?id=MqRXAwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=MqRXAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "iFcHCgAAQBAJ",
            "etag": "qfM4MrucxDw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/iFcHCgAAQBAJ",
            "volumeInfo": {
                "title": "Node.js. Путеводитель по технологии",
                "authors": [
                    "Кирилл Сухов"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "За последние несколько лет платформа Node.js стремительно повысила свой статус от экспериментальной технологии до основы для серьезных промышленных проектов. Тысячи программистов оценили возможность построения достаточно сложных, высоко нагруженных приложений на простом, элегантном и, самое главное, легковесном механизме.Все эти скучные слова правдивы, но на самом деле не это главное. Прежде всего Node.js – это совершенно увлекательная и захватывающая вещь, с которой по-настоящему интересно работать!Есть одна проблема – невозможно рассказывать про использование Node.js в отрыве от остальных технологий современной веб-разработки (и Highload-разработки). Я и не стал этого делать, дав обзор инструментов, без которых сегодня трудно обойтись. Прежде всего это чудесный язык JavaScript, и в книге рассказано о новинках в его последней и будущей спецификациях (EcmaScript 5 и 6). Кроме того, дается краткое введение в большинство связанных веб-технологий – от NoSQL-хранилищ данных (Memcached, MongoDB, Redis) до CSS-препроцессоров и MVC JavaScript-фреймворков. Конечно, эту книгу нельзя рассматривать как полноценный учебник по MongoDB, LESS или EcmaScript 6, Dart или CoffeScript, но в ней дано основное представление об этих довольно интересных вещах, вполне достаточное для начала работы.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457834613"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457834611"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ru",
                "previewLink": "http://books.google.ru/books?id=iFcHCgAAQBAJ&pg=PA39&dq=js&hl=&cd=2&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 276,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 248.4,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&rdid=book-iFcHCgAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 276000000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 248400000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%9F%D1%83%D1%82%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%BF%D0%BE_%D1%82-sample-pdf.acsm?id=iFcHCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=iFcHCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "&lt;anonymous&gt; (C:\\Users\\Geol\\time.<b>js</b>:5:10) at Module._compile (module.<b>js</b>:456:<br>\n26) at Object.Module._extensions..<b>js</b> (module.<b>js</b>:474:10) at Module.load (module.<br>\n<b>js</b>:356:32) at Function.Module._load (module.<b>js</b>:312:12) at Function.Module."
            }
        },
        {
            "kind": "books#volume",
            "id": "MqRXAwAAQBAJ",
            "etag": "xpFiO0GaUL0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/MqRXAwAAQBAJ",
            "volumeInfo": {
                "title": "Node.js Разработка серверных веб-приложений на JavaScript",
                "authors": [
                    "Дэвид Хэррон"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет использовать его в серверных приложениях. В основе платформы лежит исключительно быстрый движок JavaScript, заимствованный из браузера Chrome, к которому добавлена быстрая и надежная библиотека асинхронного сетевого ввода/вывода. Основной упор в Node.js делается на создании высокопроизводительных, хорошо масштабируемых клиентских и серверных приложений.На практических примерах вы научитесь пользоваться серверным и клиентским объектами HTTP, каркасами Connect и Express, освоите алгоритмы асинхронного выполнения и узнаете, как работать с базами данных на основе SQL и с MongoDB.Начав с практических рекомендаций по установке и настройке Node.js в режиме разработки и эксплуатации, вы научитесь разрабатывать клиентские и серверные HTTP-приложения; познакомитесь с применяемой в Node.js системой организации модулей на основе спецификации CommonJS, позволяющей реализовать подмножество технологии объектно-ориентированного проектирования.Издание предназначено для программистов, знакомых с основами JavaScript и веб-разработки.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457573277"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457573273"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "un",
                "previewLink": "http://books.google.ru/books?id=MqRXAwAAQBAJ&printsec=frontcover&dq=js&hl=&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 240.12,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 216.11,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&rdid=book-MqRXAwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 240120000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 216110000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D1%81%D0%B5%D1%80%D0%B2%D0%B5-sample-pdf.acsm?id=MqRXAwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=MqRXAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "iFcHCgAAQBAJ",
            "etag": "qfM4MrucxDw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/iFcHCgAAQBAJ",
            "volumeInfo": {
                "title": "Node.js. Путеводитель по технологии",
                "authors": [
                    "Кирилл Сухов"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "За последние несколько лет платформа Node.js стремительно повысила свой статус от экспериментальной технологии до основы для серьезных промышленных проектов. Тысячи программистов оценили возможность построения достаточно сложных, высоко нагруженных приложений на простом, элегантном и, самое главное, легковесном механизме.Все эти скучные слова правдивы, но на самом деле не это главное. Прежде всего Node.js – это совершенно увлекательная и захватывающая вещь, с которой по-настоящему интересно работать!Есть одна проблема – невозможно рассказывать про использование Node.js в отрыве от остальных технологий современной веб-разработки (и Highload-разработки). Я и не стал этого делать, дав обзор инструментов, без которых сегодня трудно обойтись. Прежде всего это чудесный язык JavaScript, и в книге рассказано о новинках в его последней и будущей спецификациях (EcmaScript 5 и 6). Кроме того, дается краткое введение в большинство связанных веб-технологий – от NoSQL-хранилищ данных (Memcached, MongoDB, Redis) до CSS-препроцессоров и MVC JavaScript-фреймворков. Конечно, эту книгу нельзя рассматривать как полноценный учебник по MongoDB, LESS или EcmaScript 6, Dart или CoffeScript, но в ней дано основное представление об этих довольно интересных вещах, вполне достаточное для начала работы.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457834613"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457834611"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ru",
                "previewLink": "http://books.google.ru/books?id=iFcHCgAAQBAJ&pg=PA39&dq=js&hl=&cd=2&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 276,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 248.4,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&rdid=book-iFcHCgAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 276000000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 248400000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%9F%D1%83%D1%82%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%BF%D0%BE_%D1%82-sample-pdf.acsm?id=iFcHCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=iFcHCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "&lt;anonymous&gt; (C:\\Users\\Geol\\time.<b>js</b>:5:10) at Module._compile (module.<b>js</b>:456:<br>\n26) at Object.Module._extensions..<b>js</b> (module.<b>js</b>:474:10) at Module.load (module.<br>\n<b>js</b>:356:32) at Function.Module._load (module.<b>js</b>:312:12) at Function.Module."
            }
        },
        {
            "kind": "books#volume",
            "id": "MqRXAwAAQBAJ",
            "etag": "xpFiO0GaUL0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/MqRXAwAAQBAJ",
            "volumeInfo": {
                "title": "Node.js Разработка серверных веб-приложений на JavaScript",
                "authors": [
                    "Дэвид Хэррон"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет использовать его в серверных приложениях. В основе платформы лежит исключительно быстрый движок JavaScript, заимствованный из браузера Chrome, к которому добавлена быстрая и надежная библиотека асинхронного сетевого ввода/вывода. Основной упор в Node.js делается на создании высокопроизводительных, хорошо масштабируемых клиентских и серверных приложений.На практических примерах вы научитесь пользоваться серверным и клиентским объектами HTTP, каркасами Connect и Express, освоите алгоритмы асинхронного выполнения и узнаете, как работать с базами данных на основе SQL и с MongoDB.Начав с практических рекомендаций по установке и настройке Node.js в режиме разработки и эксплуатации, вы научитесь разрабатывать клиентские и серверные HTTP-приложения; познакомитесь с применяемой в Node.js системой организации модулей на основе спецификации CommonJS, позволяющей реализовать подмножество технологии объектно-ориентированного проектирования.Издание предназначено для программистов, знакомых с основами JavaScript и веб-разработки.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457573277"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457573273"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "un",
                "previewLink": "http://books.google.ru/books?id=MqRXAwAAQBAJ&printsec=frontcover&dq=js&hl=&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 240.12,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 216.11,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&rdid=book-MqRXAwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 240120000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 216110000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D1%81%D0%B5%D1%80%D0%B2%D0%B5-sample-pdf.acsm?id=MqRXAwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=MqRXAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "iFcHCgAAQBAJ",
            "etag": "qfM4MrucxDw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/iFcHCgAAQBAJ",
            "volumeInfo": {
                "title": "Node.js. Путеводитель по технологии",
                "authors": [
                    "Кирилл Сухов"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "За последние несколько лет платформа Node.js стремительно повысила свой статус от экспериментальной технологии до основы для серьезных промышленных проектов. Тысячи программистов оценили возможность построения достаточно сложных, высоко нагруженных приложений на простом, элегантном и, самое главное, легковесном механизме.Все эти скучные слова правдивы, но на самом деле не это главное. Прежде всего Node.js – это совершенно увлекательная и захватывающая вещь, с которой по-настоящему интересно работать!Есть одна проблема – невозможно рассказывать про использование Node.js в отрыве от остальных технологий современной веб-разработки (и Highload-разработки). Я и не стал этого делать, дав обзор инструментов, без которых сегодня трудно обойтись. Прежде всего это чудесный язык JavaScript, и в книге рассказано о новинках в его последней и будущей спецификациях (EcmaScript 5 и 6). Кроме того, дается краткое введение в большинство связанных веб-технологий – от NoSQL-хранилищ данных (Memcached, MongoDB, Redis) до CSS-препроцессоров и MVC JavaScript-фреймворков. Конечно, эту книгу нельзя рассматривать как полноценный учебник по MongoDB, LESS или EcmaScript 6, Dart или CoffeScript, но в ней дано основное представление об этих довольно интересных вещах, вполне достаточное для начала работы.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457834613"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457834611"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ru",
                "previewLink": "http://books.google.ru/books?id=iFcHCgAAQBAJ&pg=PA39&dq=js&hl=&cd=2&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 276,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 248.4,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&rdid=book-iFcHCgAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 276000000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 248400000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%9F%D1%83%D1%82%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%BF%D0%BE_%D1%82-sample-pdf.acsm?id=iFcHCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=iFcHCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "&lt;anonymous&gt; (C:\\Users\\Geol\\time.<b>js</b>:5:10) at Module._compile (module.<b>js</b>:456:<br>\n26) at Object.Module._extensions..<b>js</b> (module.<b>js</b>:474:10) at Module.load (module.<br>\n<b>js</b>:356:32) at Function.Module._load (module.<b>js</b>:312:12) at Function.Module."
            }
        },
        {
            "kind": "books#volume",
            "id": "MqRXAwAAQBAJ",
            "etag": "xpFiO0GaUL0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/MqRXAwAAQBAJ",
            "volumeInfo": {
                "title": "Node.js Разработка серверных веб-приложений на JavaScript",
                "authors": [
                    "Дэвид Хэррон"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет использовать его в серверных приложениях. В основе платформы лежит исключительно быстрый движок JavaScript, заимствованный из браузера Chrome, к которому добавлена быстрая и надежная библиотека асинхронного сетевого ввода/вывода. Основной упор в Node.js делается на создании высокопроизводительных, хорошо масштабируемых клиентских и серверных приложений.На практических примерах вы научитесь пользоваться серверным и клиентским объектами HTTP, каркасами Connect и Express, освоите алгоритмы асинхронного выполнения и узнаете, как работать с базами данных на основе SQL и с MongoDB.Начав с практических рекомендаций по установке и настройке Node.js в режиме разработки и эксплуатации, вы научитесь разрабатывать клиентские и серверные HTTP-приложения; познакомитесь с применяемой в Node.js системой организации модулей на основе спецификации CommonJS, позволяющей реализовать подмножество технологии объектно-ориентированного проектирования.Издание предназначено для программистов, знакомых с основами JavaScript и веб-разработки.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457573277"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457573273"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=MqRXAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "un",
                "previewLink": "http://books.google.ru/books?id=MqRXAwAAQBAJ&printsec=frontcover&dq=js&hl=&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 240.12,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 216.11,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=MqRXAwAAQBAJ&rdid=book-MqRXAwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 240120000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 216110000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D1%81%D0%B5%D1%80%D0%B2%D0%B5-sample-pdf.acsm?id=MqRXAwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=MqRXAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Книга посвящена разработке веб-приложений в Node.js – платформе, которая выводит язык JavaScript за пределы браузера и позволяет ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "iFcHCgAAQBAJ",
            "etag": "qfM4MrucxDw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/iFcHCgAAQBAJ",
            "volumeInfo": {
                "title": "Node.js. Путеводитель по технологии",
                "authors": [
                    "Кирилл Сухов"
                ],
                "publisher": "Litres",
                "publishedDate": "2017-09-05",
                "description": "За последние несколько лет платформа Node.js стремительно повысила свой статус от экспериментальной технологии до основы для серьезных промышленных проектов. Тысячи программистов оценили возможность построения достаточно сложных, высоко нагруженных приложений на простом, элегантном и, самое главное, легковесном механизме.Все эти скучные слова правдивы, но на самом деле не это главное. Прежде всего Node.js – это совершенно увлекательная и захватывающая вещь, с которой по-настоящему интересно работать!Есть одна проблема – невозможно рассказывать про использование Node.js в отрыве от остальных технологий современной веб-разработки (и Highload-разработки). Я и не стал этого делать, дав обзор инструментов, без которых сегодня трудно обойтись. Прежде всего это чудесный язык JavaScript, и в книге рассказано о новинках в его последней и будущей спецификациях (EcmaScript 5 и 6). Кроме того, дается краткое введение в большинство связанных веб-технологий – от NoSQL-хранилищ данных (Memcached, MongoDB, Redis) до CSS-препроцессоров и MVC JavaScript-фреймворков. Конечно, эту книгу нельзя рассматривать как полноценный учебник по MongoDB, LESS или EcmaScript 6, Dart или CoffeScript, но в ней дано основное представление об этих довольно интересных вещах, вполне достаточное для начала работы.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9785457834613"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "5457834611"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.0.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=iFcHCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ru",
                "previewLink": "http://books.google.ru/books?id=iFcHCgAAQBAJ&pg=PA39&dq=js&hl=&cd=2&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ"
            },
            "saleInfo": {
                "country": "RU",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 276,
                    "currencyCode": "RUB"
                },
                "retailPrice": {
                    "amount": 248.4,
                    "currencyCode": "RUB"
                },
                "buyLink": "https://play.google.com/store/books/details?id=iFcHCgAAQBAJ&rdid=book-iFcHCgAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 276000000,
                            "currencyCode": "RUB"
                        },
                        "retailPrice": {
                            "amountInMicros": 248400000,
                            "currencyCode": "RUB"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "RU",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.ru/books/download/Node_js_%D0%9F%D1%83%D1%82%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%BF%D0%BE_%D1%82-sample-pdf.acsm?id=iFcHCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=iFcHCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "&lt;anonymous&gt; (C:\\Users\\Geol\\time.<b>js</b>:5:10) at Module._compile (module.<b>js</b>:456:<br>\n26) at Object.Module._extensions..<b>js</b> (module.<b>js</b>:474:10) at Module.load (module.<br>\n<b>js</b>:356:32) at Function.Module._load (module.<b>js</b>:312:12) at Function.Module."
            }
        },
    ] as Book[],
};

const searchBooksReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case BOOKS_RECEIVED:
            return booksReceived(state, action.newBooks);
        case IS_FETCHING_CHANGED:
            return isFetchingChanged(state, action.fetchingVal)
        default:
            return state;
    }
}

const booksReceived = (state: InitialStateType, newBooks: Book[]) => {
    return {
        ...state,
        books: [...newBooks],
    }
}

const isFetchingChanged = (state: InitialStateType, fetchingVal: boolean) => {
    return {
        ...state,
        isFetching: fetchingVal,
    }
}

export const searchBooksActions = {
    booksReceived: (newBooks: Book[]) => ({type: BOOKS_RECEIVED, newBooks} as const),
    isFetchingChanged: (fetchingVal: boolean) => ({type: IS_FETCHING_CHANGED, fetchingVal} as const),
}

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof searchBooksActions>;
export default searchBooksReducer;