// function taskcreator() {
    
    class Task {
        constructor(name, description, date, priority, completed ){
            this.name = name;
            this.description = description;
            this.date = date;
            this.priority = priority
            this.completed = completed
        }

    }

    function taskbuilder(name, description, date, priority){
                const cardColDiv = document.querySelector('.daily-task-container') 
                // Create Card Section 1
                const card1Div = document.createElement('div')
                const card1Body = document.createElement('div')
                const card1Title = document.createElement('div')
                const card1P = document.createElement('p')
                const card1HR = document.createElement('hr')
                const card1TextDiv = document.createElement('div')
                const card1textP = document.createElement('p')
                const cardDate = document.createElement('p')
                const cardprior = document.createElement('p')
        
                // Create Card Section 1 Classes
                card1Div.classList.add('card', 'col-3', 'rct', 'mb-3')
                card1Body.classList.add('card-body')
                card1Title.classList.add('card-title', 'text-center')
                card1TextDiv.classList.add('card-text')
        
                // Add Card Section 1 Text
                card1P.innerText = name
                card1textP.innerText = description
                cardDate.innerText = date
                cardprior.innerText = priority
        
                // Append Cardsection 1 to  Card col
                cardColDiv.appendChild(card1Div)
                card1Div.appendChild(card1Body)
                card1Body.append(card1Title)
                card1Title.append(card1P)
                card1Title.append(card1HR)
                card1Body.appendChild(card1TextDiv)
                card1TextDiv.appendChild(card1textP)
                card1TextDiv.appendChild(cardDate)
                card1TextDiv.appendChild(cardprior)
    }

    export function getBookInfo() {
        const taskName = document.querySelector('#Task-name').value
        const taskdescrip = document.querySelector('#Description').value
        const  taskDate = document.querySelector('#Date-picked').value
        const priority = document.querySelector('#priority').value

        // validation 
        if (taskName === "" || taskdescrip === "" || taskDate === "" || priority === "selection"){
            alert('please fill in all fields')
        } else {
            alert('task created')
            taskbuilder(taskName, taskdescrip, taskDate, priority)

            document.querySelector('#Task-name').value = ""
            document.querySelector('#Description').value = ""
            document.querySelector('#Date-picked').value = ""
            document.querySelector('#priority').value = ""
        }

    }
        
// }

// export {taskcreator}


// some code to use to populate date form. you will have to change the name testdate though
// testdate.value = taskdate
