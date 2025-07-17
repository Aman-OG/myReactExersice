

// import Greet from './components/Greet'
// import Welcome from './components/welcome'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'

// import ParentComponent from './components/ParentComponent';
//import UserGreeting from'./components/UserGreeting';
// import ClassClick from'./components/ClassClick'
//import EventBind from './components/EventBind'
// import  Square from './components/Square';
// import  Input from './components/Input';
// import  Form from './components/Form';
import { useState} from 'react'
import  Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
   const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "banana"
    },
    {
      id: 2,
      checked: false,
      item: "half kilo of rice"
    },
    {
      id: 3,
      checked: false,
      item: "3 bottle of beer"
    }
  ]);


    const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id? {...item, checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem('shoopinglist', JSON.stringify(listItems));
  }


  const handleDelete = (id) => {
    const listItems  = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoopinglist', JSON.stringify(listItems));
  }
  // const [colorValue, setColorValue] = useState('')
  return (  
    <div className="App">
           <Header />
      <Content items = {items} 
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
                  />

      <Footer length={items.length} />

      {/* // <Square colorValue={colorValue} />
      // <Input colorValue = {colorValue}
      //         setColorValue = {setColorValue} /> */}
            {/* <Form /> */}

      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}

      {/* <EventBind /> */}
      {/* <ClassClick /> */}
       {/* <FunctionClick /> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="markos" heroName="batman" />
      <p>this is children props</p>
      <Greet name="eyob" heroName="superman" />
      <Greet name="abrham" heroName="spiderman"/>
      <Welcome /> */}

     
    </div>
  );
}

export default App;
