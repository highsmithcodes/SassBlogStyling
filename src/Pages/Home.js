import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";

function Home() {

    // call in the api
    const [articles, setArticles] = useState([]);


    const fetchQuotes = async () => {
      try {
        const res = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_1921669fd3cbf8d0e89e461f35df1f3452b5f&q=crypto`, {
          // headers: {
          //   'x-rapidapi-host': 'free-news.p.rapidapi.com',
          //   'x-api-key': 'j8qeDKN6-XI66F3rxeyXg88SNaKb7EMcX-VUPmG-IuE'
          // }
        });
        // Set the response to the state.
        setArticles(res.data.results);
        console.log(res.data.results)
      } catch (err) {
        console.log(err);
      }
    };



    useEffect(() => {
      fetchQuotes();
    }, []);
    
  return (
    <div className="App">
        <Nav />

        <div className="hero purple-bg">
          <div className="hero-inner w-95m container">
            <div className="hero-content">
              <div className="col-50">
                <div className="sub-title-small lt-purple">The most informative, cryptocurrency digital platform</div>
                <h1 className="white">Elite Informative Platform</h1>
                <p className="text-3xl font-bold underline">Specialized currated informative cryptocurrency center with you in mind.</p>
                <div className="hero-buttons">
                  <Link className="button purple" to="/blog/">View Information</Link>
                  <Link className="button transparent" to="/intro/">Get Started</Link>
                </div>
              </div>
              <div className="col-50">

              </div>
            </div>
          </div>
        </div>


        <div className="home-steps purple-bg">
          <h2 className="white">Private peer-to-peer exchanging</h2>
          <ul className="steps">
            <li>
              <div className="step-icon">

              </div>
              <div className="step-content">
                <h6 className="white">Create an account</h6>
                <p className="white">Or signup with web3. LocalCryptos supports all major ethereum wallets including</p>
              </div>
            </li>
            <li>
              <div className="step-icon">

              </div>
              <div className="step-content">
                <h6 className="white">See who's buying and selling</h6>
                <p className="white">Anyone can post an add to buy or sell crypto. Find a buyer or seller who suits you.</p>
              </div>
            </li>
            <li>
              <div className="step-icon">

              </div>
              <div className="step-content">
                <h6 className="white">Trade information</h6>
                <p className="white">When you find an ad you're happy with, open a trade. Chose the amount you want to buy or sell, then lock in the exchange rate.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="home-services purple-bg">
          <div className="home-services-inner purple-bg-light w-95">
            <div className="hero-content">
                <div className="col-50">
                  <h2 className="white">Learn and Trade directly from a secure account</h2>
                </div>
                <div className="col-50">
                </div>
            </div>
          </div>
        </div>

       {articles.map((item, key) => (
            <div key={key}>
              <img src={item.image_url} width="150px" height="150px" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            </div>
        ))}
    </div>
  );
}

export default Home;
