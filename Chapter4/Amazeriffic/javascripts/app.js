var main = function () {
    "use strict";

    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracie to the park",
                 "Finish writing this book"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                $image1,
                $image2,
                $image3,
                $image4,
                $imageshow,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });


                $content = $("<div>").append($input).append($button);
               /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            } else if ($element.parent().is(":nth-child(4)")){
                $imageshow = $("<script>");
                $imageshow.text("jQuery('a.slideshow').colorbox({opacity:0.5,rel:'group1',slideshow:true});");
              
                $image1 = $("<p><a href ='AmazerifficScreenShot1.png' class = 'slideshow' title='image 1'>photo_1</a></p>");
                $image2 = $("<p><a href ='AmazerifficScreenShot2.png' class = 'slideshow' title='image 2'>photo_2</a></p>");
                $image3 = $("<p><a href ='AmazerifficScreenShot3.png' class = 'slideshow' title='image 3'>photo_3</a></p>");
                $image4 = $("<p><a href ='AmazerifficScreenShot4.png' class = 'slideshow' title='image 4'>photo_4</a></p>");

                //$content = $("<ul>").append($image1,$image2,$image3,$image4,$imageshow);
                $content = $("<ul>").append($("<p><a href ='AmazerifficScreenShot1.png' class = 'slideshow' title='image 1'>photo_1</a></p>"),
                    $("<p><a href ='AmazerifficScreenShot2.png' class = 'slideshow' title='image 2'>photo_2</a></p>"),
                    $("<p><a href ='AmazerifficScreenShot3.png' class = 'slideshow' title='image 3'>photo_3</a></p>"),
                    $("<p><a href ='AmazerifficScreenShot4.png' class = 'slideshow' title='image 4'>photo_4</a></p>"),$imageshow);
            }

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
