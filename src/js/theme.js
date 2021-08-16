const Theme = {
   LIGHT: "light-theme",
   DARK: "dark-theme",
 };
 
 const sliderSwitch = document.querySelector("#theme-switch-toggle");
 
 const bodyBg = document.querySelector("body");
 
 sliderSwitch.addEventListener("change", switcherBgColor);

  function switcherBgColor() {
      const check = sliderSwitch.checked;
      if (check) {
        bodyBg.classList.add(Theme.DARK);
        bodyBg.classList.remove(Theme.LIGHT);
          localStorage.setItem("theme", Theme.DARK);
     } else {
      bodyBg.classList.add(Theme.LIGHT);
      bodyBg.classList.remove(Theme.DARK);
          localStorage.setItem("theme", Theme.LIGHT);
     }

}

function currentTheme(){

if (localStorage.getItem("theme") === Theme.DARK) {
  return sliderSwitch.checked = 'true',
    bodyBg.classList.add(Theme.DARK);
}

}

currentTheme()
