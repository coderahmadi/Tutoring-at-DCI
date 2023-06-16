async function getRandomCat() {
    const response = await fetch('https://randombig.cat/roar.json');
    const data = await response.json();

    showInCard(data);
}
function showInCard(data) {
    const catImg = document.createElement('img')
    catImg.style.width = '20rem';
    catImg.style.height = '20rem';
    catImg.src = data.url;
    catImg.classList.add('img-thumbnail')
    document.querySelector('main').append(catImg);
}

getRandomCat();