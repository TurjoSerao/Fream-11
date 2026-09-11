import React, { use } from 'react';

interface PlayersProps {
    playersPromise: Promise<Iplayer[]>
}

const Players = ({playerPromise}: PlayersProps) => {
    const players = use(playerPromise)
    console.log(players, "players");


    
    return <div>

    </div>
};

export default Players;