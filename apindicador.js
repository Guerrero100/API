let boton = document.querySelector('#btn-moneda')
boton.addEventListener('click', (e) => {

    let url = 'https://mindicador.cl/api';
    let datos = "";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.bitcoin);
            let indi = document.getElementById('indicador')
            indi.innerHTML = `El valor del ${data.bitcoincodigo} es de  ${data.bitcoin.valor} en ${databitcoinunidad_medida}
        `;
        })
        .catch(error => error)
})