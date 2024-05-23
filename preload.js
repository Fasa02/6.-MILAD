document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('load').style.opacity = 0;
            document.getElementById('load').style.visibility = "hidden";
            document.getElementById('hidehead').style.visibility = "visible";
        }, 6000);
    }
}


anime.timeline({ loop: false })
    .add({
        targets: '.loadalla .word',
        scale: [3, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
    }).add({
        targets: '.loadalla',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });