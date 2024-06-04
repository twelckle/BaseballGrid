import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

export interface Team {
  name: string;
}

export interface Split {
  season: string;
  team: Team;
}

export interface DisplayName {
  displayName: string;
}

export interface PlayerStats {
  splits: Split[];
  type: DisplayName;
}

// Example interface for the overall player, including stats
export interface Player {
  id: number;
  fullName: string;
  stats: PlayerStats[];
}
export interface People {
  people: Player[];
}

interface Props {
  userInput: string;
}

export const getPlayer = ({ userInput }: Props) => {
  const [playerInfo, setPlayerInfo] = useState<Player[] | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch data from the API and update the state

    setLoading(true);
    const controller = new AbortController();
    axios
      .get<People>(
        "https://statsapi.mlb.com/api/v1/people/search?names=" +
          userInput +
          "&hydrate=awards,stats(group=[hitting,pitching],type=[career,yearByYear])",
        { signal: controller.signal }
      )
      .then((response) => {
        const players = response.data.people;
        setPlayerInfo(players);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [userInput]);

  return { playerInfo, error, isLoading };
};

export default getPlayer;
