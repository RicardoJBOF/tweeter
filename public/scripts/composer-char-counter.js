//COUNT CHARACTERS USING AJAX AND JQUERY
$(document).ready(() => {
  $("textarea").on("keyup", function () {
    const current = 140 - this.value.length;
    let counter = $(this)
      .parent()
      .siblings(".btn-n-counter")
      .children("div")
      .children(".counter")
      .text(current);
    current < 0
      ? counter.addClass("red-counter")
      : counter.removeClass("red-counter");
  });
});
