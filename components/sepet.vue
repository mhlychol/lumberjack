<script>
import Sepeturun from './Sepeturun.vue' // Adjust the path accordingly

export default {
  components: {
    Sepeturun,
  },
  // other component options...
}
</script>

<template>
  <div class="mainconteiner">
    <div class="urunsayisi">
      1 Adet ürün sepetinizde ekli
    </div>
    <div class="aratoplam">
      Ara Toplam: 699,99 TL
    </div>
    <div class="sepetbutonconteiner">
      <button class="sepetbuton">
        SEPETE GİT
      </button>
    </div>
    <div style="background-color: gray; height: 1px;" />
    <div class="urunler">
      <Sepeturun />
      <Sepeturun />
    </div>
    <div style="background-color: gray; height: 1px;" />
  </div>
</template>

<style>
.mainconteiner {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 400px;
  background-color: rgb(255, 255, 255);
  font-family: poppins, sans-serif;
  padding: 20px;
  letter-spacing: 1px;
  border: 2px solid #c2c2c2;
  border-radius: 1%;

}

.urunsayisi,
.aratoplam {
  font-size: 12px;
  color: #333333;
}

.sepetbutonconteiner {
  text-align: center;
  padding: 10px 0 15px 0;

}

.sepetbuton {
  background-color: black;
  width: 100%;
  /* Add margin to center vertically */
  color: white;
  height: 30px;
  font-size: 14px;
}
.urunler{
  display: flex;
  flex-direction: column;
  padding: 5px 0 5px 0 ;
}
</style>
