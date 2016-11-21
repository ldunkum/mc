$(document).ready(
    function () {
        $(".one").click(function () {
            $(".two", $(this).parent()).toggle("slow", function () {
                $(".two").css("background-color", "white");
            });
        });
    }
);
