
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/welcome'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
function App() {
  return (  
    <div className="App">
      <ParentComponent />
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
