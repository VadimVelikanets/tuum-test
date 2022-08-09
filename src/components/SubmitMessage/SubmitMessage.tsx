import React from 'react';
import './SubmitMessage.scss';

const SubmitMessage = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center fixed left-0 top-0 w-full z-10 bg-[#A7D0D8]">
            <div className="submit-content">
                <h4 className="mb-4 text-5xl text-center">All good!</h4>
                <p className="text-center">Thank you for your interest! You can close this form by pressing “X” on the top right corner.</p>
            </div>
        </div>
    );
};

export default SubmitMessage;