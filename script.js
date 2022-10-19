const container=document.querySelector('.container'),
qrInput=container.querySelector('.form input'),
generateBtn=container.querySelector('.form button'),
qrImage=container.querySelector('.qr-code img');

generateBtn.addEventListener('click',()=>{
    let qrValue=qrInput.value;
    if(!qrValue){
        return;     // If input is empty than return from here
    }
    generateBtn.innerText="Generating QR Code...";
    console.log(qrValue);
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImage.addEventListener('load',()=>{
        container.classList.add("active");
        generateBtn.innerText="Generate QR Code";
    })

});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value) {
        container.classList.remove("active");
    }
});