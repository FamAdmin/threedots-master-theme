$(function() {
  if (window.location.pathname.indexOf('products') > -1) {

    // Set height for thumbnails
    setTimeout(function() {
      var featuredImageHeight = $('.product_gallery_nav--left-thumbnails').prev().css('height');
      $('.product_gallery_nav--left-thumbnails').css('height', featuredImageHeight);
    }, 900)
    $(window).on('resize', function() {
      var featuredImageHeight = $('.product_gallery_nav--left-thumbnails').prev().css('height');
      $('.product_gallery_nav--left-thumbnails').css('height', featuredImageHeight);
    })

  }

  $("#banner-1489283389016 .js-caption").click(function(){
    var heroLink = $(".hero-link").attr('href');
    window.location.href = heroLink;
  })
  
  
  $('.swatch_options .swatch .swatch-element.color').click(function() {
    var color = $(this).attr('data-value');
    var colorTextDisplay = $(this).closest('.swatch_options').find('.swatch[data-option-index="0"] .option_title');
    colorTextDisplay.find('span').remove();
    colorTextDisplay.append('<span>: '+ color + '</span>');
  })

  setTimeout(function() {
    var defaultColor;
    $('.swatch_options .swatch[data-option-index="0"] input').each(function(){
      if($(this).prop('checked')) {
        defaultColor = $(this).val();
      }
    })
    $('.swatch_options .swatch[data-option-index="0"] .option_title').append('<span>: '+ defaultColor + '</span>');
  }, 500)
  
})



// $(function() {
//    $('.swatch-element').click(function() {
//   		 setTimeout(function() {
//               var colorNameNew;
//               $('.quick-shop .swatch[data-option-index="0"] input[name="option-0"]').each(function() {
//                 if ($(this).prop('checked') == true) {
//                   colorNameNew = $(this).val();
//                    $('.variantColorName').remove();
//                    $('.swatch[data-option-index="0"] .option_title').append('<span class="variantColorName">: ' + colorNameNew + '</span>');
//                   return false;
//                 }
//               });

//         }, 500);
//     });
  
//   $('.collection-matrix').on('click', '.js-quick-shop-link', function() {
//     setTimeout(function() {
//     var colorNameNew;
//         $('.quick-shop .swatch[data-option-index="0"] input[name="option-0"]').each(function() {
//           if ($(this).prop('checked') == true) {
//           	colorNameNew = $(this).val();
//             $('.variantColorName').remove();
//         $('.swatch[data-option-index="0"] .option_title').append('<span class="variantColorName">: ' + colorNameNew + '</span>');
//             return false;
//           }
//         });
  		
//     }, 500);
//   })
  
//   $('.remodal-close').click(function() {
//     $('.variantColorName').remove();
//   })
//   		// When clicking on variant color swatch, switch featured image on product page
// 		if ($(window).width() < 768) {
// 			// TODO: Color swatch Replacement
// 			$('.swatch[data-option-index="0"] .swatch-element').on('touchstart', function(e) {
// 				var colorName = $(this).attr('data-value');

// 				$('.gallery-cell').each(function() {
// 					if ($(this).attr('data-title') == colorName) {
// 						$(this).show();
// 					} else {
// 						$(this).hide();
// 					}
// 				});

// 				setTimeout(function() {
// 					$('.gallery-cell').each(function() {
// 						if ($(this).css('display') != 'none') {
// 							console.log('change it!')
// 							$('.product-main-image').attr('src', $(this).find(">:first-child").attr('src').replace('400x', '800x'));
// 							$('.zoomImg').attr('src', $(this).find(">:first-child").attr('src').replace('400x', '800x'));
// 							return false;
// 						}
// 					})
// 				}, 500);
//               $('.variantColorName').remove();
//               $('.swatch[data-option-index="0"] .option_title').append('<span class="variantColorName">: ' + colorName + '</span>');
// 			})
// 		} else {
// 			$('.swatch[data-option-index="0"] .swatch-element').click(function(e) {
// 				var colorName = $(this).attr('data-value');

// 				$('.gallery-cell').each(function() {
// 					if ($(this).find('img').attr('alt').trim() == colorName) {
// 						$(this).show();
// //                       $('.product-main-image').attr('src', $(this).find("img").attr('src').replace('400x', '800x'));
// 					} else {
// 						$(this).hide();
// 					}
// 				});

// 				setTimeout(function() {
// 					$('.gallery-cell').each(function() {
// 						if ($(this).css('display') != 'none') {
// 							console.log('change it!')
// 							$('.product-main-image').attr('src', $(this).find(">:first-child").attr('src').replace('400x', '800x'));
// 							$('.zoomImg').attr('src', $(this).find(">:first-child").attr('src').replace('400x', '800x'));
// 							return false;
// 						}
// 					})
// 				}, 500);
//               $('.variantColorName').remove();
//               $('.swatch[data-option-index="0"] .option_title').append('<span class="variantColorName">: ' + colorName + '</span>');
// 			})
// 		}
// })
jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});