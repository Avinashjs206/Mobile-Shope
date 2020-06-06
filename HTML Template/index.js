$(document).ready(function () {
    // banner Owl carousel
    $('#banner-area .owl-carousel').owlCarousel({
        dots: true,
        items:1
    });
    // owl carousel
    $('#top-sale .owl-carousel').owlCarousel({
        loop:true,
        nav: true,
        dots:false,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // isotope filter
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    // filter items on button click
    $('.button-group').on('click','button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter:filterValue
        });
    });
    // new phone owl-carousel
    $('#new-phones .owl-carousel').owlCarousel({
        loop:true,
        nav: true,
        dots:false,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    // blog owlcarousel
    $('#blogs .owl-carousel').owlCarousel({
        loop:true,
        nav: true,
        dots:false,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items:3
            },
        } 
    });

    // Product Qty section

    let $qty_up = $('.qty .qty_up');
    let $qty_down = $('.qty .qty_down');
    // let $input = $('.qty .qty_input');

    // Click on qty_up button
    $qty_up.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data('id')}']`);
        if ($input.val()>=1 && $input.val()<=9) {
            $input.val(function (i, oldval) {
               return ++oldval; 
            })
        }
    });
    // Click on qty_Down button
    $qty_down.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data('id')}']`);
        if ($input.val()>1) {
            $input.val(function (i, oldval) {
               return --oldval; 
            })
        }
    });
});