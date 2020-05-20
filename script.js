if (document.fullscreenElement) {
    // curently fullscreen
} else {
    this.addFullScreenButton()
}


function addFullScreenButton () {
    let button = document.createElement('FullScreenButton')
    button.innerHTML = '[ + ]'
    let body = document.getElementsByTagName('body')[0]
    body.insertBefore(button, body.childNodes[0])
    button.addEventListener('click', function () {
        this.openFullscreen()
        button.remove()
    }.bind(this))

    document.addEventListener("fullscreenchange", function (e) {
        e.stopPropagation();
    });

}

function openFullscreen () {
    let elem = document.documentElement
    if (elem.requestFullscreen) {
        elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen()
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen()
    }
}