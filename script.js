var card = document.querySelector('.card');
var large_card = document.querySelector('.large_card');
var thumbnail = document.querySelector('#thumbnail');
var video = document.querySelector('video');
var bar_wrap = document.querySelector('.progress_wrap');
var bar = document.querySelector('.progress_bar');
card.addEventListener('mouseover', function () {
    setTimeout(function () {
        large_card.style.display = 'block';
        setTimeout(function () {
            thumbnail.style.display = 'none';
            bar_wrap.style.display = 'block';
            video.style.display = 'block';
            video.play();
        }, 1000);
    }, 1000);
});
document.addEventListener('mouseover', function (e) {
    if (e.target.closest('.container')) {
    } else {
        video.currentTime = 0;
        video.pause();
        large_card.style.display = 'none';
        thumbnail.style.display = 'block';
        bar_wrap.style.display = 'none';
        video.style.display = 'none';
    }
});
var size = 430;

setInterval(function () {
    var width = (video.currentTime * size) / video.duration;
    bar.style.width = width + 'px';
}, 100);
bar_wrap.addEventListener('click', function (e) {
    video.currentTime = video.duration * (e.offsetX / bar_wrap.clientWidth);
});
