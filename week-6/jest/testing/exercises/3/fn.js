module.exports = function fn(string) {
    if (typeof string !== "string" && !Array.isArray(string)) {
        return null;
    }
    if (Array.isArray(string)) {
        const newString = string[0];
        return [[...newString].reverse().join(""), null];
    }
    return [...string].reverse().join("");
};
