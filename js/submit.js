// Source: https://stefano.brilli.me/google-forms-html-exporter/
$('#bootstrapForm').submit(function (event) {
    event.preventDefault();
    $('#form-button').prop('disabled', true);
    $('.spinner-border').attr("hidden", false);
    var extraData = {}
    $('#bootstrapForm').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
          $('.spinner-border').attr("hidden", true);
          $('#submitted-card').collapse();
        }
    })
})
