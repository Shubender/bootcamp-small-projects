var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var name in a) {
    b[a[name]] = name;
}

console.log(b);
