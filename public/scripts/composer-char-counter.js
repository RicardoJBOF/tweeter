//alert('Hello');

$(document).ready(function () {
  $("textarea").on("keydown", function () {
    
    let test = this.value.length;
    let currentCara = 140 - test;
    let counter = $(this).parent().siblings('.btn-n-counter').children('div').children(".counter");

    if(currentCara < 0) {
      counter.addClass('redCounter')
    } else {
      counter.removeClass('redCounter')
    }
    counter.text(currentCara);

    
  });
});


// $(document).ready(function () {

//   $("#tweet-text").on("keydown", function () {
//     $("#counter").text(this.value.length);

//   });

// });