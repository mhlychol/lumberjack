<script>
export default {
  name: 'OrderStatusVerification',
}
</script>

<template>
  <div class="col-sm-8 verification">
    <p class="mb-4" />
    <h1 class="order-title">
      SİPARİŞ DURUM SORGULAMA
    </h1>
    <p>Siparişiniz hakkında bilgi almak istiyorsanız lütfen aşağıdaki alana siparişinizde kullanmış olduğunuz telefon numarasını ve sonrasında telefonunuza gelen doğrulama kodunu giriniz.</p>
    <p />
    <form
      action="javascript:void(0);"
      class="order-status-form mb-4"
      novalidate="novalidate"
    >
      <input id="csrf_token" type="hidden" data-name="csrf_token" name="csrf_token" value="a2e743b53dd02567e9aa30d48822c6ee38cd9d4e">
      <div class="form-group">
        <label><b>Cep Telefonu</b></label>
        <div class="row">
          <div class="col-md-5">
            <input
              type="text"
              class="form-control inputmask valid"
              name="telephone"
              data-inputmask="'mask': '0(599)-9999999'"
              inputmode="text"
              aria-invalid="false"
            >
          </div>
          <div class="col-md-7">
            <p class="phone-info">
              Sadece rakamlardan oluşan başında<br> 0 (sıfır) bulunmayan 10 haneli numara. Örn: 5324445566
            </p>
          </div>
        </div>
        <label>Sipariş Numarası</label>
        <div class="row">
          <div class="col-md-5">
            <input type="text" class="form-control js-increment-id" name="id" maxlength="18">
          </div>
          <div class="col-md-7">
            <p class="phone-info">
              Lütfen sipariş numarasını giriniz
            </p>
          </div>
        </div>
      </div>
      <button class="btn guest-code orange large">
        DOĞRULAMA KODUNU GÖNDER <i class="fa fa-angle-right" />
      </button>
    </form>
    <p>Üye girişi yaparak ya da Müşteri Hizmetleriyle ileşime geçerek de siparişlerinizi takip edebilirsiniz.</p>
  </div>
</template>

  <style scoped>
  .h1{
    font-size: 36px;
  }
  .col-sm-8.verification {
    padding: 10px 0 30px 40px;
    width: 65%;
    font-family: poppins, sans-serif;
  }

  .order-title {
    font-size: 36px;
    margin-bottom: 15px;
    letter-spacing: 1px;
  }
.p{
    width: 70%;
    letter-spacing: 1px;
    font-size: 12px;
    text-decoration-color: #333333;

}

  .order-status-form {
    margin-bottom: 30px;
  }

  .phone-info {
    color: #9e9e9e;
    font-size: 12px;
    margin-top: 5px;
  }

  .btn.guest-code {
    background-color: #ff7f00;
    color: #fff;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
  }
  .row{
    flex-direction: row;
    display: flex;
  }
  </style>
