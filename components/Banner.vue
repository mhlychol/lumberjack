<template>
  <div class="body">
    <div class="banner">
      <img src="assets/donemselreklam1.webp" alt="">
    </div>
    <div class="banner">
      <img src="assets/donemselreklam2.webp" alt="">
    </div>
    <div class="kategori">
      <div class="Bannerresimler">
        <img src="assets/erkek.webp" alt="">
      </div>
      <div class="Bannerresimler">
        <img src="assets/cocuk.webp" alt="">
      </div>
      <div class="Bannerresimler">
        <img src="assets/kadin.webp" alt="">
      </div>
    </div>
    <div class="banner">
      <img src="assets/aksesuar.webp" alt="">
    </div>
  </div>
</template>

  <style>
  .body {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 80px;
  }

  .kategori {
    display: flex; /* Yatay hizalama için ekledik */
  }
  .Bannerresimler {
    padding: 15px 0px 15px 0px;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
}
.banner{
  padding: 15px 0px 0px 0px;
}
  </style>
