import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, fetchApi } from '../utils/api';

function Home() {

    // call in the api
    const [response, setResponse] = useState([]);


    const fetchQuotes = async () => {
      try {
        const res = await axios.get(`https://crypto-news16.p.rapidapi.com/news/all`, {
          headers: {
            'X-RapidAPI-Key': '6228b2bdc3msh1a22104a445badap19a6c7jsn9b0796583e12',
            'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
          }
        });
        // Set the response to the state.
        setResponse(res.data);
        // console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };



    useEffect(() => {
      fetchQuotes();
    }, []);
    
  return (
    <div className="App">
      Home
       {response.map((item) => (
            <div key={item.id}>
            <h2>{item.text}</h2>
            </div>
        ))}
    </div>
  );
}

export default Home;
