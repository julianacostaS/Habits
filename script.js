// Using external library
const form = document.querySelector('#form-habits')
const habitsApp = new NLWSetup(form)
const button = document.querySelector('header button')

// to add a day on click
button.addEventListener('click', add)
    // to change and store the date
form.addEventListener('change', save)

function add() {

    // get current date and take out the year by using .slice
    const today = new Date().toLocaleDateString().slice(0, -5)
        // If want to add the days manually use - const today = "16/02" - and comment the above code
    const dayExists = habitsApp.dayExists(today)

    // use an if statement to check whether the day has already been included.
    if (dayExists) {
        alert('Day already included! 🟡')
        return
    }

    alert('Day successfully added! ✅')
    habitsApp.addDay(today)
}

function save() {
    // save and store the information in the local storage inside the browser.Give the localStorage a name.
    // Convert the object to string by using JSON. stringfy
    localStorage.setItem('Habits@Application', JSON.stringify(habitsApp.data))
}

// get the data from local storage, transform it back to an object by using the JSON.parse
// || {} means that if the application can't find any data in the localStorage it will accept an empty object {}
const data = JSON.parse(localStorage.getItem('Habits@Application')) || {}
habitsApp.setData(data)
habitsApp.load()