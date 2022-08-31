import Swiper from "swiper";

export class Slider {
  constructor() {
    this.init();
  }
  
  init() {
      // init Swiper:
  this.swiper = new Swiper('.mySwiper', {
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    }
  });
  }
}