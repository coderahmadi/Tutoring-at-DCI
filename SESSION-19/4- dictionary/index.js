document.querySelector('#myForm').addEventListener('submit', eve => {
    eve.preventDefault();
    let word = 'hello';
    let formData = new FormData(eve.target);
    formData.forEach((value, key) => {
        country = value;
    })
    showDetail(word)
})


async function showDetail(w) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${w}`);
    const data = await response.json();
    console.log(data);
    let meanings = data[0].meanings;
    let phonetics = data[0].phonetics;
    
}