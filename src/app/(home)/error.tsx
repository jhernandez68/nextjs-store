"use client";

import { useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

//react-error-boundary
export default function Error({error, reset}: ErrorProps){

    useEffect(() => {
        console.log(error)
    })
    return(
        <div>
            <h1>Ha ocurrido un error :C</h1>
            <button onClick={reset}>Intentar de nuevo</button>
        </div>
    )
}