import React from "react";
import ReactPlayer from "react-player"

interface progressPlayer {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
}

interface Data {
    time: string;
    duration: string;
    nerdcast: number;
    content: Infos
}

type Infos = 
| {
    type: "roll";
    char: "Don Azaghal" | "Thomas Faraday" | "Leonel Caldela (Mestre)" | "Giacomo 'Búfalo' Di Monti" | "Stephen H. P. Veinkman" | "Jimmy O' Flannegan" | "Billy";
    dice: "d4" | "d6" | "d8" | "d10" | "d12" | "d20" | "d100";
    ammount: number;
    uncertainRoll?: boolean;
    testType?: string;
    result: number;
} 
| {
    type: "refference";
    title: string;
    content: string;
    externalUrl?: string;
}
| {
    type: "fan-handout";
    title?: string;
    info?: string;
    contentType: "text" | "image" | "video";
    contentUrl?: string;
    creditsText: string;
    creditsUrl?: string;
}
| {
    type: "handout";
    title: string;
    info?: string;
    contentType: "text" | "image" | "video";
    contentUrl?: string;
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