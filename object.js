/**
 * Return true if value is an object (e.g. arrays, functions, objects, etc, but not including null and undefined), false otherwise.
 * @param {*} value
 * @returns {Boolean}
 */

function isObject(value) {
    if (value === null) {
        return false;
    }

    const type = typeof value;
    return type === "object" || type === "function";
}
