import {home} from '../src/home.js'
import {dailyTask} from '../src/dailytask.js'
import {taskcreator} from '../src/taskcreator.js'
function btnSetup() {
    const btnDT = document.querySelector('.nav-DT')
    const btnHome = document.querySelector('.nav-Home')


    function deleteTab() {
        let x = document.querySelector('main')
         x.remove()
         btnHome.classList.remove('active')
         btnDT.classList.remove('active')
     };

     function homePage() {
         deleteTab()
         home()
     }

     function dailypage() {
         deleteTab()
         dailyTask()
         const btnAdd = document.querySelector('.btn-add')
         btnAdd.addEventListener('click', taskcreator)
     }

     btnDT.addEventListener('click', dailypage)
     btnHome.addEventListener('click', homePage)
}

export {btnSetup}