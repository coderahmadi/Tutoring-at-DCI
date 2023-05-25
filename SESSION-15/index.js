
const data = [
    {
        id: 1,
        firstname: 'Scott',
        lastname: 'John',
        contact: 32893847
    },
    {
        id: 2,
        firstname: 'Ali',
        lastname: 'Herawi',
        contact: 987897647
    },
    {
        id: 3,
        firstname: 'George',
        lastname: 'Martin',
        contact: 65378656
    }
];
const constainerDiv = document.querySelector('#content');
// console.log(constainerDiv);

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const trHead = document.createElement('tr');


const thHead1 = document.createElement('th');
const thHead2 = document.createElement('th');
const thHead3 = document.createElement('th');
const thHead4 = document.createElement('th');

constainerDiv.append(table);
table.append(thead);
table.append(tbody);

thead.append(trHead);
trHead.append(thHead1)
trHead.append(thHead2)
trHead.append(thHead3)
trHead.append(thHead4)

table.classList.add('table')
table.classList.add('table-striped');

thHead1.scope = 'col';
thHead2.scope = 'col';
thHead3.scope = 'col';
thHead4.scope = 'col';

thHead1.innerText = 'ID';
thHead2.innerText = 'First Name';
thHead3.innerText = 'Last Name';
thHead4.innerText = 'Contact';

data.forEach(user => {
    const trBody = document.createElement('tr');
    const thId = document.createElement('th');
    const tdfName = document.createElement('td');
    const tdlName = document.createElement('td');
    const tdContact = document.createElement('td');

    thId.scope = 'row';

    thId.innerText = user.id;
    tdfName.innerText = user.firstname;
    tdlName.innerText = user.lastname;
    tdContact.innerText = user.contact;


    trBody.append(thId);
    trBody.append(tdfName);
    trBody.append(tdlName);
    trBody.append(tdContact);


    tbody.append(trBody)

});
