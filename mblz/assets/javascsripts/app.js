$('.who-we-are-btn').click(function() {
    window.location.href='./work.html';
})

$('.first-predev').click(function() {
    $('.predevelopment-text').hide()
    $('.predevelopment-secondary').removeClass('d-none')
    $('.first-predev').addClass('selected-image-predev')
    $('.second-predev').removeClass('selected-image-predev')
    $('.third-predev').removeClass('selected-image-predev')
    $('#predevelopment-secondary-text').text('troca o texto')
})
$('.second-predev').click(function() {
    $('.predevelopment-text').hide()
    $('.predevelopment-secondary').removeClass('d-none')
    $('.second-predev').addClass('selected-image-predev')
    $('.first-predev').removeClass('selected-image-predev')
    $('.third-predev').removeClass('selected-image-predev')
    $('#predevelopment-secondary-text').text('segundo texto')
})
$('.third-predev').click(function() {
    $('.predevelopment-text').hide()
    $('.predevelopment-secondary').removeClass('d-none')
    $('.third-predev').addClass('selected-image-predev')
    $('.first-predev').removeClass('selected-image-predev')
    $('.second-predev').removeClass('selected-image-predev')
    $('#predevelopment-secondary-text').text('terceiro')
})

$('.first-dev').click(function() {
    $('.development-text').hide()
    $('.development-secondary').removeClass('d-none')
    $('.first-dev').addClass('selected-image-dev')
    $('.second-dev').removeClass('selected-image-dev')
    $('.third-dev').removeClass('selected-image-dev')
    $('#development-secondary-text').text('troca o texto')
})
$('.second-dev').click(function() {
    $('.development-text').hide()
    $('.development-secondary').removeClass('d-none')
    $('.second-dev').addClass('selected-image-dev')
    $('.first-dev').removeClass('selected-image-dev')
    $('.third-dev').removeClass('selected-image-dev')
    $('#development-secondary-text').text('segundo texto')
})
$('.third-dev').click(function() {
    $('.development-text').hide()
    $('.development-secondary').removeClass('d-none')
    $('.third-dev').addClass('selected-image-dev')
    $('.first-dev').removeClass('selected-image-dev')
    $('.second-dev').removeClass('selected-image-dev')
    $('#development-secondary-text').text('terceiro')
})

$('.first-postdev').click(function() {
    $('.postdevelopment-text').hide()
    $('.postdevelopment-secondary').removeClass('d-none')
    $('.first-postdev').addClass('selected-image-postdev')
    $('.second-postdev').removeClass('selected-image-postdev')
    $('.third-postdev').removeClass('selected-image-postdev')
    $('#postdevelopment-secondary-text').text('troca o texto')
})
$('.second-postdev').click(function() {
    $('.postdevelopment-text').hide()
    $('.postdevelopment-secondary').removeClass('d-none')
    $('.second-postdev').addClass('selected-image-postdev')
    $('.first-postdev').removeClass('selected-image-postdev')
    $('.third-postdev').removeClass('selected-image-postdev')
    $('#postdevelopment-secondary-text').text('segundo texto')
})
$('.third-postdev').click(function() {
    $('.postdevelopment-text').hide()
    $('.postdevelopment-secondary').removeClass('d-none')
    $('.third-postdev').addClass('selected-image-postdev')
    $('.first-postdev').removeClass('selected-image-postdev')
    $('.second-postdev').removeClass('selected-image-postdev')
    $('#postdevelopment-secondary-text').text('terceiro')
})

$('.carousel').carousel({
    interval: 0,
    wrap: false
});
$('.carousel').on('slide.bs.carousel', '', checkitem);
$('.carousel').on('slid.bs.carousel', '', checkitem);

function navbarPosition() {
    if($(window).scrollTop()> 20) {
        $('.navbar').addClass('nav-on-scroll')
        $(".logo").attr("src","assets/images/logo_moblize.png");
    } else {
        $('.navbar').removeClass('nav-on-scroll');
        $(".logo").attr("src","assets/images/logo_moblize_full.png");

    }
}

var quotes = [
    'APPS',
    'SITES',
    'LOREM IPSUM'
]

var fadeIndex = 1;

function fadeText() {
    $('#quote').fadeToggle(400, function() {
        if(!$('#quote').is(':visible')){
            $('#quote').text(quotes[fadeIndex])
            fadeIndex++;
            if(fadeIndex === 3) {
                fadeIndex = 0;
            }
        }
    })
}

function checkitem() {
    var $this = $('.carousel');
    if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
        $(".carousel-control-prev").hide();
        $(".carousel-control-next").show();
        $(".side-color").removeClass().addClass("side-color orange-background");
    } else if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
        $(".carousel-control-prev").show();
        $(".carousel-control-next").hide();
        $(".side-color").removeClass().addClass("side-color blue-background");
    } else {
        $(".carousel-control-prev").show();
        $(".carousel-control-next").show();
        $(".side-color").removeClass().addClass("side-color purple-background");
    }
}
$(document).ready(function () {
    checkitem();
    navbarPosition();
    setInterval(fadeText, 1000);
});
$(window).scroll(function() {
    navbarPosition();
});