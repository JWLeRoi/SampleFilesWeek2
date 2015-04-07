$(function() {

    var info = {
        username: '',
        span: '',
        fontSize: '',
        block: '',
        closer: ''
    };

    $('#someText').focus();

	$('#testForm').submit(function(e) {
        e.preventDefault();
        e.stopPropagation();


        info.userName = $('#someText');
        info.span = $('.name');
        info.fontSize = parseInt(info.span.css('font-size'));
        info.block = $('.nameBlock');
        info.closer = $('#closer');


        $('form').fadeOut(function() {
            info.span.append(info.userName.val());
            info.block.css({'display':'flex'});
            while(info.span.width() >= 400 || info.span.height() >= 160) {
                info.fontSize--;
                info.span.css('font-size', info.fontSize.toString() + 'px');
            }
            info.block.addClass('open');
            setCloser(info);
        });
    });

    //set the listener when the block is shown.
    function setCloser(info) {

        info.closer.on('click',function() {
            closeTag();
        })

        $('body').on('keydown',function(e) {
            if(e.which === 27){
                closeTag()
            }
        })
    }

    function closeTag() {
        info.userName.val('');

        info.block.removeClass('open').css('display','none');
        info.span.text('').css('font-size','200px');
        info.closer.off('click');
        setTimeout(function() {
            $('form').fadeIn();
            info.userName.focus();
        },300);

    }

});


