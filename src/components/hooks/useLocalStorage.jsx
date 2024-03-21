import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)

        if(jsonValue !== null) {
            return JSON.parse(jsonValue)
        }

        return typeof initialValue === "function" ? initialValue() : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue];
}

export default useLocalStorage;