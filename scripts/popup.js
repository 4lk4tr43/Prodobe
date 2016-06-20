function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

$('#left li').click(function () {
    $('#left li.selected').removeClass("selected");
    $(this).addClass("selected");

    var name = $(this).text().toLowerCase();
    $.get("popup-subviews/" + name + ".html", function (h) {
        $('#main').html(h);
        $.get("../scripts/popup-subviews/" + name + ".js", function (s) {
            eval(s);
        });
    });
});

$.get("popup-subviews/composition.html", function (h) {
    $('#main').html(h);
    $.get("../scripts/popup-subviews/composition.js", function (s) {
        eval(s);
    });
});