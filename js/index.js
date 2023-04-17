
// Click and hover effects on nav button in phone mode
let nav_on = false;
const nav_btn = $(".nav-button");
nav_btn.addClass("focussed");
$(".menu").addClass('menu_active');
nav_btn.click(()=>{ 
    $('.menu').toggle('slow')

    
});


// Read more button
let read_btn = $('.read')
$('.read').addClass("focussed")
$('.read1').click(()=>{
    $('.ph1').toggle('slow');
    if(read_btn[0].innerHTML === 'Read More'){
        read_btn[0].innerHTML = 'Read Less';
    }else{
        read_btn[0].innerHTML = 'Read More';
    }
});

$('.read2').click(()=>{
    $('.ph').toggle('slow');
    if(read_btn[1].innerHTML === 'Read More'){
        read_btn[1].innerHTML = 'Read Less';
    }else{
        read_btn[1].innerHTML = 'Read More';
    }
});

$('.main_services').addClass('focussed')

$('.base_cont').addClass('focussed')

$('.list').addClass('focussed')
$('.contact div').addClass('focussed')