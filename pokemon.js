let btncarga = document.querySelector('#cbo-carga');
let max = 1
let min = 500
btncarga.addEventListener('click', (e) => {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * (max - min + 1) + min);
        fetch(url)
            .then(response => response.json())
            .then(data => {

                console.log(data);
                let tr = document.getElementById('poke');
                tr.innerHTML += `<td><img src='${data.sprites.front_default} '><br> ${data.name}</td>`
            })

        .catch(error => console.log(error))
    })
    /*    getAleatorio(1, 500);

function getAleatorio(min, max) {
    return (Math.random() * (max - min) + min); */