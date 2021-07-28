import {home} from '../src/home.js'
import {dailyTask} from '../src/dailytask.js'
import {taskcreator} from '../src/taskcreator.js'
import {getBookInfo} from '../src/taskcreator.js'
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
     }

     btnDT.addEventListener('click', dailypage)
     btnHome.addEventListener('click', homePage)

     const addTaskBtn = document.querySelector('.create-task')
     addTaskBtn.addEventListener('click', getBookInfo)
}

export {btnSetup}