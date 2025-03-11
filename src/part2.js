//contact form
export const formPriceCalc = document.forms.priceCalc;
const categoryCargo = formPriceCalc.elements.category;
const weightCargo = formPriceCalc.elements.weight;
const priceCargo = formPriceCalc.elements.price;
const volumeCargo = formPriceCalc.elements.volume;
export const contactCustName = formPriceCalc.elements.customerName;
export const contactCustPhone = formPriceCalc.elements.customerPhone;
export const contactCustEmail = formPriceCalc.elements.customerEmail;
export const contactCustMsg = formPriceCalc.elements.userMsg;
export const btnCalcCargo = document.getElementById("part2_calc_button");

const priceCalcConf = document.getElementById("section2_formcalc_submitted");

export function validateName(input){
    const regex = /^[a-zA-Zа-яА-ЯЁё\s]+$/;
    const correctValue = input.value.trim();
    if (correctValue === ''){
        showErrorMsg(input, 'Введите имя')
        return;
     }
    if (regex.test(correctValue) === false) {
        showErrorMsg(input, "Имя должно состоять из букв и пробелов");
        return;
    } 
    closeErrorMsg(input);
    return true;
}

export function validateEmail(input){
    const correctValue = input.value.trim();
    const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (correctValue === '') {
        showErrorMsg(input, "Введите электронную почту");
        return;
    }
    if (regex.test(correctValue) === false) {
        showErrorMsg(input, "Неверный формат электронной почты");
        return;
    }
    closeErrorMsg(input);
    return true;
}

export function validatePhone(input){
    const correctValue = input.value.trim();
    const regex = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/;
    if (correctValue === ''){
        showErrorMsg(input, "Введите номер телефона")
        return;
    }
    if (regex.test(correctValue) === false){
        showErrorMsg(input, "Введите корректный номер телефона");
        return;
    }
    closeErrorMsg(input);
    return true;
}

export function validateMsg(input){
    
    const correctValue = input.value.trim();
    if (correctValue === ''){
        showErrorMsg(input, "Введите сообщение")
        return;
    }
    closeErrorMsg(input);
    return true;
}

function showErrorMsg(input, message){
    const parentElement = input.parentElement;
    const errorMsgPar = parentElement.querySelector(".part2_calc_errormsg");
    errorMsgPar.textContent = message;
    errorMsgPar.classList.remove("part2_calc_errormsg_none");
}

function closeErrorMsg(input){
    const parentElement = input.parentElement;
    const errorMsgPar = parentElement.querySelector(".part2_calc_errormsg");
    errorMsgPar.textContent = '';
    errorMsgPar.classList.add("part2_calc_errormsg_none");
    return true;
}

function validateAll(inputs){
    const inputErr = inputs.filter((input) => input.value.trim() === '');
    if(inputErr.length === 0) {
        btnCalcCargo.disabled = false;
        return;
    }
}
export function formSubmittedMsg(input){
    
    priceCalcConf.classList.remove("section2_formcalc_submitted_none");
    priceCalcConf.classList.add("section2_formcalc_submitted");
    formPriceCalc.classList.add("part2_formcalc_none");
}

contactCustName.addEventListener('input', () => validateAll([contactCustName, contactCustPhone, contactCustEmail, contactCustMsg]));
contactCustPhone.addEventListener('input', () => validateAll([contactCustName, contactCustPhone, contactCustEmail, contactCustMsg]));
contactCustEmail.addEventListener('input', () => validateAll([contactCustName, contactCustPhone, contactCustEmail, contactCustMsg]));
contactCustMsg.addEventListener('input', () => validateAll([contactCustName, contactCustPhone, contactCustEmail, contactCustMsg]));

//volume calculator
export const formVol = document.forms.section2_modal_calcVolume;
export const buttonVol = document.getElementById("section2_modal_calcVolume_btn");
export const widthVol = document.getElementById("section2_modal_width");
export const lengthVol = document.getElementById("section2_modal_length1");
export const heightVol = document.getElementById("section2_modal_height");
const optionVolUnit = formVol.elements.units;



