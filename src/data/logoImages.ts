import angels from '../assets/angels.svg'
import astros from '../assets/astros.svg'
import athletics from '../assets/athletics.svg'
import bluejays from '../assets/bluejays.svg'
import braves from '../assets/braves.svg'
import brewers from '../assets/brewers.svg'
import cardinals from '../assets/cardinals.svg'
import cubs from '../assets/cubs.svg'
import diamondbacks from '../assets/dbacks.svg'
import dodgers from '../assets/dodgers.svg'
import giants from '../assets/giants.svg'
import guardians from '../assets/indians.svg'
import mariners from '../assets/mariners.svg'
import marlins from '../assets/marlins.svg'
import mets from '../assets/mets.svg'
import nationals from '../assets/nationals.svg'
import orioles from '../assets/orioles.svg'
import padres from '../assets/padres.svg'
import phillies from '../assets/phil.svg'
import pirates from '../assets/pirates.svg'
import rangers from '../assets/rangers.svg'
import rays from '../assets/rays.svg'
import redsox from '../assets/redsox.svg'
import reds from '../assets/reds.svg'
import rockies from '../assets/rockies.svg'
import royals from '../assets/royals.svg'
import tigers from '../assets/tigers.svg'
import twins from '../assets/twins.svg'
import white_sox from '../assets/whitesox.svg'
import yankees from '../assets/yankees.svg'

export interface Logo {
    name: string;
    image: string;
}

// Define the Map with string keys and array values
const locationMapping: Map<string, number[]> = new Map<string, number[]>();

// Populate the map using stringified keys
locationMapping.set(JSON.stringify([1, 1]), [0, 3]);
locationMapping.set(JSON.stringify([2, 1]), [1, 3]);
locationMapping.set(JSON.stringify([3, 1]), [2, 3]);
locationMapping.set(JSON.stringify([1, 2]), [0, 4]);
locationMapping.set(JSON.stringify([2, 2]), [1, 4]);
locationMapping.set(JSON.stringify([3, 2]), [2, 4]);
locationMapping.set(JSON.stringify([1, 3]), [0, 5]);
locationMapping.set(JSON.stringify([2, 3]), [1, 5]);
locationMapping.set(JSON.stringify([3, 3]), [2, 5]);

export default locationMapping;

export const logos: Logo[] = [
    { name: 'Los Angeles Angels', image: angels },
  { name: 'Houston Astros', image: astros },
  { name: 'Oakland Athletics', image: athletics },
  { name: 'Toronto Blue Jays', image: bluejays },
  { name: 'Atlanta Braves', image: braves },
  { name: 'Milwaukee Brewers', image: brewers },
  { name: 'St. Louis Cardinals', image: cardinals },
  { name: 'Chicago Cubs', image: cubs },
  { name: 'Arizona Diamondbacks', image: diamondbacks },
  { name: 'Los Angeles Dodgers', image: dodgers },
  { name: 'San Francisco Giants', image: giants },
  { name: 'Cleveland Guardians', image: guardians },
  { name: 'Seattle Mariners', image: mariners },
  { name: 'Miami Marlins', image: marlins },
  { name: 'New York Mets', image: mets },
  { name: 'Washington Nationals', image: nationals },
  { name: 'Baltimore Orioles', image: orioles },
  { name: 'San Diego Padres', image: padres },
  { name: 'Philadelphia Phillies', image: phillies },
  { name: 'Pittsburgh Pirates', image: pirates },
  { name: 'Texas Rangers', image: rangers },
  { name: 'Tampa Bay Rays', image: rays },
  { name: 'Boston Red Sox', image: redsox },
  { name: 'Cincinnati Reds', image: reds },
  { name: 'Colorado Rockies', image: rockies },
  { name: 'Kansas City Royals', image: royals },
  { name: 'Detroit Tigers', image: tigers },
  { name: 'Minnesota Twins', image: twins },
  { name: 'Chicago White Sox', image: white_sox },
  { name: 'New York Yankees', image: yankees }
]