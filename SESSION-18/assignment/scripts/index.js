
// Task 2: Import and Parse JSON String
import { recipesJson } from '../assets/data.js';

const parsedData = JSON.parse(recipesJson);

// Task 3: Populate the Website with Recipe Details
/*
<div>
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <small class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</small>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
*/ 

const cakesSection = document.querySelector('#cakes');
parsedData.cakes.forEach(element => {
    const cardOuterDiv = document.createElement('div');
    const cardDiv = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardDivBody = document.createElement('div');
    const h5 = document.createElement('h5');
    const small = document.createElement('small');
    const hr = document.createElement('hr');
    const p = document.createElement('p');

    cardOuterDiv.classList.add('m-4');
    cardDiv.classList.add('card');
    cardDiv.style.width = '18rem';
    cardDiv.style.height = '100%';
    cardImg.src = element.image;
    cardImg.alt = 'cake Img';
    cardImg.classList.add('card-img-top');
    cardImg.style.width = '100%';
    cardImg.style.height = '18rem';
    cardDivBody.classList.add('card-body');
    h5.classList.add('card-title');
    small.classList.add('card-text');

    h5.innerText = element.title;
    small.innerText = element.author;
    p.innerText = (element.ingredients).join(', ')

    cardDivBody.append(h5);
    cardDivBody.append(small);
    cardDivBody.append(hr);
    cardDivBody.append(p);
    cardDiv.append(cardImg);
    cardDiv.append(cardDivBody);
    cardOuterDiv.append(cardDiv);
    cakesSection.append(cardOuterDiv);
    console.log(cakesSection);

});


const biscuitsSection = document.querySelector('#biscuits');
parsedData.biscuits.forEach(element => {
    const cardOuterDiv = document.createElement('div');
    const cardDiv = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardDivBody = document.createElement('div');
    const h5 = document.createElement('h5');
    const small = document.createElement('small');
    const hr = document.createElement('hr');
    const p = document.createElement('p');

    cardOuterDiv.classList.add('m-4');
    cardDiv.classList.add('card');
    cardDiv.style.width = '18rem';
    cardDiv.style.height = '100%';
    cardImg.src = element.image;
    cardImg.alt = 'cake Img';
    cardImg.style.width = '100%';
    cardImg.style.height = '18rem';
    cardImg.classList.add('card-img-top');
    cardDivBody.classList.add('card-body');
    h5.classList.add('card-title');
    small.classList.add('card-text');

    h5.innerText = element.title;
    small.innerText = element.author;
    p.innerText = (element.ingredients).join(', ')

    cardDivBody.append(h5);
    cardDivBody.append(small);
    cardDivBody.append(hr);
    cardDivBody.append(p);
    cardDiv.append(cardImg);
    cardDiv.append(cardDivBody);
    cardOuterDiv.append(cardDiv);
    biscuitsSection.append(cardOuterDiv);


})


const breadSection = document.querySelector('#bread');
parsedData.bread.forEach(element => {
    const cardOuterDiv = document.createElement('div');
    const cardDiv = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardDivBody = document.createElement('div');
    const h5 = document.createElement('h5');
    const small = document.createElement('small');
    const hr = document.createElement('hr');
    const p = document.createElement('p');

    cardOuterDiv.classList.add('m-4');
    cardDiv.classList.add('card');
    cardDiv.style.width = '18rem';
    cardDiv.style.height = '100%';
    cardImg.src = element.image;
    cardImg.alt = 'cake Img';
    cardImg.style.width = '100%';
    cardImg.style.height = '18rem';
    cardImg.classList.add('card-img-top');
    cardDivBody.classList.add('card-body');
    h5.classList.add('card-title');
    small.classList.add('card-text');

    h5.innerText = element.title;
    small.innerText = element.author;
    p.innerText = (element.ingredients).join(', ')

    cardDivBody.append(h5);
    cardDivBody.append(small);
    cardDivBody.append(hr);
    cardDivBody.append(p);
    cardDiv.append(cardImg);
    cardDiv.append(cardDivBody);
    cardOuterDiv.append(cardDiv);
    breadSection.append(cardOuterDiv);

})