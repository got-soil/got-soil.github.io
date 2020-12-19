function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Source: https://stefano.brilli.me/google-forms-html-exporter/
$('#bootstrapForm').submit(function (event) {
    event.preventDefault();
    var emailField = $("#1208775221");
    console.log(emailField.val(), validateEmail(emailField.val()));
    if (!validateEmail(emailField.val())) {
      emailField[0].setCustomValidity('Please enter a valid email');
      return;
    }
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
