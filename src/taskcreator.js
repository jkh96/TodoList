function taskcreator() {
    
    const taskContainer = document.querySelector('.daily-task-container')


    
        const card3Div = document.createElement('div')
        const card3Body = document.createElement('div')
        const card3Title = document.createElement('div')
        const card3P = document.createElement('p')
        const card3HR = document.createElement('hr')

        // Create Card Section 3 Classes
        card3Div.classList.add('card', 'col-3', 'rct', 'mb-3')
        card3Body.classList.add('card-body')
        card3Title.classList.add('card-title', 'text-center')

        //  Add Card Card Section 3 Text
        card3P.innerText = 'Weekly Task'

        // Append Card Section 3 to Card Col
        taskContainer.appendChild(card3Div)
        card3Div.appendChild(card3Body)
        card3Body.append(card3Title)
        card3Title.append(card3P)
        card3Title.append(card3HR)

        
    

        
}

export {taskcreator}