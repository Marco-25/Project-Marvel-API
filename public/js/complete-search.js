totalEl = $('.row-comics-series-stories-events > h5').length;
$('.hide').hide();

for (let i = 1; i <= totalEl; i++) {
    document.getElementById(`click-${i}`).addEventListener('click', function (){
        $(`.marvel-${i}`).stop().toggle();
    });
}


