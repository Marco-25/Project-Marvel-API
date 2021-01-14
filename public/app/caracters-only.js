const PRIVATE_KEY = "3914c136ff44638f0014e4023e9ade2d959ade38";
const PUBLIC_KEY = "b42a07f66068abb2465e9d78979bea87";

let timeStamp = new Date().getTime();
let hash = CreateTsPublicKeyPrivateKey(timeStamp + PRIVATE_KEY + PUBLIC_KEY).toString();


function  getCompleteSearch(name = null) {
    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
        .then(response =>  response.ok ? response.json() : Promise.reject(response.statusText))
        .then(json => json.data.results)
        // .then(res => console.log(res))
        .then(results =>
            results.map(result => {renderImgDescription( result.name, result.description,result.thumbnail.path+'.'+result.thumbnail.extension);
            result['comics'].items.map(item => renderComics(item.name));
            result['series'].items.map(item => renderSeries(item.name));
            result['stories'].items.map(item => renderStories(item.name));
            result['events'].items.map(item => renderEvents(item.name));
             })
        )
        .catch(console.log);
}

searchOnlyComplete();
function searchOnlyComplete() {
    let form = document.getElementById('form-search-complete');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
       let inputSearchComplete = document.getElementById('input-search-complete').value;
        getCompleteSearch(inputSearchComplete);
    });
}

function renderImgDescription (name, description, image) {
        let box = document.getElementById('content-marvel-details-1')
        box.innerHTML = `<h3>${name}</h3><!--h3-->
        <div class="content-marvel-details__container">
            <div class="img-description">
                <img src="${image}" alt="...">
                    <p>${description ? description : `<b class="color-red">Não há descrição.</b>`} </p>
            </div><!--img-description-->
        </div><!--content-marvel-details__container-->`;
}

function renderComics(name) {
        let li = document.getElementById('comic');
        li.innerHTML += `<li>${name}</li>`;
}

function renderSeries(name) {
        let li = document.getElementById('series');
        li.innerHTML += `<li>${name}</li>`;
}

function renderStories(name) {
        let li = document.getElementById('stories');
        li.innerHTML += `<li>${name}</li>`;
}

function renderEvents(name) {
        let li = document.getElementById('events');
        li.innerHTML += `<li>${name}</li>`;
}




















