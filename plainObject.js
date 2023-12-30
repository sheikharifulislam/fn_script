/**
 * Return true if value is a plain object, false otherwise (for arrays, functions, etc) also Object.prototype or an object created via Object.create(null) is valid plain object.
 * @param {*} value
 * @returns {Boolean}
 */

function isPlainObject(value) {
    if (value === null || value === undefined) {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}
