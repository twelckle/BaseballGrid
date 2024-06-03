import {Player} from "../hooks/getPlayer";

const getPlayerYears = (player: Player) => {
    if (!player.stats) return " ";
    let firstYear = "";
    let lastYear = "";
    let playerStatsValue = 0;
    let playerStatsLenth = 0;
    for(let i = 0; i<player.stats.length; i++){
        if(player.stats[i].type.displayName === "yearByYear" && player.stats[i].splits.length > playerStatsLenth){
            playerStatsLenth = player.stats[i].splits.length;
            playerStatsValue = i;
        }
    }
    firstYear = player.stats[playerStatsValue].splits[0].season
    lastYear = player.stats[playerStatsValue].splits[playerStatsLenth-1].season
  return (
    "" + firstYear + " - " + lastYear
  )
}

export default getPlayerYears