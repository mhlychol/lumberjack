<script>
export default {
  data() {
    return {
      images: [
        'assets/kayan-resim1.webp',
        'assets/kayan-resim2.webp',
        'assets/kayan-resim3.webp',
      ],
      currentIndex: 0,
      isDragging: false,
      dragStartX: 0,
      imagePosition: 0,
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    },
    imageStyles() {
      return {
        transform: `translateX(${this.imagePosition}px)`,
      }
    },
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
      this.imagePosition = 0
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
      this.imagePosition = 0
    },
    startDrag(event) {
      this.isDragging = true
      this.dragStartX = event.clientX
    },
    endDrag() {
      this.isDragging = false
      this.dragStartX = 0
    },
    dragImage(event) {
      if (this.isDragging) {
        const dragDistance = event.clientX - this.dragStartX
        this.imagePosition = dragDistance
      }
    },
  },
}
</script>

<template>
  <div id="banner-container">
    <img :src="currentImage" alt="Banner" :style="imageStyles">
    <button id="prev-button" @click="prevImage">
      <img src="assets/slidersol.svg" alt="Previous">
    </button>
    <button id="next-button" @click="nextImage">
      <img src="assets/slidersag.svg" alt="Next">
    </button>
  </div>
</template>

  <style scoped>
  #banner-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  #banner-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  #prev-button,
  #next-button {
    position: absolute;
    top: 50%;
    cursor: pointer;
  }

  #prev-button {
    left: 10px;
  }

  #next-button {
    right: 10px;
  }

  /* Stil resim düğmeleri için özelleştirilebilir */
  #prev-button img,
  #next-button img {
    width: 25px;
    height: 40px;
  }
  </style>
