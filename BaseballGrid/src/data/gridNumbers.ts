import { FaLetterboxd } from "react-icons/fa6";
import { LiaEthernetSolid } from "react-icons/lia";

export const generateUniqueRandomNumbers = () => {
    const numbers = new Set<number>();
  
    while (numbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 30);
      numbers.add(randomNumber);
    }
  
    return Array.from(numbers);
  };
  

export interface gridComponent {
    location: number[];
    image: string;
    name: string;
}

export interface gameGrid {
  grid: gridComponent[];
}


export let gridNumbers: gridComponent[] = [
    { location: [0, 0], image: "", name: ""},
    { location: [1, 0], image: "", name: ""},
    { location: [2, 0], image: "", name: ""},
    { location: [3, 0], image: "", name: ""},
    { location: [0, 1], image: "", name: ""},
    { location: [1, 1], image: "", name: ""},
    { location: [2, 1], image: "", name: ""},
    { location: [3, 1], image: "", name: ""},
    { location: [0, 2], image: "", name: ""},
    { location: [1, 2], image: "", name: ""},
    { location: [2, 2], image: "", name: ""},
    { location: [3, 2], image: "", name: ""},
    { location: [0, 3], image: "", name: ""},
    { location: [1, 3], image: "", name: ""},
    { location: [2, 3], image: "", name: ""},
    { location: [3, 3], image: "", name: ""},
  ];