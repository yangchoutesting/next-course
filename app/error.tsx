"use client";
import React from "react";

interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
    console.log(error);
    return (
        <>
            <button className="btn" onClick={() => reset()}>
                Retry
            </button>
            <div> An unexpected error occurred. </div>;
        </>
    );
};

export default ErrorPage;
