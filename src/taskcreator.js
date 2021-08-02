// function taskcreator() {
    import {format} from "date-fns"
    // class Task {
    //     constructor(name, description, date, priority, completed ){
    //         this.name = name;
    //         this.description = description;
    //         this.date = date;
    //         this.priority = priority
    //         this.completed = completed
    //     }

    // }
    // let library = []
    // let id = -1
    function Task(name, description, date, priority, completed) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority
        this.completed = completed
        let id = -1
        this.id = id++
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
                const cardIconDiv = document.createElement('div')
                const cardIconEdit = document.createElement('i')
                const cardIconDelete = document.createElement('i')
        
                // Create Card Section 1 Classes
                card1Div.classList.add('card', 'col-3', 'rct', 'mb-3')
                card1Body.classList.add('card-body')
                card1Title.classList.add('card-title', 'text-center')
                card1TextDiv.classList.add('card-text', 'mb-3')
                cardIconDiv.classList.add('btn-icon', 'd-flex', 'justify-content-end')
                cardIconEdit.classList.add('bi', 'bi-pencil-square')
                cardIconDelete.classList.add('bi', 'bi-trash', 'ms-3')


                // Add attributes
                cardIconEdit.setAttribute('data-bs-toggle', 'modal')
                cardIconEdit.setAttribute('data-bs-target', '#staticBackdropEdit')
        
                // Add Card Section 1 Text
                card1P.innerText = name
                card1textP.innerText = description
                cardDate.innerText = date
                cardprior.innerText = `Priority: ${priority}`
        
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
                card1Body.appendChild(cardIconDiv)
                cardIconDiv.appendChild(cardIconEdit)
                cardIconDiv.appendChild(cardIconDelete)

                cardIconDelete.addEventListener('click', removeTask)
                cardIconEdit.addEventListener('click', editTask)

    }

    export function getBookInfo() {
        const taskName = document.querySelector('#Task-name').value
        const taskdescrip = document.querySelector('#Description').value
        const  taskDate = document.querySelector('#Date-picked').value
        const priority = document.querySelector('#priority').value

        let storage = getStorage()
        // validation 
        if (taskName === "" || taskdescrip === "" || taskDate === "" || priority === "selection"){
            alert('please fill in all fields')
        }  else if (storage.some(task => task.name === taskName)) {
            alert("choose new task name")
        } else {
            // const formattedDated = format(new Date(taskDate), 'MM/dd/yyyy')
            const formattedDated = new Date(taskDate)
             taskbuilder(taskName, taskdescrip, formattedDated, priority)
             const task = new Task(taskName, taskdescrip, formattedDated, priority, false)
                setStorage(task)
                console.log(task);
            
            document.querySelector('#Task-name').value = ""
            document.querySelector('#Description').value = ""
            document.querySelector('#Date-picked').value = ""
            document.querySelector('#priority').value = ""

        }
    }

        function removeTask() {
            this.parentElement.parentElement.parentElement.remove()
            let task = getStorage()
            // Removing the task from the storage 
            // taskfor.forEach((task, index) => {
            //     if t
            // })
            console.log('removing');
        }

        function editTask() {
            document.querySelector('#Task-name-edit').value = this.name
            document.querySelector('#Description-edit').value = this.description
            document.querySelector('#Date-picked-edit').value = this.date
            document.querySelector('#priority-edit').value = this.prior
        }

        function setStorage(task) {
            let library = getStorage()
            library.push(task)
            localStorage.setItem("library", JSON.stringify(library))
            console.log('setting storage');
        }

          function getStorage() {
            let storage
            if (localStorage.getItem('library') === null) {
                storage = []
            } else {
                storage = JSON.parse(localStorage.getItem('library'))
            }
            console.log('get storage');
            console.log(storage)
            return storage
        }

        export function displayStorage() {
            let storage = getStorage()
            storage.forEach((task) => taskbuilder(task.name, task.description,task.date, task.priority))
            console.log('display storage');
        }
// }
