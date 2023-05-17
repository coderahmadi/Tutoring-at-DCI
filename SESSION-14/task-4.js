const bands = [];
/*
 bands = [
   { name:'New Persian', genre: 'Tarana', year: 2012 },
   { name:'Radiohead', genre: 'Classic', year: 2000 },
   { name:'Led Zeppelin', genre: 'Modern', year: 2002 },
   { name:'Abc', genre: 'Royal', year: 2009 }
 ]

*/



console.log('Welcome to the Battle of the Bands');
let prompt = require('prompt-sync')();
/*
What do you want to do?
1. Add a band
2. View the list of bands
3. Edit a band
4. Delete a band
5. Quit
*/
console.log(`\nChoose a number: \n1. Add a band. \n2. View the list of bands. \n3. Edit a band. \n4. Delete a band. \n5. Quit\n`);
let s = Number(prompt(`What do you want to do? `));
if (s === 1) {
    const name = prompt("Enter the name of the band:");
    const genre = prompt("Enter the genre of the band:");
    const year = parseInt(prompt("Enter the year the band was formed:"));

    const band = {
        name,
        genre,
        year,
    };

    bands.push(band);
    console.log(`The ${name} band added successfully.`);
} else if (s === 2) {
    console.log("\nAll bands entered: ");

    bands.forEach((band, index) => {
        console.log(`${index + 1}. ${band.name} (${band.genre}, structured in ${band.year})`);
    });
}
else if (s === 3) {
    console.log("\nWhich band you want to edit ? ");
    bands.forEach((band, index) => {
        console.log(`${index + 1}. Name: ${band.name}`);
        console.log(`   Genre: ${band.genre}`);
        console.log(`   Year : ${band.year}`);
    });

    const index = parseInt(prompt("Enter the number of the band you want to edit:")) - 1;

    const property = parseInt(
        prompt(
            `\n1. Name: ${bands[index].name}\n2. Genre: ${bands[index].genre}\n3. Year formed: ${bands[index].year}\n\nWhat do you want to update? Enter a number:`
        )
    );
    if (property === 1) {
        const name = prompt("Enter the new name:");

        bands[index].name = name;
        console.log(`The ${name} band updated successfully.`);
    } else if (property === 2) {
        const genre = prompt("Enter the new genre:");

        bands[index].genre = genre;
        console.log(`The ${bands[index].name} band updated successfully.`);
    } else if (property === 3) {
        const year = parseInt(prompt("Enter the new year formed:"));

        bands[index].year = year;
        console.log(`The ${bands[index].name} band updated successfully.`);
    } else {
        console.log("Invalid input.");
    }


}
else if (s === 4) {
    console.log("\nSelect a band to delete:");

    bands.forEach((band, index) => {
        console.log(`${index + 1}. ${band.name} (${band.genre}, formed in ${band.year})`);
    });

    const index = parseInt(prompt("Enter the number of the band you want to delete:")) - 1;
    const name = bands[index].name;
    if (confirm === "y") {
        bands.splice(index, 1);
        console.log(`The ${name} band deleted successfully.`);
    }


} else if (s === 5) {
    console.log("\nGood luck!");
    return;
} else {
    console.log(`Enter number in specified range [1-5] `);
}