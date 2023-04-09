let nav_on = false;
const nav_btn = $(".nav-button");
$(".menu").addClass('menu_active');
nav_btn.click(()=>{ 
    $('.menu').toggle('slow')

    
});



let read_btn = document.querySelectorAll('.read')


$('.read1').click(()=>{
    $('.ph1').toggle('slow');
    if(read_btn[0].innerHTML === 'Read More'){
        read_btn[0].innerHTML = 'Read Less';
    }else{
        read_btn[0].innerHTML = 'Read More';
    }
})

$('.read2').click(()=>{
    $('.ph').toggle('slow');
    if(read_btn[1].innerHTML === 'Read More'){
        read_btn[1].innerHTML = 'Read Less';
    }else{
        read_btn[1].innerHTML = 'Read More';
    }
})