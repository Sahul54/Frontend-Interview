import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);
  // cache is a pure object its like a key value pair
  const [cache, setCache] = useState({});
  // optimized way to fetch data
  // Debouncing
  
  
  const data = "https://dummyjson.com/recipes/search?q=";

  const fetchData = async () => {
    
    if(cache[input]){
      console.log("Cache hit", input);
      
      setResults(cache[input]);
      return;
    }

    console.log("Api call", input);
    const response = await fetch(data + input);
    const finaldata = await response.json();
    setResults(finaldata.recipes);
    setCache(prev => ({...prev, [input]: finaldata.recipes})); 
  }

  useEffect(() => {
    // Debouncing
    const timeoutId = setTimeout(fetchData, 500);
    return () => {
      clearTimeout(timeoutId);
    }

    // if(input.length > 0){
    //   fetchData();
    // }
  }, [input])
  // console.log(results);
  
  return (
    <div className='container' >
      <h2>Autocomplete Search Bar</h2>
      <input className='input-txt'
        type="text" 
        placeholder=''
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowResult(true)}
        onBlur={() => setShowResult(false)}
        />

        { showResult && (<div className='result-container'>
          {results.map((item)=>(
            <span key={item.id} className='result'>{item.name}</span>
          ))}
        </div>)}
    </div>
  )
}

export default App
