  // import Swiper bundle with all modules installed
  import Swiper from 'swiper';
  import { Slider } from './slider';


  const slider = new Slider()

  document.addEventListener("DOMContentLoaded", function() {
    slider.init()
  })