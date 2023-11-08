import './App.css';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';


function App() {

  const [ selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);

};


  return (
    <div className="App">
      <Header/>
      <main>
        <h2>Our Services</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description= {CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
         </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton onClick={() => handleClick('Weights')}>Weights</TabButton>
          <TabButton onClick={() => handleClick('Trx')}>TRX</TabButton>
          <TabButton onClick={() => handleClick('Gymnastics')}>Gymnastics</TabButton>
          <TabButton onClick={() => handleClick('Diet')}>Diet</TabButton>
          </menu>
            
              {!selectedTopic ?  <p>Please select a Service.</p> : 
               <div id='tab-content'>
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <p>{EXAMPLES[selectedTopic].example}</p>
                
                </div>}
            
             
          
        </section>
      </main>
    </div>
  );
}

export default App;

