// méthode axios/await
async function getFetes(){
    try {
        const res = await axios.get('https://date.nager.at/api/v3/publicholidays/2023/CH');
        console.log(res);
        const fetesList = res.data
        const holElement = document.getElementById('calendar');

        for (let fetes of fetesList) {
            const fetesEl = document.createElement('div')
            fetes.innerHTML=
            
      fetesEl.classList.add('col')
      fetesEl.addEventListener('click', function(){
        alert(fetes.date)
      })
      holElement.appendChild(fetesEl)
        }
    } catch (e) {
        throw e;
    }
}
getFetes()


