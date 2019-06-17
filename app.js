const fetchFromLocalStorage = (item) => {
    return JSON.parse(localStorage.getItem(item))
}

const populateNewMembers = (arr = []) => {
    const ul = document.getElementById("members")
    arr.forEach(member => {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(member))
        ul.appendChild(li)
    })
}

const saveMember = (member) => {
    const emails = fetchFromLocalStorage('nbc-newsletter-emails') || []
    if (!emails.includes(`Welcome ${member} !`)) {
        emails.push(`Welcome ${member} !`)
        localStorage.setItem('nbc-newsletter-emails', JSON.stringify(emails))
        populateNewMembers([`Welcome ${member} !`])
    }

}

const hideElementsByIds = (elements) => {
    elements.forEach(element => {
        document.getElementById(element).classList += 'hide'
    })
}

const saveItemToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

window.onload = () => {
    document.getElementById('nbc-email-form').addEventListener('submit', () => {
        // Ran out of time.  In here instead of using the click handler, 
        // I would fire the savemember func wrapped around a throttle function.
    })
    const emails = fetchFromLocalStorage('nbc-newsletter-emails') || []
    const throttledInterval = fetchFromLocalStorage('nbc-newsletter-throttledInterval')


    if (!throttledInterval) {
        hideElementsByIds(['nbc-main-input-body', 'nbc-member-area'])
        document.getElementById('throttle-input').classList.remove('hide')
    }
    populateNewMembers(emails)
}