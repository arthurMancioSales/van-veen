"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Um error inesperado aconteceu!</h2>
            <button onClick={() => reset()}>Tentar novamente</button>
        </div>
    );
}
