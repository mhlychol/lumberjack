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
    <div class="govdeconteiner">
      <div class="sepetimurunsayisi">
        Sepetim(3 Ürün)
      </div>
      <div class="ürünlersiparisozet">
        <div class="urunlerkargo">
          <div class="urunler">
            Ürünler
          </div>
          <div class="kargo">
            <div><i class="fa-solid fa-circle-check" style="color: #368d16;" /></div>
            <div>Kargo Bedava</div>
          </div>
        </div>
        <div class="siparisozetconteiner">
        <div class="siparisozet">
          <div class="urunozet">
            <div class="urunresmi">
              <img src="assets/griesofman1.webp" alt="">
            </div>
            <div class="urunbilgi">
              <div class="urunmarka" ><p>Lumberjack</p></div>
              <div class="urunyazi" ><a href="">ML SPARK 17CG510 3PR Siyah Erkek Sweatshirt</a></div>
              <div class="urunkargosure" ><div class="urunkargosuresol">Tahmini Kargoya Teslimat :</div><div class="urunkargosuresag"> 7 - 8 Aralık</div></div>
            </div>
          </div>
          <div class="beden" >
            <div class="bedensol" >Beden:</div>
            <div class="bedensag" >2XL</div>
          </div>
          <div class="urunsayiconteiner">
            <div class="urunsayicerceve">
              <div class="urunsayi">1</div>
              <div class="urunsayibuton"><button>+</button></div>
            </div>
          </div>
          <div class="urunfiyat">
            <div class="urunfiyateski">749,99 TL</div>
          <div class="urunfiyatyeni">649,99 TL</div>
          </div>
          <div class="silbutonconteiner">
            <div class="silbuton">
           <button class="silbutonbuton">Sil <i class="fa-solid fa-trash-can" style="color: #bababa;"></i>
  </button>
          </div>
  </div>
        </div>
      </div>
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

  .govdeconteiner {
    display: flex;
    flex-direction: column;
    margin: 20px 130px 20px 130px;
    font-family: sans-serif, poppins;

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
    width: 70%;
    border: 1px solid rgb(201, 201, 201);

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
  .siparisozetconteiner{
  padding: 10px;
    display: flex;
    flex-direction: column;
    width: auto;
  }
  .siparisozet{
    display: flex;
    flex-direction: row;
    height: 100px;
    background-color: rgb(255, 255, 255);
    justify-content: space-between;
    align-items: center
  }
  .urunozet{
    display: flex;
    flex-direction: row;
    width: 40%;
    height: 100%;
    align-items: center;
  }
  .urunresmi{
    width: 20%;
    height: 100%;
  }
  .urunresmi img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;

  }
  .urunbilgi{
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 60%;
    align-items: center;
    padding-left: 10px;

  }
  .urunmarka{
    display: flex;
    height: 33%;
    width: 100%;
    margin-bottom: 2px;
    font-weight: 800;
  }
  .urunyazi{
    display: flex;
    height: 33%;
    width: 100%;
    overflow: hidden;
    font-size: 12px;
  text-decoration-color: black;
  color: rgb(167, 167, 167);
  }
  .urunyazi a{
  color: rgb(167, 167, 167);
  }

  .urunkargosure{
    display: flex;
    height: 33%;
    width: 100%;
    font-size: 12px;

  }
  .urunkargosuresol{
    display: flex;
     width: 70%;
     color: green;
     letter-spacing: 1px;
  }
  .urunkargosuresag{
    display: flex;
     width: 30%;
  }
  .beden{
    display: flex;
    flex-direction: row;
    width: 20%;
    height: 20px;
    justify-content: center;
    align-items: center;
    font-size:13px;
  }
  .bedensol{
  color: rgb(167, 167, 167);
  font-weight: 500;
  text-align: justify;
  transform: scaleX(1.15);
  margin-right: 5px;
  }
  .bedensag{
  font-weight: 400;
  }
  .urunsayiconteiner{
    display: flex;
    flex-direction: row;
    width: 20%;
    height: 50px;
    align-items: center;
    padding-left: 25px;
  }
  .urunsayicerceve{
    display: flex;
    flex-direction: row;
    height: 25px;
    width: 75px;
    border: 1px solid rgb(167, 167, 167);
    border-radius: 25px;
    font-size: 16px;
    text-align: center;
    justify-content: center;
  }

  .urunsayi{
    font-style: sans-serif;
  }
  .urunsayibuton{
    position: absolute;
    float: right ;
    margin-left: 50px;
    font-size: 18px;
    justify-content: center;
  }
  .urunfiyat{
    display: flex;
    flex-direction: column;
    width: 15%;
    height: 80px;
    justify-content: center;
    align-items: center;
  }
  .urunfiyateski{
  color: rgb(145, 145, 145);
  text-decoration:line-through;

  }
  .urunfiyatyeni{
    font-size: 15px;
    font-weight: 800;
  }
  .silbutonconteiner{
    display: flex;
    flex-direction: row;
    width: 5%;
    height: 50px;
    justify-content: center;
    align-items: center;
    color: rgb(167, 167, 167);
    padding-left: 2px;
  }
  </style>
