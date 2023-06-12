
const table = document.querySelector('#myTable');

const form = document.querySelector('#myForm');
let rowStart = 1;
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let formData = new FormData(event.target);
    const formDataObject = {};

    formData.forEach((value, key) => {
        formDataObject[key] = value;
    })

    insertNewRow(formDataObject);

})

function insertNewRow(data) {
    let row = table.insertRow(rowStart);
    row.innerHTML = `
    <th scope="row">${rowStart}</th>
    <td>${data.firstname}</td>
    <td>${data.lastname}</td>
    <td>${data.contact}</td>
    `;
    rowStart++;
}