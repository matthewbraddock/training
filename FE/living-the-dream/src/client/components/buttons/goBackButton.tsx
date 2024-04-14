import React from "react";
import { useNavigate } from "react-router-dom";

export const GoBackButton = ({ className }: { className?: string }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button className={`button__go-back ${className}`} onClick={handleGoBack}>
            Go Back
        </button>
    );
};