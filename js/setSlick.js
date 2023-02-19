
// slick home carousel
$(document).ready(function(){
    $('.portfolio-projects-carousel').slick({
        centerMode: true,
        centerPadding: '35px',
        dots:true,
        infinite: true,
        speed: 50,
        slidesToShow: 1,
        slidesToScroll: 3,
        variableWidth:true,
        autoplay: true,
        arrows: true,
        autoplayspeed: 50,
        cssEase: 'linear',
        focusOnselect: true,
        focusOnSelect: true,
        edgeFriction: 0,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
            }
        ]
        
}); 
})