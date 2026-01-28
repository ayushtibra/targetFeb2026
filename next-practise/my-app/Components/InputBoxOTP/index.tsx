import React, { useEffect, useRef, useState } from 'react';

const InputBox = ({ length }) => {
    const [otp, setOtp] = useState(Array(length).fill(""));
    const ref = useRef([]);

    useEffect(() => {
        ref.current[0]?.focus()
    }, [])

    const handleChange = (value, index) => {
        // if(isNaN(value)) return;

        if (/^\d?$/.test(value) && value != '') {
            const newOTP = [...otp];
            newOTP[index] = value;
            setOtp(newOTP);
            value && ref.current[index + 1]?.focus();

        }


    }

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const newOtp = [...otp];

            if (newOtp[index]) {
                // Case 1: clear current value
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                // Case 2: move back & clear previous
                ref.current[index - 1]?.focus();
                newOtp[index - 1] = "";
                setOtp(newOtp);
            }
        }
    };

    console.log('first', otp)

    return (
        <div className='w-full max-w-[1000px] m-auto mt-4 text-center'>
            {otp.map((item, index) => (
                <input
                    key={index}
                    className='border w-[80px] p-4 text-center font-xl'
                    type='text'
                    value={otp[index]}
                    maxLength={1}
                    ref={input => ref.current[index] = input}
                    onChange={(e => handleChange(e.target.value, index))}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                />
            ))}
        </div>
    );
};

export default InputBox;