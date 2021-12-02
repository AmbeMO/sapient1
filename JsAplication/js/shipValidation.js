let inputs = document.querySelectorAll('input[data-rule]');
let formAddress = document.querySelector('.formAddress');
let formPhone = document.querySelector('.formPhone');

let sbm = document.querySelector('.sbm');

for(let input of inputs){
    input.addEventListener('blur', function(){

        let rule = this.dataset.rule;
        console.log(rule)
        let value = this.value;
        let check;

        switch (rule) {
            case 'address':
                check =/^[a-z0-9_-]{6,16}$/.test(value)
                break;
            case 'phone':
                check = /^\+380\d{3}\d{2}\d{2}\d{2}$/.test(value);
                console.log('Insert +380 too :(')
                break;
        }

        this.classList.remove('invalid');
        this.classList.remove('valid');
        if (check) {
            this.classList.add('valid');
        }else{
            this.classList.add('invalid');
        }

        if(formAddress.value && formPhone.value && formPhone.classList.contains('valid') && formAddress.classList.contains('valid')){
            sbm.onclick = window.location.href ='../payment.html'
        }else{
            console.log('input all fields')
        }
    });
}