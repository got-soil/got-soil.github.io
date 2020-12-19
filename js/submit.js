// $('form').submit(function(){
//     $(this).find(':submit').attr('disabled','disabled');
//     $("#waiting").css("display","block");
//     $.post("/url/to/post/data", function(){
//       $("#waiting").css("display","none");
//     });
// });

// Source: https://stefano.brilli.me/google-forms-html-exporter/
$('#bootstrapForm').submit(function (event) {
    // $(this).find(':submit').attr('disabled','disabled');
    event.preventDefault();
    // $('.spinner-border').attr("hidden",false);
    var form_input = $('#form-input');
    var form_button = $('#form-button');
    // var form_input = $('#colA');
    // var form_button = $('#colB');
    // form_input.width(form_input.width());
    // $('.form-input').toggleClass('col-md-8 col-sm-6 col-0');

    form_input.toggleClass('col-md-8 col-sm-6 col-0');
    form_button.toggleClass('col-md-4 col-sm-6 col-12');

    // $('.form-input').hide({'hide'});//toggleClass('col-md-8 col-sm-6 col-0');
    // $('.form-input').animate({
    //   left: 250px
    // }, 10, function(){
    //   $('.form-input').toggleClass('col-md-8 col-sm-6 col-0');
    // });
    var extraData = {}
    $('#bootstrapForm').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
            // Submit of form should be successful but JSONP callback will fail because Google Forms
            // does not support it, so this is handled as a failure.
            // $("#waiting").css("display","none");
            // $(this).css("visibility", hidden);
            // alert('Form Submitted. Thanks.')
            // Maybe: You can also redirect the user to a custom thank-you page:
            // window.location = 'http://www.mydomain.com/thankyoupage.html'
        }
    })
})
