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
        const card1Title = document.createElement('div')
        const card1P = document.createElement('p')
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
        card1P.innerText = 'Recently Completed Task'
        card1LI1.innerText = 'Go on a run'
        card1LI2.innerText = 'Vacuum the floor'
        card1LI3.innerText = 'Do the dishes'
        card1LI4.innerText = 'Wash my car'

        // Append Cardsection 1 to  Card col
        cardColDiv.appendChild(card1Div)
        card1Div.appendChild(card1Body)
        card1Body.append(card1Title)
        card1Title.append(card1P)
        card1Title.append(card1HR)
        card1Body.appendChild(card1TextDiv)
        card1TextDiv.appendChild(card1UL)
        card1UL.appendChild(card1LI1)
        card1UL.appendChild(card1LI2)
        card1UL.appendChild(card1LI3)
        card1UL.appendChild(card1LI4)


        // Create Card Section 2
        const card2Div = document.createElement('div')
        const card2Body = document.createElement('div')
        const card2Title = document.createElement('div')
        const card2P = document.createElement('p')
        const card2HR = document.createElement('hr')

        // Create Card Section 2 Classes
        card2Div.classList.add('card', 'col-3', 'rct', 'text-light')
        card2Body.classList.add('card-body')
        card2Title.classList.add('card-title', 'text-center')

        //  Add Card Card Section 2 Text
        card2P.innerText = 'Upcompleted Task'

        // Append Card Section 2 to Card Col
        cardColDiv.appendChild(card2Div)
        card2Div.appendChild(card2Body)
        card2Body.append(card2Title)
        card2Title.append(card2P)
        card2Title.append(card2HR)


        // Create Card Section 3
        const card3Div = document.createElement('div')
        const card3Body = document.createElement('div')
        const card3Title = document.createElement('div')
        const card3P = document.createElement('p')
        const card3HR = document.createElement('hr')

        // Create Card Section 3 Classes
        card3Div.classList.add('card', 'col-3', 'rct', 'text-light')
        card3Body.classList.add('card-body')
        card3Title.classList.add('card-title', 'text-center')

        //  Add Card Card Section 3 Text
        card3P.innerText = 'Upcoming Task'

        // Append Card Section 3 to Card Col
        cardColDiv.appendChild(card3Div)
        card3Div.appendChild(card3Body)
        card3Body.append(card3Title)
        card3Title.append(card3P)
        card3Title.append(card3HR)

        
        // Create Card Section 4
        const card4Div = document.createElement('div')
        const card4Body = document.createElement('div')
        const card4Title = document.createElement('div')
        const card4P = document.createElement('p')
        const card4HR = document.createElement('hr')

        // Create Card Section 4 Classes
        card4Div.classList.add('card', 'col-5', 'rct', 'text-light')
        card4Body.classList.add('card-body')
        card4Title.classList.add('card-title', 'text-center')

        //  Add Card Card Section 4 Text
        card4P.innerText = 'Projects'

        // Append Card Section 4 to Card Col
        cardRowDiv.appendChild(card4Div)
        card4Div.appendChild(card4Body)
        card4Body.append(card4Title)
        card4Title.append(card4P)
        card4Title.append(card4HR)


        // Create Card Section 5
        const card5Div = document.createElement('div')
        const card5Body = document.createElement('div')
        const card5Title = document.createElement('div')
        const card5P = document.createElement('p')
        const card5HR = document.createElement('hr')
        const card5TextDiv = document.createElement('div')
        const card5TextP = document.createElement('p')

        // Create Card Section 5 Classes
        card5Div.classList.add('card', 'col-5', 'rct', 'text-light')
        card5Body.classList.add('card-body')
        card5Title.classList.add('card-title', 'text-center')
        card5TextDiv.classList.add('card-text')

        //  Add Card Card Section 5 Text
        card5P.innerText = 'Other'
        card5TextP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repudiandae autem fugit nam, quisquam ratione nesciunt debitis omnis dignissimos sequi modi deleniti! Molestiae officia possimus, cupiditateerror dignissimos provident tenetur nulla nobis, assumenda rerum rem facilis minima cum aliquam quos sequi repellendus optio suscipit. Ea consequatur praesentium eaque quibusdam rem alias dolores, ipsa, officia possimus harum dolorum nostrum eos numquam voluptates sint eius itaque impedit non enim nisi aspernatur quo consequuntur autem quasi.'

        // Append Card Section 5 to Card Col
        cardRowDiv.appendChild(card5Div)
        card5Div.appendChild(card5Body)
        card5Body.append(card5Title)
        card5Title.append(card5P)
        card5Title.append(card5HR)
        card5Body.appendChild(card5TextDiv)
        card5TextDiv.appendChild(card5TextP)
}

export {home}