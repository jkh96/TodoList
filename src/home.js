function home() {
        // Grab Content container
        let htmlContainer = document.getElementById('content')

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
        liHomeP.innerText = 'Home'
        liDTP.innerText = 'Daily Task'
        liWTP.innerText = 'Weekly Task'
        liFavP.innerText = 'Favorites'
        liProjectsP.innerText = 'Projects'

        // Append Aside to container
        htmlContainer.appendChild(asideDiv)
        asideDiv.appendChild(ul)
        ul.appendChild(liHome)
        ul.appendChild(liHomeI)
        ul.appendChild(liHomeP)
        ul.appendChild(liDT)
        ul.appendChild(liDTI)
        ul.appendChild(liDTP)
        ul.appendChild(liWT)
        ul.appendChild(liWTI)
        ul.appendChild(liWTP)
        ul.appendChild(liFav)
        ul.appendChild(liFavI)
        ul.appendChild(liFavP)
        ul.appendChild(liProjects)
        ul.appendChild(liProjectsI)
        ul.appendChild(liProjectsP)


        // Create Entire Main Section

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
    
        // Create Welcome User Classes
        welcomeRowDiv.classList.add('row', 'mb-4')
        welcomeColDiv.classList.add('col', 'col-12')

        // Create Welcome User Text
        welcomeH1.innerText = 'Welcome User!'

        // Appened  Welcome section to Main Container
        mainContainerFluid.appendChild(welcomeRowDiv)
        welcomeRowDiv.appendChild(welcomeColDiv)
        welcomeColDiv.appendChild(welcomeH1)


        // Create Cards

        // Create Card row setup
        const cardRowDiv = document.createElement('div')

        // Add Card Row Setup Clases
        cardRowDiv.classList.add('row')
        
        // Append Card Row Setup to Main Container
        mainContainerFluid.appendChild(cardRowDiv)


        // Create Card1Col
        const cardColDiv = document.createElement('div')

        // Create Card 1 Col Classes
        cardColDiv.classList.add('col-5', 'mb-4', 'me-3', 'd-flex', 'justify-content-between', 'p-0')

        // Append card1col to Card Row
        cardRowDiv.appendChild(cardColDiv)

        // Create Card Section 1
        const card1Div = document.createElement('div')
        const card1Body = document.createElement('div')
        const card1Title = document.createElement('p')
        const card1HR = document.createElement('hr')
        const card1TextDiv = document.createElement('div')
        const card1UL = document.createElement('ul')
        const card1LI1 = document.createElement('li')
        const card1LI2 = document.createElement('li')
        const card1LI3 = document.createElement('li')
        const card1LI4 = document.createElement('li')

        // Create Card Section 1 Classes
        card1Div.classList.add('card', 'col-3', 'rct', 'text-light')
        card1Body.classList.add('card-body')
        card1Title.classList.add('card-title', 'text-center')
        card1TextDiv.classList.add('card-text')

        // Add Card Section 1 Text
        card1Title.innerText = 'Recently Completed Task'
        card1LI1.innerText = 'Go on a run'
        card1LI2.innerText = 'Vacuum the floor'
        card1LI3.innerText = 'Do the dishes'
        card1LI4.innerText = 'Wash my car'

        // Append Cardsection 1 to  Card col
        cardColDiv.appendChild(card1Div)
        card1Div.appendChild(card1Body)
        card1Body.append(card1Title)
        card1Title.append(card1HR)
        card1Body.appendChild(card1TextDiv)
}