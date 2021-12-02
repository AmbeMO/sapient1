// let phone = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
// let name = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
// let visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
// let master = /^5[1-5][0-9]{14}$/;
// let valid = /\d{2}[/]\d{2}/;
// let cvv = /\d{3}/;

let inputs = document.querySelectorAll('input[data-rule]');
let formName = document.querySelector('.formName');
let formCard = document.querySelector('.formCard');
let formMonth = document.querySelector('.formMonth');
let formCvv = document.querySelector('.formCvv');

let sbm = document.querySelector('.sbm')

for(let input of inputs) {
   input.addEventListener('blur', function(){
      let rule = this.dataset.rule;
      let value = this.value;
      let check;
      let cardNum;


      let topLeftCardName = document.querySelector('.img_top-left');
      let bottomLeftCardName = document.querySelector('.img_bottom-left');
      let centerCardName = document.querySelector('.img_centered');
      let bottomRightCardName = document.querySelector('.img_bottom-right');
      let bottomCenterCardName = document.querySelector('.img_bottom-center');


      switch (rule) {
         case 'name':
            check =  /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(value);
            // console.log(formName.value);
            bottomLeftCardName.innerHTML = formName.value;
            break;
         case 'card':
            if(check = /^4[0-9]{12}(?:[0-9]{3})?$/.test(value)){
               cardNum = 'Visa';
               topLeftCardName.innerHTML = cardNum;
               centerCardName.innerHTML = formCard.value;
            }else if(check = /^5[1-5][0-9]{14}$/.test(value)){
               cardNum = 'Master card'
               console.log(cardNum)
               topLeftCardName.innerHTML = cardNum;
               centerCardName.innerHTML = formCard.value;
            }else{
               console.log('error')
            }
            break;
         case 'month':
            check = /^\d{2}[/]\d{2}$/.test(value)
             bottomRightCardName.innerHTML = formMonth.value;
            break;
         case 'cvv':
            check = /^\d{3}$/.test(value)
             bottomCenterCardName.innerHTML = formCvv.value;
            break;
      }

      this.classList.remove('invalid');
      this.classList.remove('valid');
      if (check) {
         this.classList.add('valid');
      }else{
         this.classList.add('invalid');
      }
      if(formCvv.value && formMonth.value && formCard.value && formName.value && formCvv.classList.contains('valid') && formName.classList.contains('valid') && formCard.classList.contains('valid') && formMonth.classList.contains('valid')){
         console.log('nice')
         sbm.onclick = function (){
            alert('Оплата успішна')
      }
      }else{
         console.log('input all fields')
      }

   });
}





