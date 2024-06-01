import { Player } from "../hooks/getPlayer";

const getTeams = (player: Player) => {
    let teams = new Map<string, number>;
    let returnTeams: string[] = [];
    let playerStatsValue = 0;
    let playerStatsLength = 0;
    for(let i = 0; i<player.stats.length; i++){
        if(player.stats[i].type.displayName === "yearByYear" && player.stats[i].splits.length > playerStatsLength){
            playerStatsLength = player.stats[i].splits.length;
            playerStatsValue = i;
        }
    }
    for(let i = 0; i<playerStatsLength; i++){
        // teams.has to check if key already exists
        if(!player.stats[playerStatsValue].splits[i].team) continue;
        const team = player.stats[playerStatsValue].splits[i].team.name;
        if(!teams.has(team)){
            returnTeams.push(team);
            teams.set(team, 1);
        }
    }
  return (
    returnTeams
  )
}

export default getTeams