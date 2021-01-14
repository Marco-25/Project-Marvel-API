function showMessage() {
    let bgModalNavegate = $('.bg-modal-navegate');

        bgModalNavegate.fadeIn();
}

function hideMessage() {
    let elementBody = $('html,body, .closeBtn-navegate');
    let bgModalNavegate = $('.bg-modal-navegate');
    elementBody.click(function () {
        bgModalNavegate.fadeOut();
    });

    bgModalNavegate.click(function (event) {
        event.stopPropagation();
    });
}


if(!document.cookie) showPresentation();
hideMessage()

 function showPresentation () {
     $('html > body').one("mouseover", function() {
         showMessage();
         $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
             let ip = JSON.stringify(data.ip);
             document.cookie = ip;
         });

     })
 }




