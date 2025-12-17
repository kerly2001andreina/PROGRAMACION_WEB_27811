(function($) {

  "use strict";

  // --- Preloader ---
  var initPreloader = function() {
    $(document).ready(function() {
      $('body').addClass('preloader-site');
    });
    $(window).on('load', function() {
      $('.preloader-wrapper').fadeOut();
      $('body').removeClass('preloader-site');
    });
  }

  // --- Chocolat (lightbox) ---
  var initChocolat = function() {
    try {
      if (typeof Chocolat === 'function') {
        Chocolat(document.querySelectorAll('.image-link'), {
          imageSize: 'contain',
          loop: true,
        });
      }
    } catch (e) {
      console.warn('Chocolat init error:', e);
    }
  }

  // --- Swiper initializations ---
  var initSwiper = function() {
    try {
      if (typeof Swiper !== 'undefined') {
        if (document.querySelector(".main-swiper")) {
          new Swiper(".main-swiper", {
            speed: 500,
            pagination: { el: ".swiper-pagination", clickable: true },
          });
        }
        if (document.querySelector(".bestselling-swiper")) {
          new Swiper(".bestselling-swiper", {
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 500,
            breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 3 }, 991: { slidesPerView: 4 } }
          });
        }
        if (document.querySelector(".testimonial-swiper")) {
          new Swiper(".testimonial-swiper", {
            slidesPerView: 1,
            speed: 500,
            pagination: { el: ".swiper-pagination", clickable: true },
          });
        }
        if (document.querySelector(".products-carousel")) {
          new Swiper(".products-carousel", {
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 500,
            breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 3 }, 991: { slidesPerView: 4 } }
          });
        }
        if (document.querySelector(".product-thumbnail-slider") && document.querySelector(".product-large-slider")) {
          var thumb = new Swiper(".product-thumbnail-slider", {
            spaceBetween: 8,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
          });
          new Swiper(".product-large-slider", {
            spaceBetween: 10,
            slidesPerView: 1,
            effect: 'fade',
            thumbs: { swiper: thumb },
          });
        }
      }
    } catch (e) {
      console.warn('Swiper init error:', e);
    }
  }

  // --- Product quantity (usa input class="qty") ---
  var initProductQty = function(){
    $('.product-qty').each(function(){
      var $el_product = $(this);

      $el_product.find('.quantity-right-plus').off('click').on('click', function(e){
        e.preventDefault();
        var $input = $el_product.find('input.qty');
        var quantity = parseInt($input.val() || 0, 10);
        $input.val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').off('click').on('click', function(e){
        e.preventDefault();
        var $input = $el_product.find('input.qty');
        var quantity = parseInt($input.val() || 0, 10);
        if (quantity > 0) $input.val(quantity - 1);
      });
    });
  }

  // --- Jarallax (parallax) ---
  var initJarallax = function() {
    try {
      if (typeof jarallax === 'function') {
        jarallax(document.querySelectorAll(".jarallax"));
        jarallax(document.querySelectorAll(".jarallax-keep-img"), { keepImg: true });
      }
    } catch (e) {
      console.warn('Jarallax init error:', e);
    }
  }

  // --- Isotope (masonry + filtros) ---
  var initIsotope = function() {
    try {
      if (typeof $.fn.isotope === 'function' && $('.isotope-container').length) {
        var $container = $('.isotope-container').isotope({ itemSelector: '.item', layoutMode: 'masonry' });

        $('.filter-button').off('click').on('click', function () {
          $('.filter-button').removeClass('active');
          $(this).addClass('active');
          var filterValue = $(this).attr('data-filter') || '*';
          $container.isotope({ filter: filterValue === '*' ? '*' : filterValue });
        });
      }
    } catch (e) {
      console.warn('Isotope init error:', e);
    }
  }

  // --- Inicialización en la carga inicial de la página ---
  $(document).ready(function() {
    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();
    initIsotope();
  });

  // --- Función pública que puedes llamar cada vez que inyectes HTML dinámicamente ---
  window.templateInit = function() {
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();
    initIsotope();
  }

})(jQuery);
