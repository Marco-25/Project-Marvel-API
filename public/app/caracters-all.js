const PRIVATE_KEY = "3914c136ff44638f0014e4023e9ade2d959ade38";
const PUBLIC_KEY = "b42a07f66068abb2465e9d78979bea87";

let timeStamp = new Date().getTime();
let hash = CreateTsPublicKeyPrivateKey(timeStamp + PRIVATE_KEY + PUBLIC_KEY).toString();
let limit = 12;
let page = 0;

let box = document.getElementById('grid__container-1');

getlistCaracteres();
function getlistCaracteres (limit = 12,page = 0){
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${page}`)
        .then(response =>  response.ok ? response.json() : Promise.reject(response.statusText))
        .then(json => json.data.results)
        .then(results =>  { results.map(item => { render(item.name, item.thumbnail.path+'.'+item.thumbnail.extension, box,item.description) })
         })
        .catch(console.log);
}



paginationCaracters();
function paginationCaracters() {
    for(let i=1;i<= 40; i++){
        const span = document.createElement("span");
        const link = document.createElement('a');
        link.textContent = i;
        divPagination.appendChild(span);
        span.appendChild(link);

        link.addEventListener('click', event => {
            event.preventDefault();
            link.classList.add('active');
            if(link.textContent === i.toString()) {
                page = (link.textContent - 1) * limit;
                clearBox(box);
                getlistCaracteres(limit,page);
            }
        })

    }
}


function  getOnlyCaracter(name) {
    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
        .then(response =>  response.ok ? response.json() : Promise.reject(response.statusText))
        .then(json => json.data.results)
        .then(results =>  results.map(item => modalrender(item.name ,item.description, item.thumbnail.path+'.'+item.thumbnail.extension) ) )
        .catch(console.log);
}

getInput();
function getInput () {
    let btn = document.getElementById('form-search');
    btn.addEventListener('submit', (e) => {
        e.preventDefault();
        let nameSearch = document.getElementById('#searchCaracter').value;
        console.log(nameSearch)
        getOnlyCaracter(nameSearch);
    })
}

function clearBox(elementID) {
    elementID.innerHTML = "";
}


