import './category.css';
import technologia from './assets/technologia_ikona.svg';
import programowanie from './assets/programowanie_ikona.svg';
import motoryzacja from './assets/motoryzacja_ikona.svg';
import historia from './assets/historia_ikona.svg';
import kultura from './assets/kultura_ikona.svg';

const Category = (props) => {
    return <div className='category-main-flex'>
    <div className='category-main'>
        <div className='buttons' onClick={()=>props.setCategory("technology")}>
            <img src={technologia} alt='tech'/>
            <hr/>
            <p>TECHNOLOGIA</p>
        </div>
        <div className='buttons' onClick={()=>props.setCategory("program")}>
            <img src={programowanie} alt='program'/>
            <hr/>
            <p>PROGRAMOWANIE</p>
        </div>
        <div className='buttons' onClick={()=>props.setCategory("moto")}>
            <img src={motoryzacja} alt='moto'/>
            <hr/>
            <p>MOTORYZACJA</p>
        </div>
        <div className='buttons' onClick={()=>props.setCategory("history")}>
            <img src={historia} alt='history'/>
            <hr/>
            <p>HISTORIA</p>
        </div>
        <div className='buttons' onClick={()=>props.setCategory("culture")}>
            <img src={kultura} alt='cutlure'/>
            <hr/>
            <p>KULTURA</p>
        </div>
    </div>
    </div>
}

export default Category;