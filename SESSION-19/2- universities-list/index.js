async function getUni(country) {
    const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
    const data = await response.json();

    listUniversities(data);
    document.getElementById("myForm").reset();
}

function listUniversities(unis) {

    const ul = document.querySelector('#list');
    console.log(unis);
    unis.forEach(uni => {
        const li = document.createElement('li');
        ul.append(li);
        li.innerHTML = `<a href="${uni.web_pages}">${uni.name}</a>`;
    })

}



document.querySelector('#myForm').addEventListener('submit', eve => {
    document.querySelector('#list').innerHTML = '';
    eve.preventDefault();
    let country = 'USA';
    let formData = new FormData(eve.target);
    formData.forEach((value, key) => {
        country = value;
    })
    getUni(country)
})



