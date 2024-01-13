
// Shallow Copy Example using Object.assign()
let original1 = { a: 1, b: { c: 2 } };
let shallowCopy1 = Object.assign({}, original1);
shallowCopy1.a = 10;
shallowCopy1.b.c = 20;
console.log('Shallow Copy with Object.assign:', original1, shallowCopy1);

// Shallow Copy Example using Spread Syntax
let original2 = { a: 1, b: { c: 2 } };
let shallowCopy2 = { ...original2 };
shallowCopy2.a = 10;
shallowCopy2.b.c = 20;
console.log('Shallow Copy with Spread Syntax:', original2, shallowCopy2);

// Deep Copy Example using JSON methods
let original3 = { a: 1, b: { c: 2 } };
let deepCopy1 = JSON.parse(JSON.stringify(original3));
deepCopy1.a = 10;
deepCopy1.b.c = 20;
console.log('Deep Copy with JSON methods:', original3, deepCopy1);

// Deep Copy Example using a custom recursive function
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}
let original4 = { a: 1, b: { c: 2 } };
let deepCopy2 = deepClone(original4);
deepCopy2.a = 10;
deepCopy2.b.c = 20;
console.log('Deep Copy with a custom recursive function:', original4, deepCopy2);
