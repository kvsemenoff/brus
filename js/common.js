

$(document).ready(function(){

    $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        $('#mask').fadeTo("slow",0.8); 
        var winH = $(window).height();
        var winW = $(window).width();
        posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement ||document.body.parentNode || document.body).scrollTop;
        $(id).css('top',  posTop+50);
        $(id).css('left', winW/2-$(id).width()/2);
        $(id).fadeIn(500); 
    });
    $('.window2 .dd-close').click(function (e) {
        e.preventDefault();
        $('#mask, .window2').hide();
        $('.window2').hide();
    }); 

    $('#mask, .an-exit__krest').click(function () {
        $('#mask').hide();
        $('.window2').hide();
    }); 
    $(".form1").submit(function() { 
        var tel = $(this).find('input[name="phone"]');
        var empty = false;
        if (tel.val() == ""){
            empty = true;
        }
        if (empty == true){
            tel.addClass("error-input");
            tel.focus();
        }else{
            var form_data = $(this).serialize(); 
            $.ajax({
                type: "POST", 
                url: "/message.php", 
                data: form_data,
                success: function() {
                    cleanTnanks(this);
                }
            });
        }
        yaCounter43608829.reachGoal ('g1'); 
        return false;
    });
    function cleanTnanks(form){
        $('input[type="text"]').removeClass("error-input");
        $("input[type=text], textarea").val("");
        $('.window').hide();
        // $('a[href=#thanks]').trigger('click');
        location = "thanks.php";
    };






    $('.az-select').each(function(){
        var select = $(this);    
        var option = select.find('select option');
        var str = '<div class="az-options">';
        select.find('option').each(function(){
            str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
        });
        str+= '</div>';
        select.html(select.html() + str);

        select.find('select').mousedown(function(){
            return false;
        });
        select.mouseup(function(){
            select.find('select').focus();
        });
        select.find('.az-options div[data-val]').click(function(){
            select.find('select').val($(this).attr('data-val'));
        });
        select.find('select').focusout(function(){
            if(!select.is(':hover')){
                select.find('.az-options').slideUp(0);
                select.removeClass('az-select-focus');
            }
        });
    });

    $(".az-select").click(function(){
        $(this).find('.az-options').slideToggle(0);
        $(this).toggleClass('az-select-focus');
    });



    $(".phone").mask("+7 (999) 999 - 99 - 99?");

    $('a[name="js-modal"]').on("click", function(e){
        e.preventDefault();
        var  id = $(this).attr('href'),
        winW = $(window).width(),
        winH = $(window).height();
        $(id).css("left", winW/2-$(id).width()/2);
        $(id).css("top", winH/2-$(id).height()/2);
        $('body').css("overflow-y", "hidden");
        $(id).fadeIn();
        $('#js-mask').fadeIn();
    });
    $('#js-mask, .db-close').on("click", function(){
        $('#js-mask').hide();
        $('.js-window').hide();
        $('body').removeAttr("style");

    });


    /*MODAL SUBMIT*/
    $('.js-submit').submit(function(){
        var phone = $(this).find('input[name="phone"]');

        if(phone.val() == ""){
          phone.focus();
          return false;
      }

      else{
          var form_data = $(this).serialize(); 
          $.ajax({
            type: "POST", 
            url: "/message.php", 
            data: form_data,
            success: function() {
              cleanTnanks(this);
          }
      });
      }
      yaCounter43608829.reachGoal ('g1'); 
      return false;
  });

    function cleanTnanks(form){
        $('.js-window').hide();
        // $('a[href=#thanks]').trigger('click');
        location = "thanks.php";
    };

    $(document).scroll(function(){
   // var heightop = $('.first-left').offset().top;
   var heightop = 100;
   var hd = $(this).scrollTop();
   if(hd > heightop){
      $('.db-num_menu2').css({
          "position" : "fixed",
          "top" : 0
      });
  }
  else if(hd < heightop){
      $('.db-num_menu2').css({
        "position" : "unset"
    });
  }

});

    $('.db-burger img').on("click", function(){
        $('.db-menu').slideToggle();
    });


});


