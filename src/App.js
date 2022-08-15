
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetins';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import maxence from './assets/images/maxence.png';
import maxenceGlasses from './assets/images/maxence-glasses.png';
import Dice from './components/Dice';
import Carousel from './components/Carousel';


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
      <BoxColor r={220} g={0} b={0} />
      <BoxColor r={18} g={255} b={0} />
    </div>

    <h1>CreditCard</h1>
    <div className='creditCardBox'>
    <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" 
    />
    
    <CreditCard
      type="Master Card"
      number="0123456789010995"
      expirationMonth={3}
      expirationYear={2021}
      bank="N26"
      owner="Maxence Bouret"
      bgColor="#eeeeee"
      color="#222222"
    />
    
    <CreditCard
      type="Visa"
      number="0123456789016984"
      expirationMonth={12}
      expirationYear={2019}
      bank="Name of the Bank"
      owner="Firstname Lastname"
      bgColor="#ddbb55"
      color="white" 
    />
    </div>

    <h1>Rating</h1> 
    <div className='ratingBox'>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      
    </div>

    <h1>DriverCard</h1> 
    <div className='driverCardBox'>
    
    <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
        }}
/>

    <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
        }}
/>
    </div>

    <h1>LikeButton</h1>
    <div className='likeButtonBox'>
    <LikeButton /> 
    <LikeButton />
    </div>

    <h1>ClickablePicture</h1>
    <div className='clickablePic'>
    <ClickablePicture img={maxence} imgClicked={maxenceGlasses} />
    </div>

    <h1>Dice</h1>
    <div className='Dice'>
    <Dice />
    </div>

    <h1>Carousel</h1>
    <div className='Carousel'>
    <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
    </div>

    


    </div>
  );
}

export default App;

