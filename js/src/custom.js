(function () {
    
    //toast options
    toastr.options = {
        'showDuration': '1000',
        'hideDuration': '1000',
        'timeOut': '8000',
        'progressBar': true,
        'positionClass': 'toast-bottom-right'
    };
    
    //Disable Submit Button on Submit
    $('form').submit(function () {
        if ($(this).valid()) {
            $(this).find('button[type="submit"]').prop('disabled', true)
                                                 .attr('style', 'background:none!important;border:none!important')
                                                 .html('<i class="fa fa-spinner fa-spin"></i>');
        }
    });
    
    //Two level dropdown menu
    $('ul.dropdown-menu > li.dropdown-submenu > a').on('click', function (event) {
        // Avoid following the href location when clicking
        event.preventDefault();
        // Avoid having the menu to close when clicking
        event.stopPropagation();

        //opening and closing the submenu
        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open');
        } else {
            $(this).parent().addClass('open');
        }
    });

    //Toastr Messages 
    var messageElement;
    $('.zone-messages .message').each(function () {
        messageElement = $(this);
        if (messageElement.hasClass('message-Information')) {
            toastr.success(messageElement.html());
        } else if (messageElement.hasClass('message-Warning')) {
            toastr.warning(messageElement.html());
        } else if (messageElement.hasClass('message-Error')) {
            toastr.error(messageElement.html());
        }
    });
    
    //Last Script
    $.when($('#loader').fadeOut('slow')).done(function () {
        $('#layout-wrapper').css('opacity', '1');
        $.cookieBar();
    });

}());