$(function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 37,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
    $("body").show()
        .addClass('overflow-x-hidden').addClass('overflow-y-auto')
    $('.price').each(function () {
        let value = $(this).text()
        let value2= []
        let counter1 = 3
        let counter2 = 0
        for (let i = 0;i<Math.ceil(value.length/3);i++){
            value2[i] = value.substring(value.length-counter1,value.length-counter2)
            counter1 += 3
            counter2 += 3
        }
        let result = "";
        for (let i = value2.length - 1; i >= 0; i--) {
            result += value2[i];
            if (i !== 0) {
                result += ",";
            }
        }
        $(this).html(result + "<span class='fs-6 ms-1'>هزار تومان</span>")
    })
    $(".bars-icon").click(function () {
        if ($("#bottom-menu").is(":hidden")){
            $("#bottom-menu").slideDown(300)
            $(".bars-icon i").addClass('fa-close')
        }else {
            $("#bottom-menu").slideUp(300)
            $(".bars-icon i").removeClass('fa-close')
        }
    })
})