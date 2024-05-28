
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
}


export const gridNumbers: gridComponent[] = [
    { location: [0, 0] },
    { location: [1, 0] },
    { location: [2, 0] },
    { location: [3, 0] },
    { location: [0, 1] },
    { location: [1, 1] },
    { location: [2, 1] },
    { location: [3, 1] },
    { location: [0, 2] },
    { location: [1, 2] },
    { location: [2, 2] },
    { location: [3, 2] },
    { location: [0, 3] },
    { location: [1, 3] },
    { location: [2, 3] },
    { location: [3, 3] },
  ];