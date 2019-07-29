$(window).on('scroll', function () {
    const scrollValue = $(this).scrollTop();
    const $art2 = $('.art2');
    const $art3 = $('.art3');
    const $art4 = $('.art4');
    const art2FromTop = $art2.offset().top;
    const art3FromTop = $art3.offset().top;
    const art4FromTop = $art4.offset().top;
    const art2Height = $art2.outerHeight();
    const art3Height = $art3.outerHeight();
    const art4Height = $art4.outerHeight();
    const oknoHeight = $(window).height();
    const $quotesName = $('.quotes article');
    const quotes2FromTop = $quotesName.offset().top;
    const quotesHeight = $quotesName.outerHeight();



    if (scrollValue > art2FromTop + art2Height - oknoHeight) {
        $art2.addClass('active');
        console.log('jetem')
    }
    if (scrollValue > art3FromTop + art3Height - oknoHeight) {
        $art3.addClass('active');
        console.log('jete222m')
    }
    if (scrollValue > art4FromTop + art4Height - oknoHeight) {
        $art4.addClass('active');
        console.log('jetem')
    }
    if (scrollValue > quotes2FromTop + quotesHeight - oknoHeight) {
        $quotesName.addClass('active');
        console.log('jetemmmmmmm')
    }
    if (scrollValue < 100) {
        $('article').removeClass('active');

    }



})