const form = document.querySelector('#github-form');

form.addEventListener('submit', handleSubmit)
const submitBttn = document.querySelector('#button')


function handleSubmit(e){
    e.preventDefault()
    const userName = e.target.search1.value
        console.log(userName)

    searchFetch(userName);
    
    form.reset()

}





function searchFetch (userName) {
    fetch(`https://api.github.com/users/${userName}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }

    })
    .then(resp=>resp.json())
    .then(data=>dataInfo(data))

}

function dataInfo (data) {
    console.log(data)

const pTag = document.createElement('p');
pTag.style.textAlign = 'center'
pTag.innerText = data.login

const h3 = document.createElement('h3');
h3.style.textAlign = 'center'
document.querySelector('#user-list').appendChild(h3);
h3.innerText = 'Login Name'


document.querySelector('#user-list').appendChild(pTag);
const h3_2 = document.createElement('h3');
h3_2.innerText = 'Avatar'
document.querySelector('#user-list').appendChild(h3_2)
h3_2.style.textAlign = 'center'

const img = document.createElement('img');
img.style.textAlign = 'center'
img.setAttribute('src', data.avatar_url)
document.querySelector('#user-list').appendChild(img)

const h3_3 = document.createElement('h3');

h3_3.style.textAlign = 'center';
h3_3.innerText = 'URL Link'
document.querySelector('#user-list').appendChild(h3_3);

const a = document.createElement('a');

a.setAttribute('href', data.html_url);
a.innerText = 'Click Me For My Github!';
a.style.textAlign = 'center';
document.querySelector('#user-list').appendChild(a)
console.log(data.html_url)



// img.addEventListener('click', searchRepos(userName))


}


function searchRepos (userName){
    fetch(`https://api.github.com/users/${userName}/repos`, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then(resp=>resp.json()
    .then(data=>loadRepos(data)))
};




function loadRepos (data){
    console.log(data)
    const array = JSON.stringify(data)
const ulRepo = document.querySelector('#repos-list');

const hRepo = document.createElement('h3');
hRepo.innerText = array
ulRepo.appendChild(hRepo)

}


