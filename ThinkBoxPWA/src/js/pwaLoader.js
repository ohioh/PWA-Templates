$(function () {
    'use strict'

    var isPWA = true; //Enables PWA.js which loads manifest & service worker.

    function init_template() {
        //Adding Offline Alerts
        var offlineAlerts = $('.offline-message');
        if (!offlineAlerts.length) {
            $('body').append('<p class="offline-message bg-red2-dark color-white center-text uppercase ultrabold">No internet connection detected</p> ');
            $('body').append('<p class="online-message bg-green1-dark color-white center-text uppercase ultrabold">You are back online</p>');
        }

        //Offline Function Show
        function isOffline() {
            $('.offline-message').addClass('offline-message-active');
            $('.online-message').removeClass('online-message-active');
            setTimeout(function () {
                $('.offline-message').removeClass('offline-message-active');
            }, 2000);
        }

        //Online Function Show
        function isOnline() {
            $('.online-message').addClass('online-message-active');
            $('.offline-message').removeClass('offline-message-active');
            setTimeout(function () {
                $('.online-message').removeClass('online-message-active');
            }, 2000);
        }

        $('.simulate-offline').on('click', function () {
            isOffline();
        })
        $('.simulate-online').on('click', function () {
            isOnline();
        })

        //Check if Online / Offline
        function updateOnlineStatus(event) {
            var condition = navigator.onLine ? "online" : "offline";
            isOnline();
            console.log('Connection: Online');
        }

        function updateOfflineStatus(event) {
            isOffline();
            console.log('Connection: Offline');
        }
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOfflineStatus);
    }
    //Activating all the plugins
    setTimeout(init_template, 0);

    //Adding added-to-homescreen class to be targeted when used as PWA.
    function ath() {
        (function (a, b, c) {
            if (c in b && b[c]) {
                var d, e = a.location,
                    f = /^(a|html)$/i;
                a.addEventListener("click", function (a) {
                    d = a.target;
                    while (!f.test(d.nodeName)) d = d.parentNode;
                    "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
                }, !1);
                $('.add-to-home').addClass('disabled');
                $('body').addClass('is-on-homescreen');
            }
        })(document, window.navigator, "standalone")
    }
    ath();

    //Add to Home Banners
    $('.simulate-android-badge').on('click', function () {
        $('.add-to-home').removeClass('add-to-home-ios').addClass('add-to-home-visible add-to-home-android');
    });
    $('.simulate-iphone-badge').on('click', function () {
        $('.add-to-home').removeClass('add-to-home-android').addClass('add-to-home-visible add-to-home-ios');
    });
    $('.add-to-home').on('click', function () {
        $('.add-to-home').removeClass('add-to-home-visible');
    })
    $('.simulate-android-banner').on('click', function () {
        $('#menu-install-pwa-android, .menu-hider').addClass('menu-active')
    })
    $('.simulate-ios-banner').on('click', function () {
        $('#menu-install-pwa-ios, .menu-hider').addClass('menu-active')
    })

    //Activate Development mode. Keeps caches clear.
    if (isDevelopment === true) {
        if (!$('.reloader').length) {
            $('body').append('<a href="#" class="reloader" style="position:fixed; background-color:#000; color:#FFF; z-index:9999; bottom:80px; left:50%; margin-left:-105px; border-radius:10px; width:210px; line-height:40px; text-align:center;">Developer Mode - Tap to Reload</a>');
        }
        $('.reloader').on('click', function () {
            window.location.reload(true);
        })
        caches.delete('workbox-runtime').then(function () {});
        localStorage.clear();
        sessionStorage.clear()
        caches.keys().then(cacheNames => {
            cacheNames.forEach(cacheName => {
                caches.delete(cacheName);
            });
        });
    }

    //Activate the PWA
    if (isPWA === true) {
        var loadJS = function (url, implementationCode, location) {
            var scriptTag = document.createElement('script');
            scriptTag.src = url;
            scriptTag.onload = implementationCode;
            scriptTag.onreadystatechange = implementationCode;
            console.log(scriptTag);
            location.appendChild(scriptTag);
        };

        function loadPWA() {}
        loadJS('./pwa.js', loadPWA, document.body);
        
    }
});