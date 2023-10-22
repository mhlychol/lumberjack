<script>
export default {
  name: 'Bolum',
}
</script>

<template>
  <div class="ana-bolum">
    <div class="kutu1">
      <img src="assets/component 1/uye-ol-web.webp">
    </div>

    <div class="kutu2">
      <div class="kutu2-ust">
        <div class="sol">
          <p>750 TL VE ÜZERİ ÜCRETSİZ KARGO</p>
        </div>
        <div class="sag">
          <button id="siparis-takibi">
            SİPARİŞ TAKİBİ
          </button>
          <span class="isaret">/</span>
          <button id="hesap-bilgileri">
            HESABIM
          </button>
          <span class="isaret">/</span>
          <button id="cikis-yap">
            ÇIKIŞ YAP
          </button>
        </div>
      </div>
      <hr style="color: rgb(168, 166, 166);">
      <div class="kutu2-alt">
        <div class="logo">
          <img src="assets/component 1/lumberjack logo.png">
        </div>
        <div class="menuler">
          menuler
        </div>
        <div class="sepet-arama">
          sepet-arama
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ana-bolum {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.kutu1 {
    height: 30%;
    width: 100%;
    background-color: #F0E4B3;
}

.kutu2 {
    height: 70%;
    width: 100%;
    background-color: #000000;

}

.kutu1-yazi {
    text-align: center;
    /* Yatay hizalama için */
    line-height: 60px;
    font-family: sans-serif;
    font-size: 25px;
    font-weight: 790;
    color: #315C36;
    margin: 0;
    /* Paragrafın kenar boşluğunu kaldırır */
    letter-spacing: 2px;
}

.kutu2-ust {
    background-color: #000000;
    text-align: center;
    height: 20%;
    width: 100%;
}

.sol {
    float: left;
    padding:5px;
    padding-left: 25px;
}

.sag {
    float: right;
    padding: 0px;
    padding-right: 50px;
}

p {
    font-size: 11px;
    color: #ffffff;
    letter-spacing: 0.75px;

}

button {
    background-color: transparent;
    color: #fff;
    font-size: 10px;
    font-family: sans-serif;
    border: none;
    cursor: pointer;
    letter-spacing: 1px;

}
button::after {
  content: "/";
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
}
.kutu2-alt {
    display: flex;
    align-items: center;  /* İçeriği dikey olarak ortala */
    justify-content: space-between;
    color: white   ;
    float: left;
    width: 100%;
}
.isaret{
    padding: 10px;
    color: #c7c7c7;
}
.logo img{
    line-height: 160px;
    float: left;
    padding-left:15px;

}
.sepet-arama{
    padding-right:15px;
}
</style>
