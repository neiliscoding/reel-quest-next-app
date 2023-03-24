"use client"

import type { FC } from 'react';

import { useEffect } from 'react';

interface errorProps {
    error: any;
    reset: any;
}

const error: FC<errorProps> = ({error, reset}) => {
    useEffect(() => {
        if (error) {
            console.error(error);
            reset();
        }
    }, [error, reset]);
        return (<div>Error: {error} <button onClick={()=>reset()}></button></div>);
}
export default error;