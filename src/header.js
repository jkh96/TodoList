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

    // Create Aside Classes
    liHome.classList.add('d-flex', 'flex-column')
    liHomeI.classList.add('bi', 'bi-house')
    liDT.classList.add('d-flex', 'flex-column')
    liDTI.classList.add('bi', 'bi-calendar-event')
    liWT.classList.add('d-flex', 'flex-column')
    liWTI.classList.add('bi', 'bi-calendar2-week')
    liFav.classList.add('d-flex', 'flex-column')
    liFavI.classList.add('bi', 'bi-star')
    liProjects.classList.add('d-flex', 'flex-column')
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
    ul.appendChild(liDT)
    liDT.appendChild(liDTI)
    liDT.appendChild(liDTP)
    ul.appendChild(liWT)
    liWT.appendChild(liWTI)
    liWT.appendChild(liWTP)
    ul.appendChild(liFav)
    liFav.appendChild(liFavI)
    liFav.appendChild(liFavP)
    ul.appendChild(liProjects)
    liProjects.appendChild(liProjectsI)
    liProjects.appendChild(liProjectsP)
    
}

export {header}