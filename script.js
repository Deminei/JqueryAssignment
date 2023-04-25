$(document).ready(function () {//function to be fired when submit button is clicked
    $("#submit").on("click", (event) => {
        event.preventDefault(); //prevent form submission

        //variables for form inputs
        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const message = $("#message-area").val();

        //array to store required fields
        const required = [name, email, phone, message];

        //loop through required array
        for (let i = 0; i < required.length; i++) {
            if (required[i] === "") {//check if array item is empty
                $('#message').html('Please Fill Out Required Fields').addClass('warning');//displays error message
                $('label').eq(i).addClass('warning');
            } else {
                $('label').eq(i).removeClass('warning');//removes warning class from label
            }
        }
        if (!$('label').hasClass("warning")) {//check if labels have warning class and the ! = ifnot
            $("h2").text("Thanks for your feedback!");//thank you message and removes form elements
            $("form").remove();
        }
    });
});
//                 ಠ◡ಠ