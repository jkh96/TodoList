import {home} from '../src/home.js'
import {dailyTask} from '../src/dailytask.js'
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

     
     const modal = document.querySelector('.modal')
         // Detect all clicks on the document
    window.addEventListener("click", function(event) {
        // If user clicks inside the element, do nothing
        if (event.target.closest(".modal") ) 
            return;

        // If user clicks outside the element, hide it!
        document.querySelector('#Task-name').value = ""
        document.querySelector('#Description').value = ""
        document.querySelector('#Date-picked').value = ""
        document.querySelector('#priority').value = ""
    });
}

export {btnSetup}