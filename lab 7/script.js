$(function() {
    $("form[name='registration']").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        }
      },
      messages: {
        firstname: "Please enter your first name",
        lastname: "Please enter your last name",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long"
        },
        email: "Please enter a valid email address"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
 
 