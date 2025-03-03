// script.js
$(document).ready(function() {
    $("#messageForm").on("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        let messageInput = $("input[name='new_message']");
        let message = messageInput.val().trim();

        if (message === "") {
            alert("Message cannot be empty!");
            return;
        }

        $.ajax({
            url: "/submit",
            type: "POST",
            data: {
                new_message: message
            },
            success: function(response) {
                if (response && response.message) {
                    $(".messages").append("<p>" + response.message + "</p>");
                    messageInput.val("");
                } else {
                    console.error("Unexpected response format:", response);
                }
            },
            error: function(xhr, status, error) {
                console.error("AJAX Error:", status, error);
            }
        });
    });
});
