
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetins';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
          <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth="1992-07-14"
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth="1988-05-11"
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />

    <h1>Greetings</h1>    
    <div className='greetingsBox'>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>

    <h1>Random</h1> 
    <div className='randomBox'>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>

    <h1>BoxColor</h1> 
    <div className='boxColorBox'>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>


    </div>
  );
}

export default App;
