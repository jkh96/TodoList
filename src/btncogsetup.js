function btnCogSetup() {
    // Btn  test setup to show and hide settings display

    const btnsettings = document.querySelector('.settings')
    const btncog = document.querySelector('.fa-cog')
    btncog.addEventListener('click', setshow)

    function setshow() {
        if (btnsettings.classList.contains('hidden')) {
            btnsettings.classList.remove('hidden') 
        }

        if (btnsettings.classList.contains('hide-temp')) {
            btnsettings.classList.remove('hide-temp') 
        }

        if (themeContainer.classList.contains('theme-visible-ontop')) {
            themeContainer.classList.remove('theme-visible-ontop')
        }

        if (themeContainer.classList.contains('theme-visible')){
            themeContainer.classList.remove('theme-visible')
        }
        btnsettings.classList.add('shown')
        btncog.removeEventListener('click', setshow)
        btncog.addEventListener('click', sethide)
    }

    function sethide() {
        if (btnsettings.classList.contains('hide-temp')) {
            btnsettings.classList.remove('hide-temp') 
        }

        if (themeContainer.classList.contains('theme-visible')){
            themeContainer.classList.add('theme-visible-ontop')
        }

        btnsettings.classList.remove('shown')
        btnsettings.classList.add('hidden')
        btncog.removeEventListener('click', sethide)
        btncog.addEventListener('click', setshow)
    }


    // Btn setup for color theme to show and hide display
    const themeContainer = document.querySelector('.themes-color')
    const themeDisplayBtn = document.querySelector('.themes')
    themeDisplayBtn.addEventListener('click', displayTheme)
    const ThemeDisplayOffbtn = document.querySelector('.bi-arrow-left-circle-fill')
    ThemeDisplayOffbtn.addEventListener('click', displayThemeOff)

    function displayTheme() {
        themeContainer.classList.add('theme-visible')
        btnsettings.classList.add('hide-temp')
    }

    function displayThemeOff() {
        themeContainer.classList.remove('theme-visible')
        btnsettings.classList.remove('hide-temp')
    }




    // Detect all clicks on the document
    window.addEventListener("click", function(event) {
        // If user clicks inside the element, do nothing
        if (event.target.closest(".settings") || event.target.closest('.fa-cog')
        || event.target.closest('.themes-color') ) 
            return;

        // If user clicks outside the element, hide it!
        sethide();
    });
}

export {btnCogSetup}