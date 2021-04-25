import {useState} from 'react'

export const useCounter = ( initialState = 10) => {
    
    const [contando, setState] = useState(initialState)
    
    
    const incrementar = () => {
            setState(contando + 1)
    }

    
    const decrementar = () => {
        setState(contando - 1)
    }

    
    const resetear = () => {
        setState(initialState)
    }

    return {
        contando,
        incrementar,
        decrementar,
        resetear
    }
}