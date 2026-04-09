document.addEventListener("DOMContentLoaded", function () {

    const headers = document.querySelectorAll(".accordionheader");

    headers.forEach((header, index) => {
        header.addEventListener("click", function () {

            const content = this.nextElementSibling;

            // Close all
            document.querySelectorAll(".accordioncontent").forEach(item => {
                item.style.display = "none";
                item.previousElementSibling.classList.remove("active");
            });

            // Open current (toggle logic)
            if (content.style.display === "block") {
                content.style.display = "none";
                this.classList.remove("active");
            } else {
                content.style.display = "block";
                this.classList.add("active");
            }

        });
    });

});


document.addEventListener("DOMContentLoaded", function () {

  const minusBtn = document.querySelector(".minus");
  const plusBtn = document.querySelector(".plus");
  const input = document.querySelector(".qty-input");

  minusBtn.addEventListener("click", function () {
    let value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
    }
  });

  plusBtn.addEventListener("click", function () {
    let value = parseInt(input.value);
    input.value = value + 1;
  });

});



$('.pdimageslider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.pdthumbslider'
});

$('.pdthumbslider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.pdimageslider',
  focusOnSelect: true,
  vertical: true
});


document.addEventListener("DOMContentLoaded", function () {

  const btn = document.querySelector(".readmoreaction .read-more");
  const reviews = document.querySelectorAll(".reviewcard");

  let currentIndex = 0;

  btn.addEventListener("click", function () {

    // hide current
    // reviews[currentIndex].classList.remove("active");

    // next index
    currentIndex++;

    // loop back
    if (currentIndex >= reviews.length) {
      currentIndex = 0;
    }

    // show next
    reviews[currentIndex].classList.add("active");

  });

});



const input = document.getElementById("logoUpload");
const fileName = document.getElementById("fileName");

input.addEventListener("change", function () {
  fileName.textContent = this.files[0]
    ? this.files[0].name
    : "No file chosen";
});



// $(document).ready(function(){

//   // Main slider
//   $('.designyourplastictabcontentslider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.designyourplastictabsthumbnails'
//   });

//   // Thumbnail slider with custom arrows
//   $('.designyourplastictabsthumbnails').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     asNavFor: '.designyourplastictabcontentslider',
//     dots: false,
//     focusOnSelect: true,

//     prevArrow: `<button class="slick-prev custom-arrow prev-arrow">
//       <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect opacity="0.1" width="67" height="67" rx="33.5" fill="url(#paint0_linear)"/>
//         <path d="M38 24L28 34L38 44" stroke="white" stroke-opacity="0.2" stroke-width="2"/>
//         <defs>
//           <linearGradient id="paint0_linear" x1="67" y1="0" x2="36.4061" y2="80.7869" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#999999"/>
//             <stop offset="1" stop-color="#141414"/>
//           </linearGradient>
//         </defs>
//       </svg>
//     </button>`,

//     nextArrow: `<button class="slick-next custom-arrow next-arrow">
//       <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);">
//         <rect opacity="0.1" width="67" height="67" rx="33.5" fill="url(#paint0_linear2)"/>
//         <path d="M38 24L28 34L38 44" stroke="white" stroke-opacity="0.2" stroke-width="2"/>
//         <defs>
//           <linearGradient id="paint0_linear2" x1="67" y1="0" x2="36.4061" y2="80.7869" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#999999"/>
//             <stop offset="1" stop-color="#141414"/>
//           </linearGradient>
//         </defs>
//       </svg>
//     </button>`
//   });

// });


$('.toggle-switch input').on('change', function () {
  let parent = $(this).closest('.addlogotoggle');
  let target = parent.next('.addlogotoggleshow');

  if ($(this).is(':checked')) {
    target.addClass('active').slideDown();
  } else {
    target.removeClass('active').slideUp();
  }
});

// $(document).on('click', '.carboxtabs li, .pricecartbox li', function(){

//     var tabId = $(this).attr('tab-id');

//     // REAL current slide (clones ignore)
//     var currentSlide = $(this).closest('.slick-slide');

