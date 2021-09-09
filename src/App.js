import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import axios from 'axios';

const App= ()=> {

  const [items,setItems]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [query,setQuery]=useState('')

  useEffect(()=>{
    const fetchItems=async()=>{
      const result = await axios(`
      https://api.themoviedb.org/3/tv/70523-dark/aggregate_credits?api_key=aee49574a99c974c2aa58699647cf067&name=${query}`)
      // console.log(`https://www.themoviedb.org/t/p/w150_and_h150_face/${result.data.cast[1].profile_path}`);
      setItems(result.data.cast)
      setIsLoading(false)
    }

    fetchItems()
  },[query])

  return (
    <div className="container">
     <Header />
     <Search getQuery={(q)=>setQuery(q)} />
     <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
