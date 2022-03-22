import './QApp.css';
import QuizApp from './quizApp'
import Category from './category';
import quizLogo from './assets/quizLogo.png';
import close from './assets/zamknij_x.svg';
import back from './assets/cofnij_x.svg';
import { useState } from 'react';


function QApp() {
  const [category, setCategory] = useState(null);
  return (
    <div className='mainApp'>
      <div className='headerQ'>
        <div className='back' onClick={() => setCategory(null)}><img src={back} className='back' alt='back' /></div>
        <div className='logoQ'><img src={quizLogo} className='quizLogo' alt='logo' /></div>
        <div className='close'><img src={close} className="close" alt="close" /></div>
      </div>
      {category ? <QuizApp categoryName={category} setCategory={setCategory} /> :
        <div>
          <div className='fiveCategory'><p>10 PYTAŃ / 5 KATEGORII</p></div>
          <Category setCategory={setCategory} />
        </div>
      }
    </div>
  )
}

export default QApp;
