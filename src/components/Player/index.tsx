import React from "react";
import ReactPlayer from "react-player"

interface progressPlayer {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
}

const Player:React.FC = () => {


    const callbackProgress = (state:progressPlayer ) => {
        console.log(formatNumber(state.playedSeconds))
    }

    const formatNumber = (number:number) => {
        return number.toFixed(1)
    }

    return (
        <ReactPlayer 
            url="https://nerdcast.jovemnerd.com.br/nerdcast_549_RPG_cthulhu_1.mp3"
            progressInterval={100}
            controls={true}
            onProgress={callbackProgress}
            volume={0}
            />
    )
}

export default Player