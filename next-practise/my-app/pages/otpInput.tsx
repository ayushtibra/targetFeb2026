import InputBox from '@/Components/InputBoxOTP';
import React from 'react';

const otpInput = () => {
    return (
        <div>
            <InputBox length={6} />
        </div>
    );
};

export default otpInput;