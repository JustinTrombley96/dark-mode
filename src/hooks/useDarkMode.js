import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = () => { 
    const [darkValue, setDarkValue] = useLocalStorage('Dark Key')
    useEffect(() => {
        let body = document.querySelector("body")
        darkValue 
            ? body.classList.add("dark-mode")
            : body.classList.remove("dark-mode")
    }, [darkValue])
    return [darkValue, setDarkValue];
}