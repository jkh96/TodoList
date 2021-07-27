function header() {
    // Grab Content container
    let htmlContainer = document.getElementById('content')

    // Create Header Elements

    const headerDiv = document.createElement('header')
    const headerH1 = document.createElement('h1')
    const i1 = document.createElement('i')
    const i2 = document.createElement('i')
    const i3 = document.createElement('i')

    // Add Classes
    headerDiv.classList.add('rct')
    i1.classList.add('fas', 'fa-bell', 'fa-2x')
    i2.classList.add('fas', 'fa-user', 'fa-2x')
    i3.classList.add('fas', 'fa-cog', 'fa-2x')

    // Create Text
    headerH1.innerText = 'Todo List'

    // Append header to container
    htmlContainer.appendChild(headerDiv)
    headerDiv.appendChild(headerH1)
    headerDiv.appendChild(i1)
    headerDiv.appendChild(i2)
    headerDiv.appendChild(i3)


    // Create Aside Elements
    const asideDiv = document.createElement('aside')
    const ul = document.createElement('ul')
    const liHome = document.createElement('li')
    const liHomeI = document.createElement('i')
    const liHomeP = document.createElement('p')
    const liDT = document.createElement('li')
    const liDTI = document.createElement('i')
    const liDTP = document.createElement('p')
    const liWT = document.createElement('li')
    const liWTI = document.createElement('i')
    const liWTP = document.createElement('p')
    const liFav = document.createElement('li')
    const liFavI = document.createElement('i')
    const liFavP = document.createElement('p')
    const liProjects = document.createElement('li')
    const liProjectsI = document.createElement('i')
    const liProjectsP = document.createElement('p')
    const asidehr1 = document.createElement('hr')
    const asidehr2 = document.createElement('hr')
    const asidehr3 = document.createElement('hr')
    const asidehr4 = document.createElement('hr')

    // Create Aside Classes
    asideDiv.classList.add('rct')
    liHome.classList.add('d-flex', 'flex-column', 'nav-Home', 'nav-icon')
    liHomeI.classList.add('bi', 'bi-house')
    liDT.classList.add('d-flex', 'flex-column', 'nav-DT', 'nav-icon')
    liDTI.classList.add('bi', 'bi-calendar-event')
    liWT.classList.add('d-flex', 'flex-column', 'nav-WT', 'nav-icon')
    liWTI.classList.add('bi', 'bi-calendar2-week')
    liFav.classList.add('d-flex', 'flex-column', 'nav-Fav', 'nav-icon')
    liFavI.classList.add('bi', 'bi-star')
    liProjects.classList.add('d-flex', 'flex-column', 'nav-Projects', 'nav-icon')
    liProjectsI.classList.add('bi', 'bi-folder')

    // Create Aside inline-styles
    liHomeI.style.fontSize = '2rem'
    liDTI.style.fontSize = '2rem'
    liWTI.style.fontSize = '2rem'
    liFavI.style.fontSize = '2rem'
    liProjectsI.style.fontSize = '2rem'

    // Create Aside Text
    liHomeP.textContent = 'Home'
    liDTP.innerText = 'Daily Task'
    liWTP.innerText = 'Weekly Task'
    liFavP.innerText = 'Favorites'
    liProjectsP.innerText = 'Projects'

    // Append Aside to container
    htmlContainer.appendChild(asideDiv)
    asideDiv.appendChild(ul)
    ul.appendChild(liHome)
    liHome.appendChild(liHomeI)
    liHome.appendChild(liHomeP)
    ul.appendChild(asidehr1)
    ul.appendChild(liDT)
    liDT.appendChild(liDTI)
    liDT.appendChild(liDTP)
    ul.appendChild(asidehr2)
    ul.appendChild(liWT)
    liWT.appendChild(liWTI)
    liWT.appendChild(liWTP)
    ul.appendChild(asidehr3)
    ul.appendChild(liFav)
    liFav.appendChild(liFavI)
    liFav.appendChild(liFavP)
    ul.appendChild(asidehr4)
    ul.appendChild(liProjects)
    liProjects.appendChild(liProjectsI)
    liProjects.appendChild(liProjectsP)
    
}

export {header}