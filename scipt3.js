// Efecto de scroll suave
$(document).ready(function() {
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

// Efecto de hover en imágenes
$(document).ready(function() {
    $(".galeria img").hover(function() {
        $(this).css("transform", "scale(1.2)");
    }, function() {
        $(this).css("transform", "scale(1)");
    });
});