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
}

export {header}