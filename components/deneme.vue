<template>
  <header class="header">
    <div class="top-banner hidden-xs hidden-sm hidden-md">
      <a href="/tum-kategoriler"><img
        src="https://floimages.mncdn.com/media/catalog/product/original/23-09/01/kargo-bedava-web.jpg"
        width="100%"
        height="60px"
        style="object-fit: cover"
        alt="kargo bedava"
      ></a>
    </div>
    <div class="header-notification hidden-xs hidden">
      <a href="/customer/login#register">ÜYE OL ANINDA %10 İNDİRİM KAZAN!</a><a href="#" class="show-more">*Detay</a>
    </div>
    <div class="header-top hidden-xs">
      <div class="container">
        <span class="header-top-message">200 TL VE ÜZERİ ÜCRETSİZ KARGO</span>
        <div
          class="d-flex align-items-center justify-content-center pull-right mt-2"
        >
          <ul class="header-top-links list-inline logged-in hide">
            <li>
              <a href="/customer/orders" data-test="open-to-my-orders">SİPARİŞ TAKİBİ</a>
            </li>
            <li>/</li>
            <li>
              <a href="/customer/edit" data-test="open-to-edit-profile">HESABIM</a>
            </li>
            <li>/</li>
            <li>
              <a
                href="javascript:;"
                class="customer-logout"
                data-test="header-logout"
              >ÇIKIŞ YAP</a>
            </li>
          </ul>
          <ul class="header-top-links list-inline logged-out">
            <li>
              <a href="/guest-order-verify" data-test="open-to-my-orders">SİPARİŞ TAKİBİ</a>
            </li>
            <li>/</li>
            <li>
              <a
                href="/customer/login#register"
                class="js-login-redirect"
                data-src="#js-register-form"
                data-test="open-to-register-form"
              >ÜYE OL</a>
            </li>
            <li>/</li>
            <li class="js-discount-code">
              <a
                href="/customer/login#login"
                class="js-login-redirect"
                data-src="#js-login-form"
                data-test="open-to-login-form-2"
              >GİRİŞ YAP</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-bottom container">
      <div class="row align-items-center">
        <div class="col-7 col-md-3">
          <a
            href="#mobile-menu"
            class="header-mobile-menu-toggle open-menu-button"
          ><i class="fas fa-bars" /></a><a href="/" data-test="open-to-checkout-header-home-page-redirect"><img
            src="/pub/assets/lumberjack/img/logo1.png"
            alt="LUMBERJACK"
            class="header-logo"
          ></a>
        </div>
        <div class="col-md-7 hidden-xs">
          <ul class="nav nav-pills header-nav hidden-xs lazy">
            <li class="dropdown">
              <a href="/kadin">Kadın</a>
              <div class="dropdown-menu">
                <nav class="dropdown-menu-inner">
                  <div class="header-nav-sub">
                    <a
                      href="/ayakkabi?cinsiyet=kadin,unisex"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Ayakkabı</a><a
                      href="/sneaker?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sneaker </a><a
                      href="/kosu-ayakkabisi?cinsiyet=kadin,unisex"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Koşu </a><a
                      href="/yuruyus-ayakkabisi?cinsiyet=kadin,unisex"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Yürüyüş </a><a
                      href="/search?q=comfort&amp;cinsiyet=kadin,unisex"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Comfort</a><a
                      href="/sandalet?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sandalet </a><a
                      href="/terlik?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Terlik
                    </a>
                  </div>
                  <div class="header-nav-sub">
                    <a
                      href="/giyim?cinsiyet=kadin"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Giyim</a><a
                      href="/tisort?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >T-shirt </a><a
                      href="/sweatshirt?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sweatshirt</a><a
                      href="/esofman?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Eşofman</a><a
                      href="/tayt?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Tayt</a><a
                      href="/sport-bra"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sport Bra </a><a
                      href="/sort?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Şort
                    </a>
                  </div>
                  <div class="header-nav-sub">
                    <a
                      href="/aksesuar?cinsiyet=kadin,unisex"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Aksesuar </a><a
                      href="/canta?cinsiyet=kadin,unisex"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Çanta</a><a
                      href="/sirt-cantasi?cinsiyet=kadin,unisex"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sırt Çantası</a><a
                      href="/valiz"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Valiz</a><a
                      href="/corap?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Çorap </a><a
                      href="/kampanya/atki-eldiven-ve-bere-setleri?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Atkı-Bere-Eldiven</a><a
                      href=""
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    />
                  </div>
                </nav>
              </div>
            </li>
            <li class="dropdown">
              <a href="/erkek">Erkek</a>
              <div class="dropdown-menu">
                <nav class="dropdown-menu-inner">
                  <div class="header-nav-sub">
                    <a
                      href="/ayakkabi?cinsiyet=erkek"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Ayakkabı</a><a
                      href="/sneaker?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sneaker </a><a
                      href="/kosu-ayakkabisi?cinsiyet=erkek,unisex"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Koşu </a><a
                      href="/yuruyus-ayakkabisi?cinsiyet=erkek,unisex"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Yürüyüş </a><a
                      href="/search?q=ayakkabı&amp;category_id=7054&amp;cinsiyet=erkek,unisex"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Casual</a><a
                      href="/search?q=comfort&amp;cinsiyet=erkek,unisex"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Comfort</a><a
                      href="/sandalet?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sandalet </a><a
                      href="/terlik?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Terlik
                    </a>
                  </div>
                  <div class="header-nav-sub">
                    <a
                      href="/giyim?cinsiyet=erkek"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Giyim </a><a
                      href="/tisort?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >T-shirt </a><a
                      href="/sweatshirt?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sweatshirt</a><a
                      href="/esofman?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Eşofman</a><a
                      href="/kampanya/softshell-su-gecirmez?kategori=giyim"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Softshell</a><a
                      href="/sort?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Şort </a><a
                      href="/deniz-sortu?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Deniz Şortu </a><a
                      href="/polar?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Polar</a><a
                      href="/mont?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Mont
                    </a>
                  </div>
                  <div class="header-nav-sub">
                    <a
                      href="/aksesuar?cinsiyet=erkek,unisex"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Aksesuar</a><a
                      href="/canta?cinsiyet=erkek,unisex"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Çanta</a><a
                      href="/sirt-cantasi?cinsiyet=erkek,unisex"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sırt Çantası</a><a
                      href="/valiz"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Valiz</a><a
                      href="/sapka?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Şapka </a><a
                      href="/search?q=cüzdan"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Cüzdan</a><a
                      href="/kemer"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Kemer </a><a
                      href="/corap?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Çorap </a><a
                      href="/kampanya/atki-eldiven-ve-bere-setleri?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Atkı-Bere-Eldiven
                    </a>
                  </div>
                </nav>
              </div>
            </li>
            <li class="dropdown">
              <a href="/cocuk">Çocuk</a>
              <div class="dropdown-menu">
                <nav class="dropdown-menu-inner">
                  <div class="header-nav-sub">
                    <a
                      href="/search?q=çocuk&amp;cinsiyet=kiz-cocuk,unisex-cocuk"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Kız Çocuk</a><a
                      href="/sneaker?cinsiyet=kiz-cocuk,unisex-cocuk"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sneaker </a><a
                      href="/kosu-ayakkabisi?cinsiyet=kiz-cocuk,unisex-cocuk"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Koşu </a><a
                      href="/sandalet?cinsiyet=kiz-cocuk"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sandalet </a><a
                      href="/terlik?cinsiyet=kiz-cocuk"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Terlik </a><a
                      href="/search?q=çocuk&amp;category_id=7064&amp;cinsiyet=kiz-cocuk,unisex-cocuk"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Deniz</a>
                  </div>
                  <div class="header-nav-sub">
                    <a
                      href="/search?q=çocuk&amp;cinsiyet=erkek-cocuk,unisex-cocuk"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Erkek Çocuk</a><a
                      href="/sneaker?cinsiyet=erkek-cocuk,unisex-cocuk"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sneaker </a><a
                      href="/kosu-ayakkabisi?cinsiyet=erkek-cocuk,unisex-cocuk"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Koşu </a><a
                      href="/sandalet?cinsiyet=erkek-cocuk"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sandalet </a><a
                      href="/terlik?cinsiyet=erkek-cocuk"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Terlik </a><a
                      href="/search?q=çocuk&amp;category_id=7064&amp;cinsiyet=erkek-cocuk,unisex-cocuk"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Deniz</a>
                  </div>
                  <div class="header-nav-sub">
                    <a
                      href=""
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Beden Grubu</a><a
                      href="/kampanya/bebek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Bebek</a><a
                      href="/search?q=çocuk"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Çocuk</a>
                  </div>
                </nav>
              </div>
            </li>
            <li class="dropdown">
              <a href="/giyim">Giyim</a>
              <div class="dropdown-menu">
                <nav class="dropdown-menu-inner">
                  <div class="header-nav-sub">
                    <a
                      href="/giyim?cinsiyet=kadin"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Kadın</a><a
                      href="/tisort?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >T-shirt</a><a
                      href="/sweatshirt?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sweatshirt</a><a
                      href="/esofman?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Eşofman</a><a
                      href="/tayt?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Tayt </a><a
                      href="/sport-bra"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sport Bra </a><a
                      href="/sort?cinsiyet=kadin"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Şort</a>
                  </div>
                  <div class="header-nav-sub">
                    <a
                      href="/giyim?cinsiyet=erkek"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Erkek</a><a
                      href="/tisort?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >T-shirt</a><a
                      href="/sweatshirt?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sweatshirt</a><a
                      href="/esofman?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Eşofman</a><a
                      href="/kampanya/softshell-su-gecirmez?kategori=giyim"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >SoftShell</a><a
                      href="/sort?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Şort</a><a
                      href="/deniz-sortu?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Deniz Şortu</a><a
                      href="/polar?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Polar</a><a
                      href="/mont?cinsiyet=erkek"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Mont</a>
                  </div>
                </nav>
              </div>
            </li>
            <li class="dropdown">
              <a href="/aksesuar">Aksesuar</a>
            </li>
            <li class="dropdown">
              <a href="/kampanya/outdoor-firsatlari">Outdoor</a>
              <div class="dropdown-menu">
                <nav class="dropdown-menu-inner">
                  <div class="header-nav-sub">
                    <a
                      href="https://www.lumberjack.com.tr/kampanya/outdoor-firsatlari?kategori=ayakkabi"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Ayakkabı</a><a
                      href="/kampanya/outdoor-firsatlari?kategori=ayakkabi"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Ayakkabı</a><a
                      href="/bot"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Bot</a><a
                      href="/kampanya/softshell-su-gecirmez"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Su Geçirmez</a>
                  </div>
                  <div class="header-nav-sub">
                    <a
                      href="https://www.lumberjack.com.tr/kampanya/outdoor-firsatlari?kategori=giyim"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Giyim</a><a
                      href="/sweatshirt"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Sweatshirt</a><a
                      href="https://www.lumberjack.com.tr/esofman"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Eşofman</a><a
                      href="/mont"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Mont</a>
                  </div>
                  <div class="header-nav-sub">
                    <a
                      href="https://www.lumberjack.com.tr/kampanya/atki-eldiven-ve-bere-setleri"
                      class="header__link header__link-title"
                      data-test="open-to-header-top-menu-title"
                    >Aksesuar</a><a
                      href="/kampanya/atki-eldiven-ve-bere-setleri"
                      data-test="open-to-header-top-submenu"
                      class="header__link"
                    >Atkı-Bere-Eldiven</a>
                  </div>
                </nav>
              </div>
            </li>
            <li class="dropdown">
              <a href="/indirim">İndirim</a>
            </li>
          </ul>
        </div>
        <div class="col-5 col-md-2">
          <ul
            class="list-inline pull-right header-nav-right d-flex align-items-center"
          >
            <li class="visible-xs-inline-block header-customer-mobile hidden">
              <a href="/customer/myaccount" class="logged-in hide"><i class="fa fa-user" /></a><a class="customer-login logged-out"><i class="fa fa-user" /></a>
            </li>
            <li class="header-search search-form-wrapper pos-relative">
              <a href="#" class="header-search-toggle"><i class="fas fa-search" /></a>
              <div id="headerSearchForm" class="header-search-container hide">
                <div class="form-header">
                  <a href="#" class="header-search-result-close visible-xs hidden"><i class="fas fa-chevron-left" /></a><i />
                  <form action="" class="header-search-form">
                    <input
                      type="search"
                      class="form-control js-autocomplete-input"
                    ><button class="btn btn-primary">
                      ARA
                    </button>
                  </form>
                </div>
                <div class="clearfix" />
                <div
                  class="search-header-body search-quickview autocomplete search__quickview"
                >
                  <div
                    id="widget_V1\Products\Autocompletev2_5"
                    data-layout-id="0"
                    data-widget="V1\Products\Autocompletev2"
                    class="module V1_Products_Autocompletev2 cms_widget widget_V1\Products\Autocompletev2"
                  />
                </div>
              </div>
            </li>
            <li class="header-basket js-toggle-mini-basket">
              <a
                id="commerce-mini-cart-mobile"
                href="#"
                class="header-basket-toggle header-basket-toggle-dropdown"
              ><i class="fas fa-shopping-bag" /><span
                class="header-basket-count cart-count"
                style="display: none"
              >0</span></a>
              <div id="header-minibasket" class="dropdown-menu header-minibasket">
                <a href="#header-minibasket" class="header-minibasket-close close">×</a>
                <div
                  id="widget_V1\Basket\MiniCart_6"
                  data-layout-id="0"
                  data-widget="V1\Basket\MiniCart"
                  class="module V1_Basket_MiniCart cms_widget widget_V1\Basket\MiniCart"
                >
                  <div class="header-minibasket-empty">
                    Alışveriş Sepetiniz Boş
                  </div>
                  <div
                    id="widget_V1\Datalayer\AllPages_7"
                    data-layout-id="0"
                    data-widget="V1\Datalayer\AllPages"
                    class="module V1_Datalayer_AllPages cms_widget widget_V1\Datalayer\AllPages"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="mobile-menu">
      <ul>
        <li>
          <span>Kadın</span>
          <ul>
            <li>
              <span>Ayakkabı</span>
              <ul>
                <li>
                  <a href="/sneaker?cinsiyet=kadin" class="header__link">Sneaker
                  </a>
                </li>
                <li>
                  <a
                    href="/kosu-ayakkabisi?cinsiyet=kadin,unisex"
                    class="header__link"
                  >Koşu
                  </a>
                </li>
                <li>
                  <a
                    href="/yuruyus-ayakkabisi?cinsiyet=kadin,unisex"
                    class="header__link"
                  >Yürüyüş
                  </a>
                </li>
                <li>
                  <a
                    href="/search?q=comfort&amp;cinsiyet=kadin,unisex"
                    class="header__link"
                  >Comfort</a>
                </li>
                <li>
                  <a href="/sandalet?cinsiyet=kadin" class="header__link">Sandalet
                  </a>
                </li>
                <li>
                  <a href="/terlik?cinsiyet=kadin" class="header__link">Terlik
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Giyim</span>
              <ul>
                <li>
                  <a href="/tisort?cinsiyet=kadin" class="header__link">T-shirt
                  </a>
                </li>
                <li>
                  <a href="/sweatshirt?cinsiyet=kadin" class="header__link">Sweatshirt</a>
                </li>
                <li>
                  <a href="/esofman?cinsiyet=kadin" class="header__link">Eşofman</a>
                </li>
                <li>
                  <a href="/tayt?cinsiyet=kadin" class="header__link">Tayt</a>
                </li>
                <li><a href="/sport-bra" class="header__link">Sport Bra </a></li>
                <li>
                  <a href="/sort?cinsiyet=kadin" class="header__link">Şort </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Aksesuar </span>
              <ul>
                <li>
                  <a href="/canta?cinsiyet=kadin,unisex" class="header__link">Çanta</a>
                </li>
                <li>
                  <a
                    href="/sirt-cantasi?cinsiyet=kadin,unisex"
                    class="header__link"
                  >Sırt Çantası</a>
                </li>
                <li><a href="/valiz" class="header__link">Valiz</a></li>
                <li>
                  <a href="/corap?cinsiyet=kadin" class="header__link">Çorap </a>
                </li>
                <li>
                  <a
                    href="/kampanya/atki-eldiven-ve-bere-setleri?cinsiyet=kadin"
                    class="header__link"
                  >Atkı-Bere-Eldiven</a>
                </li>
                <li><a href="" class="header__link" /></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span>Erkek</span>
          <ul>
            <li>
              <span>Ayakkabı</span>
              <ul>
                <li>
                  <a href="/sneaker?cinsiyet=erkek" class="header__link">Sneaker
                  </a>
                </li>
                <li>
                  <a
                    href="/kosu-ayakkabisi?cinsiyet=erkek,unisex"
                    class="header__link"
                  >Koşu
                  </a>
                </li>
                <li>
                  <a
                    href="/yuruyus-ayakkabisi?cinsiyet=erkek,unisex"
                    class="header__link"
                  >Yürüyüş
                  </a>
                </li>
                <li>
                  <a
                    href="/search?q=ayakkabı&amp;category_id=7054&amp;cinsiyet=erkek,unisex"
                    class="header__link"
                  >Casual</a>
                </li>
                <li>
                  <a
                    href="/search?q=comfort&amp;cinsiyet=erkek,unisex"
                    class="header__link"
                  >Comfort</a>
                </li>
                <li>
                  <a href="/sandalet?cinsiyet=erkek" class="header__link">Sandalet
                  </a>
                </li>
                <li>
                  <a href="/terlik?cinsiyet=erkek" class="header__link">Terlik
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Giyim </span>
              <ul>
                <li>
                  <a href="/tisort?cinsiyet=erkek" class="header__link">T-shirt
                  </a>
                </li>
                <li>
                  <a href="/sweatshirt?cinsiyet=erkek" class="header__link">Sweatshirt</a>
                </li>
                <li>
                  <a href="/esofman?cinsiyet=erkek" class="header__link">Eşofman</a>
                </li>
                <li>
                  <a
                    href="/kampanya/softshell-su-gecirmez?kategori=giyim"
                    class="header__link"
                  >Softshell</a>
                </li>
                <li>
                  <a href="/sort?cinsiyet=erkek" class="header__link">Şort </a>
                </li>
                <li>
                  <a href="/deniz-sortu?cinsiyet=erkek" class="header__link">Deniz Şortu
                  </a>
                </li>
                <li>
                  <a href="/polar?cinsiyet=erkek" class="header__link">Polar</a>
                </li>
                <li>
                  <a href="/mont?cinsiyet=erkek" class="header__link">Mont </a>
                </li>
              </ul>
            </li>
            <li>
              <span>Aksesuar</span>
              <ul>
                <li>
                  <a href="/canta?cinsiyet=erkek,unisex" class="header__link">Çanta</a>
                </li>
                <li>
                  <a
                    href="/sirt-cantasi?cinsiyet=erkek,unisex"
                    class="header__link"
                  >Sırt Çantası</a>
                </li>
                <li><a href="/valiz" class="header__link">Valiz</a></li>
                <li>
                  <a href="/sapka?cinsiyet=erkek" class="header__link">Şapka </a>
                </li>
                <li>
                  <a href="/search?q=cüzdan" class="header__link">Cüzdan</a>
                </li>
                <li><a href="/kemer" class="header__link">Kemer </a></li>
                <li>
                  <a href="/corap?cinsiyet=erkek" class="header__link">Çorap </a>
                </li>
                <li>
                  <a
                    href="/kampanya/atki-eldiven-ve-bere-setleri?cinsiyet=erkek"
                    class="header__link"
                  >Atkı-Bere-Eldiven
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span>Çocuk</span>
          <ul>
            <li>
              <span>Kız Çocuk</span>
              <ul>
                <li>
                  <a
                    href="/sneaker?cinsiyet=kiz-cocuk,unisex-cocuk"
                    class="header__link"
                  >Sneaker
                  </a>
                </li>
                <li>
                  <a
                    href="/kosu-ayakkabisi?cinsiyet=kiz-cocuk,unisex-cocuk"
                    class="header__link"
                  >Koşu
                  </a>
                </li>
                <li>
                  <a href="/sandalet?cinsiyet=kiz-cocuk" class="header__link">Sandalet
                  </a>
                </li>
                <li>
                  <a href="/terlik?cinsiyet=kiz-cocuk" class="header__link">Terlik
                  </a>
                </li>
                <li>
                  <a
                    href="/search?q=çocuk&amp;category_id=7064&amp;cinsiyet=kiz-cocuk,unisex-cocuk"
                    class="header__link"
                  >Deniz</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Erkek Çocuk</span>
              <ul>
                <li>
                  <a
                    href="/sneaker?cinsiyet=erkek-cocuk,unisex-cocuk"
                    class="header__link"
                  >Sneaker
                  </a>
                </li>
                <li>
                  <a
                    href="/kosu-ayakkabisi?cinsiyet=erkek-cocuk,unisex-cocuk"
                    class="header__link"
                  >Koşu
                  </a>
                </li>
                <li>
                  <a href="/sandalet?cinsiyet=erkek-cocuk" class="header__link">Sandalet
                  </a>
                </li>
                <li>
                  <a href="/terlik?cinsiyet=erkek-cocuk" class="header__link">Terlik
                  </a>
                </li>
                <li>
                  <a
                    href="/search?q=çocuk&amp;category_id=7064&amp;cinsiyet=erkek-cocuk,unisex-cocuk"
                    class="header__link"
                  >Deniz</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Beden Grubu</span>
              <ul>
                <li><a href="/kampanya/bebek" class="header__link">Bebek</a></li>
                <li><a href="/search?q=çocuk" class="header__link">Çocuk</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span>Giyim</span>
          <ul>
            <li>
              <span>Kadın</span>
              <ul>
                <li>
                  <a href="/tisort?cinsiyet=kadin" class="header__link">T-shirt</a>
                </li>
                <li>
                  <a href="/sweatshirt?cinsiyet=kadin" class="header__link">Sweatshirt</a>
                </li>
                <li>
                  <a href="/esofman?cinsiyet=kadin" class="header__link">Eşofman</a>
                </li>
                <li>
                  <a href="/tayt?cinsiyet=kadin" class="header__link">Tayt </a>
                </li>
                <li><a href="/sport-bra" class="header__link">Sport Bra </a></li>
                <li>
                  <a href="/sort?cinsiyet=kadin" class="header__link">Şort</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Erkek</span>
              <ul>
                <li>
                  <a href="/tisort?cinsiyet=erkek" class="header__link">T-shirt</a>
                </li>
                <li>
                  <a href="/sweatshirt?cinsiyet=erkek" class="header__link">Sweatshirt</a>
                </li>
                <li>
                  <a href="/esofman?cinsiyet=erkek" class="header__link">Eşofman</a>
                </li>
                <li>
                  <a
                    href="/kampanya/softshell-su-gecirmez?kategori=giyim"
                    class="header__link"
                  >SoftShell</a>
                </li>
                <li>
                  <a href="/sort?cinsiyet=erkek" class="header__link">Şort</a>
                </li>
                <li>
                  <a href="/deniz-sortu?cinsiyet=erkek" class="header__link">Deniz Şortu</a>
                </li>
                <li>
                  <a href="/polar?cinsiyet=erkek" class="header__link">Polar</a>
                </li>
                <li>
                  <a href="/mont?cinsiyet=erkek" class="header__link">Mont</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="/aksesuar">Aksesuar</a></li>
        <li>
          <span>Outdoor</span>
          <ul>
            <li>
              <span>Ayakkabı</span>
              <ul>
                <li>
                  <a
                    href="/kampanya/outdoor-firsatlari?kategori=ayakkabi"
                    class="header__link"
                  >Ayakkabı</a>
                </li>
                <li><a href="/bot" class="header__link">Bot</a></li>
                <li>
                  <a href="/kampanya/softshell-su-gecirmez" class="header__link">Su Geçirmez</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Giyim</span>
              <ul>
                <li><a href="/sweatshirt" class="header__link">Sweatshirt</a></li>
                <li>
                  <a
                    href="https://www.lumberjack.com.tr/esofman"
                    class="header__link"
                  >Eşofman</a>
                </li>
                <li><a href="/mont" class="header__link">Mont</a></li>
              </ul>
            </li>
            <li>
              <span>Aksesuar</span>
              <ul>
                <li>
                  <a
                    href="/kampanya/atki-eldiven-ve-bere-setleri"
                    class="header__link"
                  >Atkı-Bere-Eldiven</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="/indirim">İndirim</a></li>
      </ul>
    </div>
  </header>
</template>
