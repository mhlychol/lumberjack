<script>
export default {
  name: 'Bolum',
}
</script>

<template>
  <div class="ana-bolum">
    <div class="kutu1">
      <img src="assets/component 1/kargo-bedava-web.webp" style="height: 100%;">
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
      <div style="background-color: gray; height: 1px;" />
      <div class="kutu2-alt">
        <div class="logo">
          <img src="assets/component 1/lumberjack logo.png">
        </div>
        <div class="menuler">
          <div class="menu-item">
            Kadın
            <div class="submenu">
              <a href="#">Elbiseler</a>
              <a href="#">Ayakkabılar</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            Erkek
            <div class="submenu">
              <a href="#">Gömlekler</a>
              <a href="#">Pantolonlar</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            Çocuk
            <div class="submenu">
              <a href="#">Çocuk Elbiseleri</a>
              <a href="#">Oyuncaklar</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            Giyim
            <div class="submenu">
              <a href="#">Şapkalar</a>
              <a href="#">Atkılar</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            Aksesuar
            <div class="submenu">
              <a href="#">Şapkalar</a>
              <a href="#">Atkılar</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            Outdoor
            <div class="submenu">
              <a href="#">Kamp Malzemeleri</a>
              <a href="#">Spor Giyim</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            İndirim
            <div class="submenu">
              <a href="#">Yaz İndirimi</a>
              <a href="#">Kış İndirimi</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
        </div>
        <div class="sepet-arama">
          <div class="sepet">
            sepet
          </div>
          <div class="arama">
            arama
          </div>
          <div class="acilirarama">
            acilir
          </div>
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
  height: 59px;
  width: 100%;
  background-color: #c8a51c;
}

.kutu2 {
  height: 141px;
  width: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;

}

.kutu2-ust {
  background-color: #000000;
  text-align: center;
  width: 100%;
  height: 28px
}

.sol {
  float: left;
  padding: 5px;
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
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
}

.isaret {
  padding: 0px 10px 0px 10px;
  color: #c7c7c7;
}

.kutu2-alt {
  width: 100%;
  color: white;
  align-items: center;
  height: 111px;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
}

.logo {
  flex: 0 0 25%;
  max-width: 25%;
}

.logo img {
  float: left;
  padding: 5px;

}

.menuler {
  display: flex;
  font-family: sans-serif;
  font-size: 15px;
  flex: 0 0 58.33333333%;
  max-width: 58.33333333%;
}

.menu-item {
  position: relative;
  margin-left: 20px;

}

.menu-item:hover .submenu {
  display: block;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  left: -130px;
  width: 640px
}

.menu-item:hover .submenu {
  display: block;
}

.submenu a {
  display: block;
  margin-bottom: 5px;
  text-decoration: none;
  color: #333;
}

.submenu a:hover {
  color: #0070cc;
}

.sepet-arama {
  display: flex;
  flex-wrap: wrap;
  float: right;
  flex: 0 0 16.66666667%;
  flex-direction: row-reverse;
}
.sepet{
  height: 100%;
  background-image: "assets/component 1/sepet.jpg";
}
.arama{
  height: 100%;

}
.acilirarama{
height: 100%;
}
</style>
