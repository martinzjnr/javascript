let light = document.getElementById("light");
let switchButton = document.getElementById("switch");
let isLightOn = false;

switchButton.addEventListener("click", function () {
    if (isLightOn) {
        light.src = "pic_bulboff.gif";
        switchButton.innerText = "Switch On the light";
        isLightOn = false;
      
    } else {
        light.src = "pic_bulbon.gif";
        switchButton.innerText = "Switch Off the light";
        isLightOn = true;
        
    }
})




