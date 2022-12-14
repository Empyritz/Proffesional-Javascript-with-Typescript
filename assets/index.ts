import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import AdsPlugin from './plugins/Ads/index'


const video = document.querySelector('video');

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
});

const playButton: HTMLElement = document.querySelector('#playButton')!;
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton')!;
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute(); 
  } else {
    player.mute();
  }
};

if('serviceWorker' in navigator){
  navigator.serviceWorker
    .register('../sw.js')
    .catch(err => console.log(err))
} 