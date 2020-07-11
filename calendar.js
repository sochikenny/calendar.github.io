const hours = ["9:00 A.M.", "10:00 A.M.", "11:00 A.M.", "12:00 P.M.", "1:00 P.M.", "2:00 P.M.", "3:00 P.M.", "4:00 P.M.", "5:00 P.M."]

$(document).ready(function () {
    for (let i = 0; i < 9; i++) {
        const div = $("<div>");
        div.attr("class", "row");

        const span = $("<span>");
        span.text (hours[i]);

        const input = $("<input>");
        input.attr("id", i);

        const button = $("<button>");
        button.attr("data-ref", i);
        button.text("Save");

        if (localStorage.getItem(i)) {
        input.val(localStorage.getItem(i));
        }

        button.click(function(){
        const i = $(this).attr("data-ref");
        const text = $("#" + i).val();
        localStorage.setItem(i, text);
        });

        div.append(span, input, button);
        $(".container").append(div);

}


});



    
















