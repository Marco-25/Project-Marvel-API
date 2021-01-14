$(document).ready(function () {

    ShowModal();
    hideModal();

    function ShowModal() {
        $(`.btn-modal`).click(function (event){
            event.stopPropagation();
            $(`.bg-modal`).fadeIn();
        });
    }

    function hideModal() {
        let elementBody = $('html,body, .closeBtn');
        elementBody.click(function () {
            $('.bg-modal').fadeOut();
        });

        $('.box-modal').click(function (event) {
            event.stopPropagation();
        });
    }

})