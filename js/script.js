
$(document).ready(function() {
  new WOW().init();

  $(".inputs").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.inputs').focus();
    }
});



/////////////////////////// toggle check faq //////////////////////
      // http://stackoverflow.com/a/9762070/938089?why-is-the-selector-not-working

      $(".accordion__title").click(function(event) {
        var radio_selector = 'input[type="radio"]',
            $radio;
    
        // Ignore the event when the radio input is clicked.
        if (!$(event.target).is(radio_selector)) {
            $radio = $(this).find(radio_selector);
            // Prevent the event to be triggered
            // on another element, for the same click
            event.stopImmediatePropagation();
            // We manually check the box, so prevent default
            event.preventDefault();
            $radio.prop('checked', !$radio.is(':checked'));
        }
    });
    $(".accordion__title input").on('change click', function(event) {
        // The change event only fires when the checkbox state changes
        // The click event always fires
        
        // When the radio is already checked, this event will fire only once,
        // resulting in an unchecked checkbox.
        // When the radio is not checked already, this event fires twice
        // so that the state does not change
        this.checked = !this.checked;
    })


 ///////// ** upload images ** /////////



 ImgUpload();


 function ImgUpload() {
     var imgWrap = "";
     var imgArray = [];

     $('.upload__inputfile').each(function() {
         $(this).on('change', function(e) {
             imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
             var maxLength = $(this).attr('data-max_length');

             var files = e.target.files;
             var filesArr = Array.prototype.slice.call(files);
             var iterator = 0;
             filesArr.forEach(function(f, index) {

                 if (!f.type.match('image.*')) {
                     return;
                 }

                 if (imgArray.length > maxLength) {
                     return false
                 } else {
                     var len = 0;
                     for (var i = 0; i < imgArray.length; i++) {
                         if (imgArray[i] !== undefined) {
                             len++;
                         }
                     }
                     if (len > maxLength) {
                         return false;
                     } else {
                         imgArray.push(f);

                         var reader = new FileReader();
                         reader.onload = function(e) {
                             var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                             imgWrap.append(html);
                             iterator++;
                         }
                         reader.readAsDataURL(f);
                     }
                 }
             });
         });
     });

     $('body').on('click', ".upload__img-close", function(e) {
         var file = $(this).parent().data("file");
         for (var i = 0; i < imgArray.length; i++) {
             if (imgArray[i].name === file) {
                 imgArray.splice(i, 1);
                 break;
             }
         }
         $(this).parent().parent().remove();
     });
 }

 $('input[type=file]').change(function() {
     var filename = $(this).val().split('\\').pop();
     var idname = $(this).attr('id');
     console.log($(this));
     console.log(filename);
     console.log(idname);
     $('label').find('span').html(filename);

 });




 ///////////////////// enable input when check /////////////////////////////
 document.getElementById('sunday').onchange = function() {
    document.getElementById('date-1').disabled = !this.checked;
    document.getElementById('date-2').disabled = !this.checked;
 
};

document.getElementById('monday').onchange = function() {
    document.getElementById('date-3').disabled = !this.checked;
    document.getElementById('date-4').disabled = !this.checked;
 
};

document.getElementById('tuesday').onchange = function() {
    document.getElementById('date-5').disabled = !this.checked;
    document.getElementById('date-6').disabled = !this.checked;
 
};

document.getElementById('wednesday').onchange = function() {
    document.getElementById('date-7').disabled = !this.checked;
    document.getElementById('date-8').disabled = !this.checked;
 
};

document.getElementById('thursday').onchange = function() {
    document.getElementById('date-9').disabled = !this.checked;
    document.getElementById('date-10').disabled = !this.checked;
 
};

document.getElementById('friday').onchange = function() {
    document.getElementById('date-11').disabled = !this.checked;
    document.getElementById('date-12').disabled = !this.checked;
 
};

document.getElementById('saturday').onchange = function() {
    document.getElementById('date-13').disabled = !this.checked;
    document.getElementById('date-14').disabled = !this.checked;
 
};


//////////////////////// delete record ///////////////////////////////////
$(document).on('click', '.delete-btn', function() {
    $(this).parent().remove();
});
//////////////// stepper register form ////////////////////////////

var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn'),
  		  allPrevBtn = $('.prevBtn');

  allWells.hide();

  navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
              $item = $(this);

      if (!$item.hasClass('disabled')) {
          navListItems.removeClass('btn-primary').addClass('btn-default');
          $item.addClass('btn-primary');
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
      }
  });
  
  allPrevBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

          prevStepWizard.removeAttr('disabled').trigger('click');
  });

  allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

      $(".form-group").removeClass("has-error");
      for(var i=0; i<curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
      }

      if (isValid)
          nextStepWizard.removeAttr('disabled').trigger('click');
  });

  $('div.setup-panel div a.btn-primary').trigger('click');


  /*| For Demonstration Purposes
This is a test to prove that this pseudo-<select> functions like 
a real <select> by logging the value of the selected pseudo-
<option> to the console.
*/

var xC = document.forms.container;
var xE = xC.elements;
var vR = xE.rad;

xC.onchange = function() {
  console.log(vR.value);
}


});

  
 
   





  
