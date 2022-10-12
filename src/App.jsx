import { useEffect, useState } from 'react'
import { getData } from "./getData";
import { First } from "./components/First";


function App() {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [unit, setUnit] = useState('metric')

 useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        
    })
 }, [])
 

  const cambio = (text)=>{
      setUnit(text);
      
  }

  const functi = async()=>{
      const dt =  await getData(lat,lng,unit)
      setData(dt);
  }

  useEffect(() => {
      functi();

  }, [unit])
  
  
  
  
  

return (
  <>   
      {
          data.map((list,index)=>(
              <First key={index} values={list} change={cambio}/>
          ))
      }
  </>
)
}

export default App
