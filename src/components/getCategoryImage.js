import technologia from '../assets/technologia_ikona.svg';
import programowanie from '../assets/programowanie_ikona.svg';
import motoryzacja from '../assets/motoryzacja_ikona.svg';
import historia from '../assets/historia_ikona.svg';
import kultura from '../assets/kultura_ikona.svg';

export const getCategoryImage = (category) => {
    switch(category){
        case "technology":
            return technologia;
        case "culture":
            return kultura;
        case "moto":
            return motoryzacja;
        case "program":
            return programowanie;
        default:
            return historia;
    }
}