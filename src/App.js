
import { useState } from 'react';
import { Form } from 'reactstrap';
import './App.css';
import { Card } from './components/cards/dateCard';
import { PetF } from './components/form/petForm';

function App() 
{
  const [cards, setCards] = useState([]);
  console.log(cards)

    return (
      <> 

        <h2>Administrador de Pacientes</h2> 
          <div className='container'>
            <div className='dateContainer'> 
                <div className='one-half-column'>
                  <PetF setCards={setCards}/>
                </div>
                <div className='one-half-column'>
                  {cards.length ? cards.map((e,key)=>(
                   <Card key={key} {...e} /> 
                  )): <h4>No hay citas:</h4>}
                </div>
              </div>
            </div>
        </>
    );

}

export default App;
