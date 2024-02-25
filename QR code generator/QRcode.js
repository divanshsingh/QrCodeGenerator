const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let inputElement = document.querySelector('#input')
const btn = document.querySelector('.btn')
const imgBox = document.querySelector('#imgbox')
const qrImg = document.querySelector('#qrimg')
const input = document.querySelector('.container input')

function qrCode (textOrUrl) {
    if(textOrUrl.length > 0){
    qrImg.src = apiUrl + `${textOrUrl}`
    imgBox.classList.add('show-img')
    inputElement.value = ""
} else {
    inputElement.classList.add('error');
    setTimeout( ()=> {
        inputElement.classList.remove('error')
    }, 500)
}
}

input.addEventListener('keyup', (e)=>{
    if(e.keyCode == 13){
    qrCode(inputElement.value)}
})

btn.addEventListener('click', ()=>{
    qrCode(inputElement.value)
})