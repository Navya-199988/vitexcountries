import React, { useState, useEffect } from 'react';
// import './App.css';



const Card = ({ name, flag }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '200px',
            width: '200px',
            gap: '5px',
            alignItems: 'center',
            border: '0.5px solid black',
            borderRadius: '5px',
            padding: '10px',
            textAlign: 'center'
        }}>
            <img src={flag} alt={`${flag} "of" ${name}`} style={{ width: '100%', height: 'auto' }} />
            <h3>{name}</h3>
        </div>
    );
};
const API_ENDPOINT = 'https://xcountries-backend.azurewebsites.net/all';

function App() {
  const [countries, setCountries] = useState([]);
    useEffect(()=> {
        const fetchData = async () => {
            try {
                const res = await fetch(API_ENDPOINT);
                const jsonRes = await res.json();
                setCountries(jsonRes);
            } catch(error){
                console.error("fetching data:" + error)
            };
            
            

        }
        fetchData();

    },[])
    return(
        <div style={{
            display:'flex',
            flexWrap:'wrap',
            gap: '5px'
        }}>
            {countries.map(({name,flag,abbr}) => (
                <Card name={name} flag={flag} key={abbr}/>
            ))}
        </div>
    )
}


export default App;

