function isObject(value) {
    if (value === null) {
        return false;
    }

    const type = typeof value;
    return type === "object" || type === "function";
}