export function calcVolume(e){
    e.preventDefault();
    
    const correctValueWidth = +widthVol.value.trim();
    const correctValueLength = +lengthVol.value.trim();
    const correctValueHeight = +heightVol.value.trim();
    console.log(correctValueLength)
    const volumeFinal = Number(correctValueWidth * correctValueLength * correctValueHeight);

    if (widthVol.value.trim() === '' || lengthVol.value.trim() === '' || heightVol.value.trim() === '' ) {
        console.log("please enter a number!");
        document.getElementById("section2_modal_calcVolume_item_errormsg").classList.add("section2_modal_calcVolume_item_errormsg");
        document.getElementById("section2_modal_calcVolume_item_errormsg").textContent = "Пожалуйста, заполните все поля!";
        return;
    }

    else {
        
        document.getElementById("section2_modal_calcVolume_item_errormsg").textContent = "";
        console.log("correct!");
        console.log(correctValueWidth * correctValueLength * correctValueHeight);
        //document.getElementById("section2_modal_calcVolume_result").textContent = volumeFinal;
        if (optionVolUnit.value === 'mm') {
            document.getElementById("section2_modal_calcVolume_result").textContent = volumeFinal.toFixed(2) + ' мм3';
        }
        if (optionVolUnit.value === 'cm') {
            document.getElementById("section2_modal_calcVolume_result").textContent = volumeFinal.toFixed(2) + ' см3';
        }
        if (optionVolUnit.value === 'meter') {
            document.getElementById("section2_modal_calcVolume_result").textContent = volumeFinal.toFixed(2) + ' м3';
        }
        return true;
    }
   


}

//Modal window of volume calculator
const modalWindow = document.getElementById("section2_myModal");
const openModalBtn = document.getElementById("part2_calc_volumecalc");
const spanCloseModal = document.querySelector(".section2_close");
// When the user clicks the button, open the modal 
openModalBtn.addEventListener('click', displayModal);
function displayModal() {
    formVol.reset();
    modalWindow.style.display = "block";
    document.getElementById("section2_modal_calcVolume_result").textContent = '';
}
// When the user clicks on <span> (x), close the modal
spanCloseModal.addEventListener('click', closeModal)
function closeModal() {
    modalWindow.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', closeModalGeneral)
function closeModalGeneral(event) {
  if (event.target == modalWindow) {
    modalWindow.style.display = "none";
  }
}

// currency calculator
export const buttonCurrencyCalc = document.getElementById("currency_exch_calc_calc");

export function getCurrency(e){
    e.preventDefault();
    const formCurrency = document.forms.currency_exch_calc;
    const currency_from_input = formCurrency.elements.currency_from_input.value;
    const currency_to_input = formCurrency.elements.currency_to_input.value;
    const currency_input_amount = formCurrency.elements.currency_input_amount.value;
    const currency_input_num = +currency_input_amount;
    const currency_exch_error = document.getElementById("currency_exch_calc_errormsg");
    const currency_exch_sum = document.getElementById("currency_exch_calc_final_sum");

    fetch(`https://hexarate.paikama.co/api/rates/latest/${currency_from_input}?target=${currency_to_input}`)
    .then((response) => response.json())
    .then((data) => {
        const rateNumber = JSON.parse(data.data.mid);
        const result = currency_input_num * rateNumber;
        const regex = /^-?\d*\.?\d+$/;
        if (regex.test(currency_input_amount) === false){
            currency_exch_error.innerHTML = "Пожалуйста, проверьте правильность введенных данных";
            currency_exch_sum.textContent = "";
        } else {
             currency_exch_sum.textContent = result.toFixed(2) + ' ' + currency_to_input.toUpperCase(); 
        currency_exch_error.innerHTML = "";
        }

    })
    .catch((error) => {
        currency_exch_error.innerHTML = "Пожалуйста, проверьте правильность введенных данных";
        currency_exch_sum.textContent = "";
    }
        )


}

