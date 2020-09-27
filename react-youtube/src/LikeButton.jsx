import React, {useEffect, useState} from "react";

const LikeButton = () => {
    const [count, counter] = useState(0);
    const [limit, release] = useState(true);

    const countUp = () => {
        counter(count + 1)
    }

    useEffect(() => {
        document.getElementById('counter').addEventListener('click', countUp)
        if (count >= 10) {
            counter(0)
        }
        return () => {
            console.log("unmount!")
            document.getElementById('counter').removeEventListener('click', countUp)
        }
    }, [limit]);

    return (
        <>
            <button id={"counter"}>Like! : {count}</button>
            <button onClick={() => release(!limit)}>More Like!</button>
        </>
    )
}

export default LikeButton