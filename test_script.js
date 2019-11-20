start();
function start() {
  console.log('start');
  var myInt = setInterval(function () {
    var $buybuttons = $('.product-description .buybutton-credit');
    if ($buybuttons.length) {
      clearInterval(myInt);
      if($('.basket').first().find('.items-count').text() != '0'){
      return false;
      }
      $buybuttons.on('click', function (e) {
        e.preventDefault();
        var $closest = $(this).closest('.product-description');
        $closest.find('.buybutton').first().click();
        setTimeout(function () {
          $closest.find('.basketButton').first().click();
        }, 100);
        return false;
      });
    }
  }, 100);
  setTimeout(function () {
    clearInterval(myInt);
  },10000);
  if($('#paysystem-block').length){
    initInstallmentMethod();
  }

}
function initInstallmentMethod () {
  setInstallmentMethod();
  $('.delivery  .button-holder input[type="radio"]').on('change', setInstallmentMethod)
}
function setInstallmentMethod () {
  $('#paysystem-block .button-holder').not('.disabled').each(function(){
    if($(this).find('div:contains("Рассрочка онлайн")').length){
      $(this).find('label').click();
    }
  });
}
