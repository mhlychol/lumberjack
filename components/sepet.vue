<template>
  <!DOCTYPE html>
  <html>
    <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    </head>

    <body>
      <div class="header-top" />
      <div class="div1">
        <div class="div2">
          <NuxtLink to="/">
            <img
              class="resim" style="margin-bottom: 8px"
              src="https://lumberjack.com.tr/pub/assets/lumberjack/img/logo1.png"
            >
          </NuxtLink>
        </div>
      </div>
      <div class="basket-detail" style="display : inline-block">
        <div class="buy-alert">
          <i>!</i> Sepetinizde bulunan ürün/ürünler size rezerve edilmemiştir.
        </div>
        <div class="detail-table">
          <table>
            <tr>
              <th>ÜRÜN</th>
              <th>ÜRÜN ADI</th>
              <th>RENK</th>
              <th>BEDEN</th>
              <th>ADET</th>
              <th>FİYAT</th>
              <th />
            </tr>
            <tr>
              <td><img src="https://floimages.mncdn.com/mnresize/120/120/media/catalog/product/1/0/2/100420702.JPG?w=120" alt=""></td>
              <td>Lumberjack SHELL 9PR Siyah Erkek Outdoor </td>
              <td>Siyah</td>
              <td>41</td>
              <td>1</td>
              <td>429,99 TL</td>
              <td />
            </tr>
            <tr>
              <td><img src="https://floimages.mncdn.com/mnresize/120/120/media/catalog/product/1/0/2/100420702.JPG?w=120" alt=""></td>
              <td>Lumberjack SHELL 9PR Siyah Erkek Outdoor </td>
              <td>Siyah</td>
              <td>41</td>
              <td>1</td>
              <td>429,99 TL</td>
              <td />
            </tr>
          </table>
        </div>
        <div class="sepet-detail2" style="display : inline-block">
          <div class="summary-title">
            Sepetinizde 2 adet ürün var
          </div>
          <table>
            <tr>
              <td>ARA TOPLAM</td>
              <td>1.079,97 TL</td>
            </tr>
            <tr>
              <td>İNDİRİM</td>
              <td>0,00 TL</td>
            </tr>
            <tr>
              <td>KARGO ÜCRETİ</td>
              <td>ÜCRETSİZ</td>
            </tr>
            <tr>
              <td>GENEL TOPLAM</td>
              <td>1.079,97 TL</td>
            </tr>
          </table>
        </div>
        <div>
          <a class="show-campaign-code">
            Kampanya Kodunuz Var mı?
          </a>
        </div>
        <button class="spt-btn">
          SEPETİ ONAYLA
        </button>
      </div>
    </body>
  </html>
</template>

<style scoped>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');

        body {
            margin: 0;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 13px;
        }
        .header-top {
            width: 1349px;
            height: 26px;
            background-color: black;
            color: #fff;
            font-weight: 500;

        }
        .detail-table{
                -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    line-height: 1.42857143;
    color: #333;
    font-family: poppins,sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0;
    font-size: 13px;
    box-sizing: border-box;
    outline: 0 !important;
    min-height: 1px;
    float: left;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 75%;
    max-width: 75%;
        }

        .div1 {
            background-color: black;
            width: 1349px;
            height: 15.4vh;
            display: flex;
            justify-content: center;
            border-bottom: white 1px solid;
            overflow : hidden;
        }

        .div2 {
            background-color: black;
            width: 84.6vw;
            height: 15vh;
            display: flex;
            align-items: center;

        }
        i{  width: 22px;
            height: 22px;
            min-width: 22px;
            border: 2px solid #000;
            border-radius: 50%;
            display: inline-block;
            margin-right: 5px;
            text-align: center;
            line-height: 17px;}
        .detail-table th{
            background-color: #000;
            color: #fff;
            padding: 8px;
            border-color: #000;
            font-weight: 400;
            line-height: 1.42857143;
            box-sizing: border-box;
            border-spacing: 0;
            letter-spacing: 0;
            font-size: 13px;
            border-collapse: collapse;

        }

        .summary-title{
            background-color:#000;
            text-align: center;
            padding: 10px;
            color: #fff;
            font-size: 14px;
            box-sizing: border-box;
            display: inline-block;

        }
        .sepet-detail2{
            width :210;
            height :455;
            box-sizing: border-box;
        }
        .sepet-detail2 td{
                    padding: 7px 0;
                    font-size: 12px;
                    letter-spacing: 0;
                    border-collapse: collapse;
                    border-spacing: 0;
                    line-height: 1.42857143;

        }
        .show-campaign-code{
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            color: #000;
        }
        .spt-btn{
                -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    outline: 0 !important;
    font: inherit;
    margin: 0;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    font-family: inherit;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    border-radius: 0;
    padding: 10px 25px;
    line-height: 1;
    color: #fff !important;
    background: #000 !important;
    border: 2px solid #000 !important;
    display: block;
        }
    </style>
