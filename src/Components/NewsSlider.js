import { useEffect, useState } from "react";
import axios from "axios";
import ReactSimplyCarousel from 'react-simply-carousel';

function Slider() {

    // call in the api
    const [articles, setArticles] = useState([]);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


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
    <div className="purple-bg">
          <div className="home-steps purple-bg-gradient w-11/12	mx-auto">
            <div className="container mx-auto">
            <h2 className="text-white pb-5">Our Recent Blog Posts</h2>

            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                responsiveProps={[
                {
                    itemsToShow: 3,
                    itemsToScroll: 3,
                    minWidth: 768
                },
                ]}
                dotsNav={{
                    show: true,
                    itemBtnProps: {
                      style: {
                        height: 16,
                        width: 16,
                        borderRadius: "50%",
                        background: "#786f99",
                        marginRight: "10px",
                        border: 0
                      }
                    },
                    activeItemBtnProps: {
                      style: {
                        height: 16,
                        width: 16,
                        borderRadius: "50%",
                        border: 0,
                        marginRight: "10px",
                        background: "#fff",
                      }
                    }
                  }}
                speed={400}
                easing="linear"
            >
              
              {articles.map((item, key) => (
                  <div className="step" key={key} style={{ width: 400, height: 420,}}>
                    <div className="step-inner">
                      <div className="text-lg white pb-4 font-bold leading-snug">{item.title}</div>
                      <p className="text-white text-sm">{item.description}</p>
                      <div className="mt-5">
                        <p className="lt-purple text-xs">{item.source_id}</p>
                      </div>
                    </div>
                  </div>
              ))}
           
             </ReactSimplyCarousel>

            </div>
          </div>
        </div>
   );
 }
 
 export default Slider;
 