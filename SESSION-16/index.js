
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


// 2
let rowStart = data.length + 1;

/*
a : 

function insertNewRow() {
    let fNameText = prompt('Please Enter the first Name : ');
    let lNameText = prompt('Please Enter the last Name: ');
    let contactNum = prompt('Please Enter Contact Number: ');

    let row = document.querySelector('table').insertRow(rowStart);
    let id = row.insertCell(0);
    let firstname = row.insertCell(1);
    let lastname = row.insertCell(2);
    let contact = row.insertCell(3);

    id.innerHTML = `<th> ${rowStart} </th>`;
    id.scope = 'row'
    firstname.innerHTML = `<td> ${fNameText} </td>`;
    lastname.innerHTML = `<td> ${lNameText} </td>`;
    contact.innerHTML = contactNum;

    rowStart++;
}
*/

// b: 
document.querySelector('#insertRow').addEventListener('click', e => {
    let fNameText = prompt('Please Enter the first Name : ');
    let lNameText = prompt('Please Enter the last Name: ');
    let contactNum = prompt('Please Enter Contact Number: ');


    /*

    const newRow = document.createElement('tr');
    const thID = document.createElement('th');
    const tbFname = document.createElement('td');
    const tbLname = document.createElement('td');
    const tbContact = document.createElement('td');

    thID.scope = 'row';
    thID.innerText = rowStart;
    tbFname.innerText = fNameText;
    tbLname.innerText = lNameText;
    tbContact.innerText = contactNum;

    newRow.append(thID)
    newRow.append(tbFname)
    newRow.append(tbLname)
    newRow.append(tbContact)
    
    tbody.append(newRow)
    
    */

    let row = document.querySelector('table').insertRow(rowStart);
    let id = row.insertCell(0);
    let firstname = row.insertCell(1);
    let lastname = row.insertCell(2);
    let contact = row.insertCell(3);

    id.innerHTML = `<th> ${rowStart} </th>`;
    id.scope = 'row'
    firstname.innerHTML = `<td> ${fNameText} </td>`;
    lastname.innerHTML = `<td> ${lNameText} </td>`;
    contact.innerHTML = contactNum;



    rowStart++;
});


// 3

function editCell() {
    rowNumber = window.prompt("Row Number :", "1");
    columnNumber = window.prompt("Column Number :", "1");
    content = window.prompt("Inter the Cell Content : ");
    let table = document.querySelector('table');
    // select row
    let selectedRow = table.rows[parseInt(rowNumber)].cells[parseInt(columnNumber)];
    // console.log('Row: ',selectedRow); // return HTMLCollection 
    selectedRow.innerText = content;
    // .rows[parseInt(rn, 10)].cells;
    // x[parseInt(cn, 10)].innerHTML = content;
}






