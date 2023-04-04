const convertCookieValue = (s: string) : object | string => {
    /** Convert a string to object if possible, else returns the same string */
    if (s === "") {
        return s;
    }

    try {
        return JSON.parse(s);
    }
    catch (SyntaxError) {
        console.log("error in cookie object string")
        return s;
    }
}

export default convertCookieValue;