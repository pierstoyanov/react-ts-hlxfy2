/** 
 * Custom hook to use browser cookies.
 * https://medium.com/swlh/react-hooks-usecookie-hook-26ac06ff36b0 
*/
import { decode } from "punycode";
import React, {useState} from "react";
import convertCookieStringToObject from "../common/convertCookieStringToObject";

const getItem = (key: string) => 
    document.cookie.split('; ').reduce((total, currentCookie) => {
        const item = currentCookie.split("=");
        const storedKey = item[0];
        const storedValue = item[1];

        return key === storedKey ? 
        decodeURIComponent(storedValue) : total;
   }, ""); 


const setItem = (key:string, value: object, numberOfDays: number,
        sameSite: string = "Lax", secure: string = "Secure") => {
    const now = new Date();
    now.setTime(now.getTime() + (numberOfDays * 60 * 60 * 24 * 1000));
    document.cookie =
     `${key}=${JSON.stringify(value)}; expires=${now.toUTCString()}; path=/; SameSite=${sameSite}; ${secure}`;
};

const useCookie = (key: string, defaultValue: any = undefined) => {
    const getCookie = (): any => 
        convertCookieStringToObject(getItem(key)) || defaultValue;

    const [cookie, setCookie] = useState(getCookie());

    const updateCookie = (value: any, numberOfDays: number = 90) => {
        setCookie(value);
        setItem(key, value, numberOfDays);
    }

    return [cookie, updateCookie] as const;
}

export default useCookie;
