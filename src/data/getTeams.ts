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

const teamMappings: { [key: string]: string } = {
    "Cleveland Blues": "Cleveland Guardians",
    "Cleveland Bronchos": "Cleveland Guardians",
    "Cleveland Naps": "Cleveland Guardians",
    "Cleveland Indians": "Cleveland Guardians",
    "California Angels": "Los Angeles Angels",
    "Anaheim Angels": "Los Angeles Angels",
    "Los Angeles Angels of Anaheim": "Los Angeles Angels",
    "Florida Marlins": "Miami Marlins",
    "Tampa Bay Devil Rays": "Tampa Bay Rays",
    "Montreal Expos": "Washington Nationals",
    "Washington Senators": "Minnesota Twins",
    "St. Louis Browns": "Baltimore Orioles",
    "St. Louis Brown Stockings": "St. Louis Cardinals",
    "St. Louis Perfectos": "St. Louis Cardinals",
    "Cincinnati Red Stockings": "Cincinnati Reds",
    "Cincinnati Redlegs": "Cincinnati Reds",
    "Boston Red Stockings": "Atlanta Braves",
    "Boston Beaneaters": "Atlanta Braves",
    "Boston Doves": "Atlanta Braves",
    "Boston Rustlers": "Atlanta Braves",
    "Boston Bees": "Atlanta Braves",
    "Boston Braves": "Atlanta Braves",
    "Milwaukee Braves": "Atlanta Braves",
    "Brooklyn Atlantics": "Los Angeles Dodgers",
    "Brooklyn Grays": "Los Angeles Dodgers",
    "Brooklyn Grooms": "Los Angeles Dodgers",
    "Brooklyn Bridegrooms": "Los Angeles Dodgers",
    "Brooklyn Superbas": "Los Angeles Dodgers",
    "Brooklyn Robins": "Los Angeles Dodgers",
    "Brooklyn Dodgers": "Los Angeles Dodgers",
    "New York Gothams": "San Francisco Giants",
    "New York Giants": "San Francisco Giants",
    "New York Highlanders": "New York Yankees",
    "Philadelphia Athletics": "Oakland Athletics",
    "Kansas City Athletics": "Oakland Athletics",
    "Boston Americans": "Boston Red Sox",
    "Houston Colt .45s": "Houston Astros",
    "Philadelphia Quakers": "Philadelphia Phillies",
    "Seattle Pilots": "Milwaukee Brewers",
    "Chicago White Stockings": "Chicago Cubs",
    "Chicago Colts": "Chicago Cubs",
    "Chicago Orphans": "Chicago Cubs",
    "Pittsburgh Alleghenys": "Pittsburgh Pirates",
  };

export const currentTeams = (team: string) => {
    return (teamMappings[team] || team);
}

export default getTeams;