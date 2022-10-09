import MediaPlayer from "../MediaPlayer";

//CONSTRUCTOR
class AutoPause {
  private threshold: number  
  player: MediaPlayer

  constructor() {
    this.threshold = 0.25;
    this.handlerIntersection = this.handlerIntersection.bind(this);
    this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
  }
  private handlerIntersection  (entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
  
    const isVisible = entry.intersectionRatio >= this.threshold;
  
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handlerVisibilityChange (player){
    const isVisible = document.visibilityState === 'visible'
    if (isVisible) {
      this.player.play()
    }
    else {
      this.player.pause()
    }
  }

  run (player) {
    this.player = player;
  
    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold,
    });
  
    observer.observe(this.player.media);
  
    document.addEventListener("visibilitychange", this.handlerVisibilityChange)
  }
  
}

export default AutoPause;
