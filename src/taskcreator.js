function taskcreator() {
    
    class Task {
        constructor(name, description, date, priority, completed ){
            this.name = name;
            this.description = description;
            this.date = date;
            this.priority = priority
            this.completed = completed
        }

    }

    function getBookInfo() {
        const taskName = document.querySelector('#Task-name').value
        const taskdescrip = document.querySelector('#Description').value
        const  taskDate = document.querySelector('#Date-picked').value
        const priority = document.querySelector('#priority').value
    }
        
}

export {taskcreator}


// some code to use to populate date form. you will have to change the name testdate though
// testdate.value = taskdate