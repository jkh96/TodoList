function dailyTask() {
    // Grab Content container
    let htmlContainer = document.getElementById('content')

    // Home page active class 
    let navDT = document.querySelector('.nav-DT')
    navDT.classList.add('active')


    // Create Main Elements
    const main = document.createElement('main')
    const mainContainerFluid = document.createElement('div')

    // create Main classes
    mainContainerFluid.classList.add('container-fluid')

    // Append Main Elements to container
    htmlContainer.appendChild(main)
    main.appendChild(mainContainerFluid)


    // Create Welcome User Section
    const welcomeRowDiv = document.createElement('div')
    const welcomeColDiv = document.createElement('div')
    const welcomeH1 = document.createElement('h1')
    const welcomeHR = document.createElement('hr')

    // Create Welcome User Classes
    welcomeRowDiv.classList.add('row', 'mb-4')
    welcomeColDiv.classList.add('col', 'col-12', 'DT-div', 'text-light')

    // Create Welcome User Text
    welcomeH1.innerText = 'Daily Task'

    // Appened  Welcome section to Main Container
    mainContainerFluid.appendChild(welcomeRowDiv)
    welcomeRowDiv.appendChild(welcomeColDiv)
    welcomeColDiv.appendChild(welcomeH1)
    welcomeColDiv.appendChild(welcomeHR)


    // Create Elements
    const mainRowDiv = document.createElement('div')
    const mainColdiv = document.createElement('div')
    const dtInfoColDiv = document.createElement('div')
    const dtInfoCardDiv = document.createElement('div')
    const dtCardBody = document.createElement('div')
    const dtCardTilte = document.createElement('div')
    const dtCardTitleP = document.createElement('p')
    const dtCardTitleHR = document.createElement('hr')
    const dtCardTextDiv = document.createElement('div')
    const dtCardTextP = document.createElement('p')
    const dtCardTextP2 = document.createElement('p')
    const dtAddBtnDiv = document.createElement('div')
    const dtAddBtnI = document.createElement('i')

    // Add Classes
    mainRowDiv.classList.add('row')
    mainColdiv.classList.add('col-6', 'd-flex', 'flex-row', 'flex-wrap', 'daily-task-container')
    dtInfoColDiv.classList.add('col-6')
    dtInfoCardDiv.classList.add('card', 'rct-info')
    dtCardBody.classList.add('card-body')
    dtCardTilte.classList.add('card-title')
    dtCardTextDiv.classList.add('card-text')
    dtAddBtnDiv.classList.add("bc-info", 'position-absolute', 'bottom-0', 'end-0', 'pe-5', 'pb-2')
    dtAddBtnI.classList.add('bi', 'bi-plus-circle-fill', 'btn-add')

    // add styles
    dtAddBtnI.style.fontSize = '3rem'

    // Add Text
    dtCardTitleP.innerText = 'Daily Task Description'
    dtCardTextP.innerText = `Daily Task are a list of things that you need to take care of through out your day. 
    You can set up those task here and view them to make sure you are keeping track of your task.`
    dtCardTextP2.innerText = `In order to make sure you are keeping up with daily task, please make sure you mark them with
    the current day.`

    // Append DT elements to body
    mainContainerFluid.appendChild(mainRowDiv)
    mainRowDiv.appendChild(mainColdiv)
    mainRowDiv.appendChild(dtInfoColDiv)
    dtInfoColDiv.appendChild(dtInfoCardDiv)
    dtInfoCardDiv.appendChild(dtCardBody)
    dtCardBody.appendChild(dtCardTilte)
    dtCardTilte.appendChild(dtCardTitleP)
    dtCardTilte.appendChild(dtCardTitleHR)
    dtCardBody.appendChild(dtCardTextDiv)
    dtCardTextDiv.appendChild(dtCardTextP)
    dtCardTextDiv.appendChild(dtCardTextP2)
    dtInfoColDiv.appendChild(dtAddBtnDiv)
    dtAddBtnDiv.appendChild(dtAddBtnI)
}

export {dailyTask}