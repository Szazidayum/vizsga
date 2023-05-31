import './App.css';
import './stilus.css';
import { useEffect, useState } from 'react';
import UserService from './UserService';
import Szotar from './Szotar';


function App() {

const [temak, setTemak] = useState([]);
const [tema, setTema] = useState(0);
const [szavak, setSzavak] = useState([])
const [aktSzavak, setAktSzavak] = useState([])
const [point, setPoint] = useState(0);
const [message, setMessage] = useState("");

useEffect(() => {
  UserService.getData("tema").then((data) => {
    setTemak(data);
  });
  UserService.getData("szavak").then((data) => {
    setSzavak(data);
  });
  UserService.getData("szavak/tema/"+tema).then((data) => {
    setAktSzavak(data)
  });
  
}, [szavak, point]);

function dataChange(event){
    setTema(event.target.value);  
}

function pontszamitas(){
  setPoint(UserService.getPoint());
  setMessage(`A következő pontszámot érted el: ${point}`)
}

  return (
    <div className="App">
      <header>
      <h1>Szótár</h1>
      </header>
      <article>
      <h2>Szavak</h2>

<div className='tartalom'>


      <div className='temaSelect'>
      <select className="form-select" id="tema" onChange={dataChange}>
          <option defaultValue={""}>Válassz témát!</option>
          {temak.map((tema, i) => {
            let id = tema.id;
            return (
              <option value={id} key={i}>
                {tema.temanev}
              </option>
            );
          })}
        </select>
        </div>

        <div className='container'>
        <div className='row head'>
              <div className="col am">ANGOL</div>
              <div className="col am">MAGYAR</div>
              <div className="col am">visszajelzés</div>
              </div>
          {aktSzavak.map((szo, index) => {
              return (
                <div className='row sorok'>
                <Szotar
                  szo={szo}
                  key={index}
                /></div>
                
              );
            })}
            </div>
            </div>
            <div><button type="button" class="btn btn-primary" onClick={pontszamitas}>Pontszámítás</button></div>
            </article>
            <aside>
            {message.length > 1 ? (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      ) : (
        <div></div>
      )}
            </aside>
    </div>
  );
}

export default App;
