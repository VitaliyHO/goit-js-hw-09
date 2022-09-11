'use strict'
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

if(!localStorage.getItem(TIME_KEY)){
    localStorage.setItem(TIME_KEY, '{"seconds": 0}');
};

const currentVideoTime = JSON.parse(localStorage.getItem(TIME_KEY)).seconds;

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem(TIME_KEY, JSON.stringify(data))
}, 1000));

player.setCurrentTime(currentVideoTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

