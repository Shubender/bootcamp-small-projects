// Rewrite the following function to use destructuring assignment for the three variables it creates:

//  function logInfo(city) {
//      const name = city.name;
//      const country = city.country;
//      const numPeople = city.population;

//      console.log(
//          `${name} is in ${country} and has ${numPeople} inhabitants in it.`
//      );
//  }

function logInfo(city) {
    const { name, country, population: numPeople } = city;
    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}

logInfo({ name: "Marseille", country: "France", population: 861635 });
