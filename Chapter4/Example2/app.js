var main = function () {
    "use strict";

    /*resuable function for the event listeners.*/
    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            /*slowly fade in when appearing*/
            $new_comment.fadeIn();
            /*adds new comment*/
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    /*only respond when the ENTER key is press*/
    $(".comment-input input").on("keypress", function (event) {
        /*13 represent the enter key*/
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);
