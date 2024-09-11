import { useState, useEffect } from 'react';  
  
import ResultSet from './ResultSet';  
  
export default function Results({ query, globalSettings, selectedDataset }) {  
  const [results, setResults] = useState([]);  
  const [enableHybrid, setEnableHybrid] = useState(false);  
  const [activeResult, setActiveResult] = useState(null);  
  
  const types = [  
    {  
      id: 'bm25',  
      label: 'BM25 Text Search',  
      showChange: false,  
      theme: "dark",  
      hybrid_capable: false  
    },{  
      id: 'semantic',  
      label: 'Semantic Search',  
      hybrid_capable: true,  
      theme: "light",  
      showChange: true  
    },  
  ]  
  
  useEffect(() => {  
    console.log(enableHybrid)  
    if (query) {  
      setResults([])  
      types.forEach((type) => {  
      if (type.id === 'bm25') {  
        fetch(`api/search/${selectedDataset.index}?q=${query}&hybrid=${enableHybrid}&type=${type.id}&dataset=${selectedDataset.id}`)  
          .then((res) => res.json())  
          .then((data) => {  
            setResults((results) => {  
              return {  
                ...results,  
                [type.id]: data.response,  
              }  
            });  
          });  
      }  
      });  
    } else {  
      setResults([])  
    }  
  }, [query, enableHybrid]);  
  
  return (  
    <div className="container mx-auto py-12">  
      <div className="grid grid-cols-1 gap-8">  
        {query && results && Object.keys(results).length &&  
          types.map((type) => (  
            type.id === 'bm25' && <ResultSet  
              key={type.id}  
              index={selectedDataset.index}  
              type={type}  
              query={query}  
              results={results[type.id] || []}  
              enableHybrid={enableHybrid}  
              setEnableHybrid={setEnableHybrid}  
              activeResult={activeResult}  
              setActiveResult={setActiveResult}  
              globalSettings={globalSettings}  
            />  
          ))  
        }  
      </div>  
    </div>  
  );  
}  