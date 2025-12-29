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
            <div style={{width: `${animatedProgress}%`, transition: '0.5s ease-in'}} className={`p-2 text-center bg-gray-400`}>{progress}%</div>
        </div>
    )
}

export default Progress;
