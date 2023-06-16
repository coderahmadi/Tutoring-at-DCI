async function getMyRepo() {
    const url = 'https://api.github.com/users/coderahmadi/repos'
    const response = await fetch(url);
    /*
    it is used to extract the JSON data from a response object returned by a network request.
    When making a network request using the Fetch API or similar mechanisms,
    the server typically responds with data in various formats, including JSON.
    The response.json() method allows you to extract and parse the JSON data from the response body.
    */
    const allRespList = await response.json();
    const listGroup = document.querySelector('#list');

    allRespList.forEach(element => {

        const listItem = document.createElement('a');
        listGroup.append(listItem);
        listItem.innerHTML = `
        <a href="${element.html_url}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >${element.name}
        <span class="badge bg-primary rounded-pill">${element.size}</span></a
      >`;
        console.log(element);
    });
}

getMyRepo();