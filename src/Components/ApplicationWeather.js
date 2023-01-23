import React,{useState,useEffect} from 'react'

function ApplicationWeather() {

    const [cityname,setCityName]  = useState(null)
    const [searchcity,setSearchCity] = useState("")
    const [idButtonSearch,setIdButtonSearch] = useState("")

    useEffect(() => {
        const fetchApi = async() => {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${idButtonSearch}&units=metric&appid=d6e4d9849877db059e8e746b7638b608`;
            const response = await fetch(url);
            const rejson = await response.json();
            setCityName(rejson.main)

        }
        fetchApi();
      
    },[idButtonSearch])

    const handleLogin = () => {
        setIdButtonSearch(searchcity)
    }
    
  return (
    <div className='conatiner'>
        <div><input type="text"  onChange={(e) => setSearchCity(e.target.value)}/></div>
        <div><button onClick={handleLogin}>Search</button></div>
        {!cityname ? <div>Data Not Found</div> : <div><h1>{cityname.temp}°C</h1></div>}   
      
    </div>
  )
}

export default ApplicationWeather
