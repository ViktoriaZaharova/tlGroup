$(document).ready(function () {

    // tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });


    // slider
    $('.main-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        navText: ['', '']
    });

    $('.recommend-slider').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            510: {
                items: 2
            },
            680: {
                items: 1
            },
            800: {
                items: 2
            },
            975: {
                items: 3
            }
        }
    });

    // amount
    $('.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    // mobile header
    $('.btn-menu-mobile').click(function () {
        $('.mobile__menu').fadeIn();
    });

    $('.btn-entrance-mobile').click(function () {
        $('.sidebar.box__mobile').fadeIn();
    });

    $('.btn-phone-mobile').click(function () {
        $('.phone-wrapper').fadeIn();
    });

    $('.btn-close').click(function () {
        $('.box__mobile').fadeOut();
    });
    // mobile header end


    $('.form-user button[type="submit"]').click(function () {
        $('.form-user').find('.tooltip-info').addClass('active');
        setInterval(function(){
            $('.form-user .tooltip-info').removeClass('active');
        },3000)
    });



    // mobile carousel
    function postsCarousel() {
        var checkWidth = $(window).width();
        var owlPost = $(".category-auto-list, .tabs__caption-product, .tabs__caption-basket");
        if (checkWidth > 861) {
            if (typeof owlPost.data('owl.carousel') != 'undefined') {
                owlPost.data('owl.carousel').destroy();
            }
            owlPost.removeClass('owl-carousel');
        } else if (checkWidth < 861) {
            owlPost.addClass('owl-carousel');
            owlPost.owlCarousel({
                items: 3,
                slideSpeed: 700,
                // autoplay: true,
                dots: false,
                loop: true,
                nav: true,
                navText: ['', ''],
                responsive: {
                    0: {
                        items: 2
                    },
                    430: {
                        items: 3
                    },
                    861: {
                        items: 3
                    }
                }
            });

        }
    }

    postsCarousel();
    $(window).resize(postsCarousel);

    // $('.table-wrapper__orders tr.table-body').append('<div class="table__orders-text"></div>');


    // media function
    function mediaClick() {
        var checkWidth = $(window).width();

        if (checkWidth < 910) {
            $('.characteristics-wrapper .purchase-info').unwrap();
        }

        if (checkWidth < 860) {
            $('.info-order h2').click(function () {
                $('.info-order__content').slideToggle();
            });
        }


        var owlPost = $(".product-image__min-wrapper");

        if (checkWidth > 681) {
            if (typeof owlPost.data('owl.carousel') != 'undefined') {
                owlPost.data('owl.carousel').destroy();
            }
            owlPost.removeClass('owl-carousel');
        } else if (checkWidth < 680) {
            owlPost.addClass('owl-carousel');
            owlPost.owlCarousel({
                items: 1,
                slideSpeed: 700,
                dots: false,
                loop: true,
                nav: true,
                navText: ['', '']
            });

        }

        if (checkWidth < 680) {
            $('.tabs__caption-search li:contains("Поиск по VIN-коду или номеру запчасти")').text('по VIN-коду или № запчасти');
            $('.tabs__caption-search li:contains("Подбор по модели Авто")').text('по модели автомобиля');
            $('.tabs__caption-product li a:contains("Оригинальные номера и кроссы")').text('Ориг. номера и кроссы');
            $('.footer-box h3').click(function () {
                $(this).parent('.footer-box').find('.footer-menu').fadeToggle();
            });
        }

        if (checkWidth < 550) {
            $('.catalog h3').click(function () {
                $('.catalog__content').slideToggle();
            });



            $('.category-product__table th.article-it').text('Арт.');
            $('.category-product__table th.price-it').text('Цена, грн');
        }

    }

    mediaClick();
    $(window).resize(mediaClick);
    // media function end


    // category menu click
    $('.catalog-product li span').click(function () {
        $(this).next('.catalog-product__menu').slideToggle();
    });

    $('.catalog-product__menu li span').click(function () {
        $(this).next('.catalog-product__submenu').slideToggle();
    });

    $('.catalog-product__submenu li span').click(function () {
        $(this).next('.catalog-product__submenu-drop').slideToggle();
    });

    // active links
    $('.category-auto-links').click(function () {
        $('.category-auto-links').removeClass('clicked');
        $(this).addClass('clicked');
    });


    // style select
    $('.select').niceSelect();

    $('.select .list li').click(function () {
        $(this).closest('.nice-select').addClass('selected-list');
    });
    // style select end


});

// color decision
$(document).ready(function () {

    var penImg = $('.product-image__max img');

    $('.product-image__min-wrapper div.product-image__min').on('click', function () {

        var imgPath;

        imgPath = $(this).attr('data-img-path');
        penImg.attr('src', imgPath);

    });

});

// tabs product
$(document).ready(function ($) {
    $('.tabs-wrap li a').click(function (e) {
        e.preventDefault();
    });
    $('.tabs-wrap li').click(function () {
        $('.tabs-wrap li').removeClass('active');
        $(this).addClass('active').closest('.tabs-wrap').find('.tab_content').removeClass('active');

        var selectTab = $(this).find('a').attr("href");

        $(selectTab).addClass('active');
    });
});