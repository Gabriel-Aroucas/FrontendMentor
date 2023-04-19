$("#submit").on({
    click: () => {
        if ($("#one").is(":checked") == true) {
            $(".container").css('opacity', '0');
            $(".modal").css('display', 'flex');
            $("#rate").text($("#one").val());
        } else if ($("#two").is(":checked") == true) {
            $(".container").css('opacity', '0');
            $(".modal").css('display', 'flex');
            $("#rate").text($("#two").val());
        } else if ($("#tree").is(":checked") == true) {
            $(".container").css('opacity', '0');
            $(".modal").css('display', 'flex');
            $("#rate").text($("#tree").val());
        } else if ($("#four").is(":checked") == true) {
            $(".container").css('opacity', '0');
            $(".modal").css('display', 'flex');
            $("#rate").text($("#four").val());
        } else if ($("#five").is(":checked") == true) {
            $(".container").css('opacity', '0');
            $(".modal").css('display', 'flex');
            $("#rate").text($("#five").val());
        }
    }
})
