const lightDarkButton = document.getElementById('lightDarkButton');
let dark = true;


function lightDark(){

    if(!dark){
        document.documentElement.style.setProperty('--backgroundcolor', 'rgb(53, 53, 53)');
        document.documentElement.style.setProperty('--fontcolor', 'rgb(185, 185, 185)');
        document.documentElement.style.setProperty('--bodybackgroundcolor', 'rgb(29, 29, 29)');
        document.documentElement.style.setProperty('--linsenPodcolor', 'rgb(150, 150, 150)');
        document.documentElement.style.setProperty('--backgroundcolorHover', 'rgb(66, 66, 66)');
        dark = true;
        lightDarkButton.innerText = "switch to lightmode";
    }
    else{
        document.documentElement.style.setProperty('--backgroundcolor', 'rgb(202, 202, 202)');
        document.documentElement.style.setProperty('--fontcolor', 'rgb(29, 29, 29)');
        document.documentElement.style.setProperty('--bodybackgroundcolor', 'rgb(185, 185, 185)');
        document.documentElement.style.setProperty('--linsenPodcolor', 'rgba(29, 29, 29, 0.75)');
        document.documentElement.style.setProperty('--backgroundcolorHover', 'rgb(219, 219, 219)');
        dark = false;
        lightDarkButton.innerText = "switch to darkmode";
    }
}
