    var video = document.querySelector("#video"),
    button = document.querySelector("#video-button");

    button.addEventListener("click", function() {
        video.play()
        video.setAttribute("controls","controls");
        }, false);
        $(".video-play-btn").click(function() {
        $(".video-play-btn").addClass("video-play-btn--hide");
        $(".bg-video__text").addClass("video-play-btn--hide");
    })