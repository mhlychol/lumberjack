<!-- <template>
    <div class="uruncontainer">

    <div class="urunbilgiyazi"> ds</div>
    <div class="urundetaycontainer">
        <div class="urunresimler">

        </div>
    </div>
    </div>
</template>  -->
<script>
import Uruns from './js/Uruns.js'

export default {
  data() {
    return {
      Uruns,
    }
  },
}
</script>

<template>
  <div>
    <h1>{{ urun.adi }}</h1>
    <p>{{ urun.aciklama }}</p>
    <div class="renk-butonlar">
      <button
        v-for="renk in urun.renkler"
        :key="renk.renkAdi"
        :class="{ active: seciliRenk === renk }"
        @click="seciliRenk = renk"
      >
        {{ renk.renkAdi }}
      </button>
    </div>
    <div class="urun-fotograflari">
      <img
        v-for="foto in seciliRenk.fotograflar"
        :key="foto"
        :src="foto"
        :alt="foto"
      >
    </div>
  </div>
</template>

  <style scoped>
  .renk-butonlar {
    display: flex;
    gap: 10px;
  }

  .renk-butonlar button {
    padding: 5px 10px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
  }

  .renk-butonlar button.active {
    background: #f0f0f0;
  }

  .urun-fotograflari img {
    max-width: 100%;
    height: auto;
  }
  </style>
