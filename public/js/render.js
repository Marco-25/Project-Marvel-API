
function render(name,image,box,description ) {
    box.innerHTML += `<div class="grid__container-hover-detalhes w25" >
                        <div class="w25">
                        <div class="img">
                            <img src="${image}" alt="...">
                             <p>${description ? description : `<b class="color-red">Desculpe, não há descrição.</b>`}</p>
                        </div>
                        <h3>${name}</h3>
                     </div>`;
}

function modalrender(name,description,image) {
    let modal = document.querySelector('.bg-modal');
    modal.innerHTML = `
        <div class="box-modal">
             <div class="closeBtn">X</div>
             <h3>${name}</h3>
                <p>${description ? description : `<b class="color-red">Desculpe, não há descrição.</b>`}</p>
                <img src="${image}" width="464" height="261" alt="...">
        </div><!--box-modal-->
    `;
}

