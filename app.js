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
        emails.unshift(`Welcome ${member} !`)
        localStorage.setItem('nbc-newsletter-emails', JSON.stringify(emails))
        populateNewMembers([`Welcome ${member} !`])
    }

}

window.onload = () => {
    document.getElementById('nbc-email-form').addEventListener('submit', () => {

    })
    const emails = fetchFromLocalStorage('nbc-newsletter-emails') || []
    const throttledInterval = fetchFromLocalStorage('nbc-newsletter-throttledInterval')


    if (!throttledInterval) {
        //Handle 
    }
    populateNewMembers(emails)
}