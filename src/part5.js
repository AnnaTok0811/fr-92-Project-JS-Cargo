// Block5-Accordion
const accordionContent = document.querySelectorAll(".acc-bl5");

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".head-acc");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let answer = item.querySelector(".answer-bl5");
        if(item.classList.contains("open")){
            answer.style.height = `${answer.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("arrow-circle-closed", "arrow-circle-open");
        }else{
            answer.style.height = "0px";
            item.querySelector("i").classList.replace("arrow-circle-open", "arrow-circle-closed");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header

    let question=item.querySelector('.head-acc');
    if(item.classList.contains("open")){
        question.style.color="black";
        question.style.backgroundColor="white";
    }else{
        question.style.color="white"
        question.style.backgroundColor="#363A4d";
    }
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");
            let des = item2.querySelector(".answer-bl5");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("arrow-circle-open", "arrow-circle-closed");
        }
    })
}



// Block5-Form
const formBlcFive=document.getElementById('formBlc5');

// Валидация
const nameUserBlc5=formBlcFive.elements.nameUserBlc5;
function validateName(input){
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
const phoneUserBlc5=formBlcFive.elements.phoneUserBlc5;
function validatePhone(input){
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
const emailUserBlc5=formBlcFive.elements.emailUserBlc5;
function validateEmail(input){
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
const messageUserBlc5=formBlcFive.elements.messageUserBlc5;
function validateMsg(input){
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
    const errorMsgPar = parentElement.querySelector(".block5_form_errormsg");
    errorMsgPar.textContent = message;
    errorMsgPar.classList.remove("block5_form_errormsg_none");
}
function closeErrorMsg(input){
    const parentElement = input.parentElement;
    const errorMsgPar = parentElement.querySelector(".block5_form_errormsg");
    errorMsgPar.textContent = '';
    errorMsgPar.classList.add("block5_form_errormsg_none");
    return true;
}

const sabMessage = document.getElementById("block5_form_submitted");

function formSubmittedMsg(input){
    sabMessage.classList.remove("block5_form_submitted_none");
    sabMessage.classList.add("block5_form_submitted");
    formBlcFive.classList.add("block5_form_none");
}

nameUserBlc5.addEventListener('input', () => validateName(nameUserBlc5));
phoneUserBlc5.addEventListener('input', () => validatePhone(phoneUserBlc5));
emailUserBlc5.addEventListener('input', () => validateEmail(emailUserBlc5));
messageUserBlc5.addEventListener('input', () => validateMsg(messageUserBlc5));

function retrieveFormValue(event){
event.preventDefault();
    const fields=document.querySelectorAll('.input-blc5, .inputmessage-blc5');
    const values={};
    fields.forEach(field => {
        const {name, value}=field;
        values[name]=value;
});
console.log(values)
formBlcFive.reset();
}

const btnFormBlc5 = document.getElementById("button-blc5");
btnFormBlc5.addEventListener('click', (input) => {
    formBlcFive.addEventListener("submit", (e) => {
            e.preventDefault();
            validateName(nameUserBlc5);
                validatePhone(phoneUserBlc5);
                validateEmail(emailUserBlc5);
                validateMsg(messageUserBlc5);
            
            if (validateName(nameUserBlc5) && validatePhone(phoneUserBlc5) && validateEmail(emailUserBlc5)&&validateMsg(messageUserBlc5)) {
                formSubmittedMsg(input)
                retrieveFormValue(input)       
            }
        })
    })






