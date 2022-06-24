import { useState } from 'react';
import styles from './App.module.css';
import imageLogo from './assets/images/powered.png';
import { GridItem } from './components/GridItem';
import { levels, calculateImc } from './helpers/imc';

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weigthField, setWeigthField] = useState<number>(0);

  const handleCalculeteImc = () =>{
    if(heightField && weigthField){

    }else{
      alert("Digite todos os campos!");
    }
  }

  return (
    <div className={styles.main}>
        <header>
          <div className={styles.headerContainer}>
            <img src={imageLogo} alt="logo" width={150} />
          </div>
        </header>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule Seu IMC</h1>
            <p>IMC é a sigla para Índice de Massa Corpória, parâmetro  adotado pela Organizção Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

            <input 
            type="number" 
            placeholder="Digite Sua Altura ex: 1.5 (em Metros)" 
            value={heightField > 0 ? heightField : ''} 
            onChange={ e => setHeightField(parseFloat(e.target.value))} />

            <input 
            type="number" 
            placeholder="Digite Seu Peso ex: 1.5 (em Kg)" 
            value={weigthField > 0 ? weigthField : ''} 
            onChange={ e => setWeigthField(parseFloat(e.target.value))} />

            <button onClick={handleCalculeteImc}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem  key={key} item={item}/>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
