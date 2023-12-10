import { Button } from 'ant-design-vue/es';
<template>
  <div class="ustbar">
    <div class="logo">
      <img src="assets/component 1/lumberjack logo.png">
    </div>
    <div class="sepetimadresodeme">
      <div class="sepetimadresodemeyazi">
        <a href="">Sepetim </a>
      </div>
      <div class="sepetimadresodemecizgi">
        <p> - - - - - - - </p>
      </div>
      <div class="sepetimadresodemeyazi">
        <a href=""> Adres/Ödeme</a>
      </div>
    </div>
    <div class="guvenlialisverisodeme">
      <div>
        <i class="fa-solid fa-lock" style="color: #ffffff;" />
      </div>
      <div class="guvenlialisverisyazi">
        Güvenli Alışveriş ve Ödeme
      </div>
    </div>
  </div>
  <div class="conteiner">
    <div class="govdeconteiner">
      <div class="sepetimurunsayisi">
        Sepetim (3 Ürün)
      </div>
      <div class="ürünlersiparisozet">
        <div class="urunlerkargo">
          <div class="urunler">
            Ürünler
          </div>
          <div class="kargo">
            <div class="kargologo">
              <i class="fa-solid fa-circle-check" style="color: #368d16;" />
            </div>
            <div class="kargoyazi">
              Kargo Bedava
            </div>
          </div>
        </div>
        <div class="siparisozetconteiner">
          <Sepetdetayurun />
          <Sepetdetayurun />
        </div>
      </div>
      <div class="sepetipaylasconteiner">
        <div class="sepetipaylasust">
          <i class="fas fa-shopping-bag" style="color: #000000;" /> <a href="">Sepetini
            Arkadaşınla Paylaş</a>
        </div>
        <div class="sepetipaylasalt">
          <a href="">Beğendiğiniz ürünleri kolayca sepetinize ekleyebilir ve arkadaşınızla
            paylaşabilirsiniz.</a>
        </div>
      </div>
    </div>
    <div class="siparisozetsagconteiner">
      <div class="siparisozetsag">
        <div class="siparisozetrow">
          <div class="siparisozetitopsol">
            Sipariş Özeti
          </div>
          <div class="siparisozetitopsag">
            (Sepette 2 Ürün Var)
          </div>
        </div>
        <div class="siparisozetrow">
          <div class="urunlertopsol">
            Ürünler
          </div>
          <div class="urunlertopsag">
            1.349,98 TL
          </div>
        </div>
        <div class="siparisozetrow">
          <div class="kargotopsol">
            Kargo
          </div>
          <div class="siparisozetrow">
            <div class="kargotopsagucretsiz">
              Ücretsiz
            </div>
            <div class="kargotopsagucret">
              39,99 TL
            </div>
          </div>
        </div>
        <div class="siparisozetrow">
          <div class="toplamsol">
            Toplam
          </div>
          <div class="toplamsag">
            1.349,98 TL
          </div>
        </div>
        <Button class="sepetionaylabuton">
          Sepeti Onayla
        </Button>
      </div>
      <button class="kampanyakuponkodubuton">
        <div class="kampanyakuponkoduyazi">
          Kampanya Kodu / Kupon
        </div>
        <div class="kampanyakuponkoduicon">
          <i class="fa-solid fa-chevron-down" style="color: #000000;" />
        </div>
      </button>
    </div>
  </div>
</template>

<style>
.ustbar {
  display: flex;
  flex-direction: row;
  height: 110px;
  background-color: black;
  align-items: center;
  padding: 0 130px 0 130px;
  font-family: sans-serif, poppins;
  letter-spacing: 1px;
  justify-content: space-between;
}

.sepetimadresodeme {
  display: flex;
  flex-direction: row;
  margin: 0 130px 0 130px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  float: center;
  align-items: center;
}

.sepetimadresodemeyazi {
  padding: 5px;
  align-items: center;
  display: flex;
}

.sepetimadresodemecizgi {
  font-weight: 300;
  align-items: center;
  margin: auto;
}

.p {
  font-size: 24px;
  padding: 5px;
}

.guvenlialisverisodeme {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  float: right;
  letter-spacing: 1px;
}

.guvenlialisverisyazi {
  padding: 5px;
}

.conteiner {
  display: flex;
  flex-direction: row;
}

.govdeconteiner {
  display: flex;
  flex-direction: column;
  margin: 20px 20px 20px 130px;
  font-family: sans-serif, poppins;
  width: 60%;

}

.sepetimurunsayisi {
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 15px;
}

.ürünlersiparisozet {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #e3e3e3;

}

.urunlerkargo {

  display: flex;
  width: 100%;
  background-color: RGB(248, 248, 248);
  padding: 0 20px 0 20px;
  height: 50px;
  border-color: black;
  align-items: center;
  letter-spacing: 1px;
}

.urunler {
  display: flex;
  margin-right: auto;
  /* Bu satır eklenmiştir */
}

.kargo {
  display: flex;
  align-items: center;
  font-weight: 400;
}

.kargologo {
  padding-right: 5px;
}

.kargoyazi {
  font-weight: 800;
  font-size: 12px;
  letter-spacing: normal;
}

.siparisozetconteiner {
  display: flex;
  flex-direction: column;
  width: auto;
  border-top: 1px solid #e3e3e3;
}

.sepetipaylasconteiner {
  margin: 20px 0 120px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid #e3e3e3;
  padding: 10px;
  border-radius: 10px;
}

.sepetipaylasust {
  font-size: 16px;
  color: black;
  font-weight: 400;
  letter-spacing: 1px;

}

.sepetipaylasalt {
  font-size: 15px;
}

.sepetipaylasalt a {
  color: rgb(139, 139, 139);
}

.sepetipaylasust a {
  color: black;
  text-align: justify;
  transform: scaleX(1.5);
}

.sepetipaylasust i {
  font-size: 18px;
  padding-right: 5px;
}

.siparisozetsagconteiner {
  display: flex;
  flex-direction: column;
  width: 35%;
}

.siparisozetsag {
  margin: 60px 150px 20px 0;
  display: flex;
  flex-direction: column;
  border: 1px solid #e3e3e3;
  padding: 10px;
  border-radius: 10px;
  height: 250px;
}
.siparisozetrow{
  display: flex;
  flex-direction: row;
}
.kampanyakuponkodubuton {
  margin: 10px 150px 20px 0;
  display: flex;
  flex-direction: row;
  border: 1px solid #e3e3e3;
  padding: 10px;
  border-radius: 10px;
  height: 50px;
  background-color: rgb(248, 248, 248);
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  font-size: 16px;

}

.kampanyakuponkoduyazi {
  display: flex;
  font-weight: 500;
  font-family: sans-serif;
  color: black;

}

.kampanyakuponkoduicon {
  display: flex;

}
</style>
