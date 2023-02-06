// Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.

let getNameAndCountry = ({name, country}) => [name, country];

let getRelocatedCity = (city1, city2={country: 'Germany'}) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country
    };
};

let result = getRelocatedCity(
    { city: "Odesa", country: "Ukraine"}
);
console.log(result);



// let getNameAndCountry = function (name, country) {
//     return [name: name, country: country];
// };

// let getRelocatedCity = (city1, city2={country: 'Germany'}) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country
//     };
// };