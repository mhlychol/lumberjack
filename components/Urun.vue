<template>
  <div class="mainconteiner">
    <div class="ickonteyner">
      <div class="resimconteiner">
        <div class="resimustukupon">
          <img src="assets/kupon.webp" alt="">
        </div>
        <div class="resim">
          <img class="imgresim" src="assets/griesofman1.webp" alt="">
        </div>
      </div>
      <div class="kargoindirimdurum">
        <div class="indirimdurum">
          -%20
        </div>
        <div class="kargodurum">
          Kargo Bedava
        </div>
      </div>
      <div class="model">
        M-CT107 BASIC JOGGER 3FX Gri Erkek Eşofman Altı
      </div>
      <div class="fiyat">
        <div class="fiyatyazi">
          Son 30 Günün En Düşük Fiyatı
        </div>
        <div class="eskisonfiyat">
          <div class="eskifiyat">
            449,99 TL
          </div>
          <div class="sonfiyat">
            359,99 TL
          </div>
        </div>
        <div class="ucuncufiyat" />
      </div>
      <div class="renkresimler">
        <div class="renkresimconteiner">
          <Button class="renkresim">
            <img src="assets/griesofman1.webp" alt="">
          </Button>
          <div class="seciliitem" />
        </div>
        <div class="renkresimconteiner">
          <Button class="renkresim">
            <img src="assets/siyahesofman3.webp" alt="">
          </Button>
          <div class="seciliitem" style="visibility: hidden;" />
        </div>
        <div class="renkresimconteiner">
          <Button class="renkresim">
            <img src="assets/bejesofman1.webp" alt="">
          </Button>
          <div class="seciliitem" style="visibility: hidden;" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.mainconteiner {
  margin: 20px;
  max-width: 30%;
  height: auto;
  border: 1px solid rgb(208, 208, 208);
  font-family: sans-serif;
  padding: 0px;
  border-radius: 0%;
}

.ickonteyner {
  display: flex;
  flex-direction: column;
  padding-left: 5%;

}

.resimconteiner {

  width: 100%;
}
.resim{
  width: 100%;
}
.imgresim {
  height: 100%;
  width: 100%;
}

.resimustukupon {
  position: absolute;
  height: 50px;
  width: 100px;
  padding: 15px 0 0 5px;
}

.kargoindirimdurum {
  display: flex;
  flex-direction: row;
  height: 25px;
  font-size: 12px;
}

.indirimdurum {
  color: white;
  background-color: black;
  height: 20px;
  margin-right: 5px;
  padding: 0 5px 0 5px;

}

.kargodurum {
  color: rgb(0, 0, 0);
  background-color: rgb(232, 232, 232);
  height: 20px;
  padding: 0 5px 0 5px;

}

.model {
  height: auto;
  padding: 0 10px 0 0;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1;
}

.fiyat {
  display: flex;
  flex-direction: column;
}

.fiyatyazi {
  font-size: 12px;
  letter-spacing: 1px;
}

.eskisonfiyat {
  display: flex;
  flex-direction: row;
  font-size: 14px;

}

.eskifiyat {
  color: rgb(136, 136, 136);
  text-decoration: line-through;
  padding-right: 10px;
}

.sonfiyat {
  color: red;

}

.ucuncufiyat {
  height: 20px;
}

.renkresimler {
  display: flex;
  flex-direction: row;
  margin: 5px 15px 5px 0;
}

.renkresimconteiner {
  width: 45px;
  height: 100px;
  margin-right: 5px;
}

.renkresim {
  height: 60px;
  width: 45px;
}

.seciliitem {
  height: 3px;
  background-color: black;
  margin: 5px 0 25px 0;

}
</style>
