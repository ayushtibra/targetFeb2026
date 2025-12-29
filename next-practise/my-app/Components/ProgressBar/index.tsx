import { useEffect, useState } from "react";

const Progress = ({progress}) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setAnimatedProgress(progress)
        },100)
    },[progress]);

    return (
        <div className="border rounded-xl w-full max-w-[1000px] m-auto mt-4 overflow-hidden">
            <div style={{width: `${animatedProgress}%`}} className={`p-2 text-center bg-gray-400 transition duration-500 ease-in`}>{animatedProgress}%</div>
        </div>
    )
}

export default Progress;
