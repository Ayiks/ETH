jQuery(function(s){if("undefined"==typeof wc_single_product_params)return!1;s("body").on("init",".wc-tabs-wrapper, .woocommerce-tabs",function(){s(this).find(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)").hide();var t=window.location.hash,e=window.location.href,i=s(this).find(".wc-tabs, ul.tabs").first();(0<=t.toLowerCase().indexOf("comment-")||"#reviews"===t||"#tab-reviews"===t||0<e.indexOf("comment-page-")||0<e.indexOf("cpage=")?i.find("li.reviews_tab a"):"#tab-additional_information"===t?i.find("li.additional_information_tab a"):i.find("li:first a")).trigger("click")}).on("click",".wc-tabs li a, ul.tabs li a",function(t){t.preventDefault();var t=s(this),e=t.closest(".wc-tabs-wrapper, .woocommerce-tabs");e.find(".wc-tabs, ul.tabs").find("li").removeClass("active"),e.find(".wc-tab, .panel:not(.panel .panel)").hide(),t.closest("li").addClass("active"),e.find(t.attr("href")).show()}).on("click","a.woocommerce-review-link",function(){return s(".reviews_tab a").trigger("click"),!0}).on("init","#rating",function(){s("#rating").hide().before('<p class="stars">\t\t\t\t\t\t<span>\t\t\t\t\t\t\t<a class="star-1" href="#">1</a>\t\t\t\t\t\t\t<a class="star-2" href="#">2</a>\t\t\t\t\t\t\t<a class="star-3" href="#">3</a>\t\t\t\t\t\t\t<a class="star-4" href="#">4</a>\t\t\t\t\t\t\t<a class="star-5" href="#">5</a>\t\t\t\t\t\t</span>\t\t\t\t\t</p>')}).on("click","#respond p.stars a",function(){var t=s(this),e=s(this).closest("#respond").find("#rating"),i=s(this).closest(".stars");return e.val(t.text()),t.siblings("a").removeClass("active"),t.addClass("active"),i.addClass("selected"),!1}).on("click","#respond #submit",function(){var t=s(this).closest("#respond").find("#rating"),e=t.val();if(0<t.length&&!e&&"yes"===wc_single_product_params.review_rating_required)return window.alert(wc_single_product_params.i18n_required_rating_text),!1}),s(".wc-tabs-wrapper, .woocommerce-tabs, #rating").trigger("init");var e=function(t,e){this.$target=t,this.$images=s(".woocommerce-product-gallery__image",t),0===this.$images.length?this.$target.css("opacity",1):(t.data("product_gallery",this),this.flexslider_enabled="function"==typeof s.fn.flexslider&&wc_single_product_params.flexslider_enabled,this.zoom_enabled="function"==typeof s.fn.zoom&&wc_single_product_params.zoom_enabled,this.photoswipe_enabled="undefined"!=typeof PhotoSwipe&&wc_single_product_params.photoswipe_enabled,e&&(this.flexslider_enabled=!1!==e.flexslider_enabled&&this.flexslider_enabled,this.zoom_enabled=!1!==e.zoom_enabled&&this.zoom_enabled,this.photoswipe_enabled=!1!==e.photoswipe_enabled&&this.photoswipe_enabled),1===this.$images.length&&(this.flexslider_enabled=!1),this.initFlexslider=this.initFlexslider.bind(this),this.initZoom=this.initZoom.bind(this),this.initZoomForTarget=this.initZoomForTarget.bind(this),this.initPhotoswipe=this.initPhotoswipe.bind(this),this.onResetSlidePosition=this.onResetSlidePosition.bind(this),this.getGalleryItems=this.getGalleryItems.bind(this),this.openPhotoswipe=this.openPhotoswipe.bind(this),this.flexslider_enabled?(this.initFlexslider(e.flexslider),t.on("woocommerce_gallery_reset_slide_position",this.onResetSlidePosition)):this.$target.css("opacity",1),this.zoom_enabled&&(this.initZoom(),t.on("woocommerce_gallery_init_zoom",this.initZoom)),this.photoswipe_enabled&&this.initPhotoswipe())};e.prototype.initFlexslider=function(t){var e=this.$target,i=this,t=s.extend({selector:".woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image",start:function(){e.css("opacity",1)},after:function(t){i.initZoomForTarget(i.$images.eq(t.currentSlide))}},t);e.flexslider(t),s(".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image:eq(0) .wp-post-image").one("load",function(){var i=s(this);i&&setTimeout(function(){var t=i.closest(".woocommerce-product-gallery__image").height(),e=i.closest(".flex-viewport");t&&e&&e.height(t)},100)}).each(function(){this.complete&&s(this).trigger("load")})},e.prototype.initZoom=function(){this.initZoomForTarget(this.$images.first())},e.prototype.initZoomForTarget=function(t){if(!this.zoom_enabled)return!1;var e,i=this.$target.width(),o=!1;s(t).each(function(t,e){if(s(e).find("img").data("large_image_width")>i)return!(o=!0)}),o&&(e=s.extend({touch:!1},wc_single_product_params.zoom_options),"ontouchstart"in document.documentElement&&(e.on="click"),t.trigger("zoom.destroy"),t.zoom(e),setTimeout(function(){t.find(":hover").length&&t.trigger("mouseover")},100))},e.prototype.initPhotoswipe=function(){this.zoom_enabled&&0<this.$images.length&&(this.$target.prepend('<a href="#" class="woocommerce-product-gallery__trigger">🔍</a>'),this.$target.on("click",".woocommerce-product-gallery__trigger",this.openPhotoswipe),this.$target.on("click",".woocommerce-product-gallery__image a",function(t){t.preventDefault()}),this.flexslider_enabled)||this.$target.on("click",".woocommerce-product-gallery__image a",this.openPhotoswipe)},e.prototype.onResetSlidePosition=function(){this.$target.flexslider(0)},e.prototype.getGalleryItems=function(){var t=this.$images,r=[];return 0<t.length&&t.each(function(t,e){var i,o,a,e=s(e).find("img");e.length&&(a=e.attr("data-large_image"),i=e.attr("data-large_image_width"),o=e.attr("data-large_image_height"),a={alt:e.attr("alt"),src:a,w:i,h:o,title:e.attr("data-caption")?e.attr("data-caption"):e.attr("title")},r.push(a))}),r},e.prototype.openPhotoswipe=function(t){t.preventDefault();var e=s(".pswp")[0],i=this.getGalleryItems(),t=s(t.target),t=0<t.closest(".woocommerce-product-gallery__trigger").length?this.$target.find(".flex-active-slide"):t.closest(".woocommerce-product-gallery__image"),t=s.extend({index:s(t).index(),addCaptionHTMLFn:function(t,e){return t.title?(e.children[0].textContent=t.title,!0):(e.children[0].textContent="",!1)}},wc_single_product_params.photoswipe_options);new PhotoSwipe(e,PhotoSwipeUI_Default,i,t).init()},s.fn.wc_product_gallery=function(t){return new e(this,t||wc_single_product_params),this},s(".woocommerce-product-gallery").each(function(){s(this).trigger("wc-product-gallery-before-init",[this,wc_single_product_params]),s(this).wc_product_gallery(wc_single_product_params),s(this).trigger("wc-product-gallery-after-init",[this,wc_single_product_params])})});