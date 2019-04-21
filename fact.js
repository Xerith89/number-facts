//add event listener to our input field

document.querySelector('#number').addEventListener('input', (e) => getFact());

function getFact()
{
    let number = document.querySelector('#number').value;
    let url = `//numbersapi.com/${number}/trivia`;
    let factTitle = document.querySelector('#num-fact-title');
    let factBody = document.querySelector('#num-fact');
    const title = '<h3>Number Fact</h3>';
    if (number == '')
    {
        factTitle.style.display = "none";
        factBody.style.display = "none";
    } else {
        fetch(url, {mode: 'no-cors'})
        .then((res) => {
        if (res.ok) {
        return res.text()
        } else {
            return Promise.reject("Error: "+res.statusText())
        }
    })
        .then((data) => {
            //Take our data and insert into dom
            factTitle.style.display = "initial";
            factBody.style.display = "initial";
            factTitle.innerHTML = title;
            factBody.innerHTML = `<p class="mb-4 card-body card-text">${data}</p>`;
        })
        .catch((error) =>  {
            factTitle.style.display = "initial";
            factBody.style.display = "initial";
            factTitle.innerHTML = '<h3 class="text-danger">Error, fact not found!</h3>';
            factBody.innerHTML = '';
        });
    }
}