//     // Agar cloned slide hai toh original find karo
//     if(currentSlide.hasClass('slick-cloned')){
//         var index = currentSlide.data('slick-index');
//         currentSlide = $('.designyourplastictabcontentslider .slick-slide[data-slick-index="'+index+'"]:not(.slick-cloned)');
//     }

//     // Active remove (sirf isi slide me)
//     currentSlide.find('.carboxtabs li, .pricecartbox li').removeClass('active');

//     // Dono tabs sync active
//     currentSlide.find('.carboxtabs li[tab-id="'+tabId+'"], .pricecartbox li[tab-id="'+tabId+'"]')
//         .addClass('active');

//     // Sab content hide (isi slide me)
//     currentSlide.find('.noncustomizeablecards')
//         .removeClass('active')
//         .hide();

//     // Sirf selected show (IMPORTANT: children use karo, global ID nahi)
//     currentSlide.find('.noncustomizeablecards').each(function(){
//         if($(this).attr('id') === tabId){
//             $(this).addClass('active').show();
//         }
//     });

// });

// $(document).ready(function(){

//   function updateCardName() {
//     var text = $('.designyourplastictabsthumbnails .slick-current h6').text().trim();

//     // text update
//     $('.cardname').text(text);

//     // class update (text ko class format me convert karke)
//     $('.cardname')
//       .attr('class', 'cardname ' + text.toLowerCase().replace(/\s+/g, '-'));
//   }

//   // Page load pe
//   updateCardName();

//   // Slider change pe
//   $('.designyourplastictabsthumbnails').on('afterChange', function(){
//     updateCardName();
//   });

// });

document.querySelectorAll('.qty').forEach(qtyBox => {
  const input = qtyBox.querySelector('input');

  qtyBox.querySelectorAll('button')[0].onclick = () => {
    if (input.value > 1) input.value--;
  };

  qtyBox.querySelectorAll('button')[1].onclick = () => {
    input.value++;
  };
});
$(document).on('click', '.carboxtabs li, .pricecartbox li', function(){

    var tabId = $(this).attr('tab-id');

    // Active remove (global)
    $('.carboxtabs li, .pricecartbox li').removeClass('active');

    // Active add (same tab-id wale)
    $('.carboxtabs li[tab-id="'+tabId+'"], .pricecartbox li[tab-id="'+tabId+'"]')
        .addClass('active');

    // Sab content hide
    $('.noncustomizeablecards').removeClass('active').hide();

    // Sirf selected show
    $('#'+tabId).addClass('active').show();

});

$('.tabcard, .refreshicon').click(function(e){
  e.preventDefault();

  let parent = $(this).closest('.cardimagecustomize');

  let front = parent.find('.infrontcard');
  let back = parent.find('.backsidecard');

  if(front.hasClass('active')){
    front.removeClass('active');
    back.addClass('active');
  } else {
    back.removeClass('active');
    front.addClass('active');
  }

});
$('.fullname').on('input', function(){
  $('.namecarddt').text($(this).val() || 'First Name, Last Name');
});

$('.companyname').on('input', function(){
  $('.companynamecarddt').text($(this).val() || 'Company Name');
});
$(document).ready(function(){

  $(document).on('input', '.fullname', function(){
    let value = $(this).val().trim();

    $('.namecarddt').text(
      value !== '' ? value : 'First Name, Last Name'
    );
  });

  $(document).on('input', '.companyname', function(){
    let value = $(this).val().trim();

    $('.companynamecarddt').text(
      value !== '' ? value : 'Company Name'
    );
  });

});
$('input[name="option"]').on('change', function(){

  let value = $(this).val();

  // sab classes remove
  $('.cardlogo').removeClass('left right bottom center');

  // directly add class based on value
  if(value == '1') $('.cardlogo').addClass('left');
  if(value == '2') $('.cardlogo').addClass('right');
  if(value == '3') $('.cardlogo').addClass('bottom');
  if(value == '4') $('.cardlogo').addClass('center');

});