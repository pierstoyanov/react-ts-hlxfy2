
const convertCookieStringToObject = (s: string): object =>  {
    const cookieObject = {};
    const cookieArray = s.split('; ');
    for (let i = 0; i < cookieArray.length; i++) {
      const [key, value] = cookieArray[i].split('=');
      cookieObject[key] = decodeURIComponent(value);
    }
    return cookieObject;
}

export default convertCookieStringToObject;
