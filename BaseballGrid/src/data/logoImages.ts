import angels from '../assets/angels.svg'
import astros from '../assets/astros.svg'
import athletics from '../assets/athletics.svg'
import bluejays from '../assets/bluejays.svg'
import braves from '../assets/braves.svg'
import brewers from '../assets/brewers.svg'

export interface Logo {
    name: string;
    image: string;
}

export const logos: Logo[] = [
    {name: 'angels', image: angels},
    {name: 'astros', image: astros},
    {name: 'athletics', image: athletics},
    {name: 'bluejays', image: bluejays},
    {name: 'braves', image: braves},
    {name: 'brewers', image: brewers},    
]