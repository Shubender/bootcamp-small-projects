const { countries, find } = require("./countries");


test("When find is passed an empty string, it returns an empty array", () => {
    expect(find("")).toEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    console.log("Countries: ", find('A'));
    expect(find("A").length < 4);
});

test("The search is case insensitive", () => {
    expect(find("Alb") === find("aLB"));
});

test("If there are no matching countries, an empty array is returned", () => {
    console.log("Wrong name of Countries: ", find("Olb"));
    expect(find("Olb")).toEqual([]);
});