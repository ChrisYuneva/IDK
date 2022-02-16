import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/loading.json";

function Loading({isLoading}) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    console.log(isLoading);

    if(isLoading===true) {
        return (
            <Lottie options={defaultOptions} height={500} width={500} />
        )
    }
    else {
        return (

            <>

                <span>yhuij</span>\
            </>
        )
    }

}

export default Loading;
