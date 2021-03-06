let slideNow = 1;
let slideCount = -1;
const slideInterval = 5000;
let translateWidth = 0;

$(document).ready(function() {
    let switchIntervalID = setInterval(nextSlide, slideInterval);
    console.log(switchIntervalID);
    slideCount = $('#slidewrapper').children().length;

    console.log("slideCount: " + slideCount);

    $('#viewport').hover(function() {
        clearInterval(switchIntervalID);
    }, function() {
        switchIntervalID = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        console.log("next");
        nextSlide();
    });

    $('#prev-btn').click(function() {
        console.log("prev");
        prevSlide();
    });

});


function nextSlide() {
    //console.log("SlideNow: " + slideNow);
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
/*        console.log("viewport width: " + $('#viewport').width());
        console.log("translateWidth: " + translateWidth);*/
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}