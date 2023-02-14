$(function () {
    $(document).on("click", ".tab-naviagtion__item", function () {
        let listItem = $(this).attr("id");
        $(".content").removeClass("active");
        $(`.${listItem}-content`).addClass("active");
    })
});
