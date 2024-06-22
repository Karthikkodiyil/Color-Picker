let colorPicker = document.querySelector(".colorpicker")
let h1 = document.querySelector("h1")
let main = document.querySelector(".main")



colorPicker.addEventListener('input',()=>{
    h1.innerHTML = colorPicker.value
    main.style.backgroundColor = colorPicker.value
})