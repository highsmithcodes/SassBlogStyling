import { Link } from "react-router-dom";
import Slider from "../Components/NewsSlider";

function Home() {
    
  return (
    <>

        <div className="hero purple-bg">
          <div className="hero-inner w-11/12 mx-auto">
            <div className="hero-content">
              <div className="col-50">
                <div className="sub-title-small lt-purple">The most informative, cryptocurrency digital platform</div>
                <h1 className="text-white leading-none">Elite Informative Platform</h1>
                <p className="text-3xl font-bold lt-purple">Specialized currated informative cryptocurrency center with you in mind.</p>
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
          <div className="container mx-auto">
          <h2 className="text-white leading-none">Private peer-to-peer exchanging</h2>

            <div className="columns-3 py-5">
              <div className="step">
                <div className="step-icon"></div>
                <div className="step-content">
                  <h6 className="text-2xl text-white font-bold py-5">Create an account</h6>
                  <p className="text-white">Or signup with web3. LocalCryptos supports all major ethereum wallets including</p>
                </div>
              </div>
              <div className="step">
                <div className="step-icon"></div>
                <div className="step-content">
                  <h6 className="text-2xl text-white font-bold py-5">See who's buying and selling</h6>
                  <p className="text-white">Anyone can post an add to buy or sell crypto. Find a buyer or seller who suits you.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-icon"></div>
                <div className="step-content">
                  <h6 className="text-2xl text-white font-bold py-5">Trade information</h6>
                  <p className="text-white">When you find an ad you're happy with, open a trade. Chose the amount you want to buy or sell, then lock in the exchange rate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-services purple-bg">
          <div className="home-services-inner purple-bg-light w-11/12 mx-auto">
            <div className="hero-content columns-2">
                <div>
                  <h2 className="text-white leading-none text-left">Learn and Trade directly from a secure account</h2>
                </div>
                <div className="columns-2">
                  <div className="w-48">
                    <p className="text-2xl text-white font-bold pb-5">Escrow Service</p>
                    <p className="text-white">Lorem ipsum dolor sit amet, has ne veniam aliquip corpora. Ex omnis voluptua mei, mea in tale fastidii. Te sed libris viderer integre. Usu enim ignota ei. Eu epicurei urbanitas forensibus his, falli pertinax evertitur ex mel.
</p>
                  </div>
                  <div className="w-48">
                    <p className="text-2xl text-white font-bold pb-5">Escrow Service</p>
                    <p className="text-white">Lorem ipsum dolor sit amet, has ne veniam aliquip corpora. Ex omnis voluptua mei, mea in tale fastidii. Te sed libris viderer integre. Usu enim ignota ei. Eu epicurei urbanitas forensibus his, falli pertinax evertitur ex mel.
</p>
                  </div>
                </div>
            </div>

            
            <div>
            <div className="container mx-auto py-8">
              <div className="w-2/3 mx-auto">
                <details className="p-4">
                    <summary className="font-semibold text-white">How to create Accordion (FAQ) in react ?</summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-white">
                            React with Tailwind CSS Faq Accordion 1
                        </p>
                    </div>
                </details>
                <details className="p-4">
                    <summary className="font-semibold text-white">
                        How to use tailwind css 3 in react
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-white">
                        React with Tailwind CSS Faq Accordion 2
                        </p>
                    </div>
                </details>
                <details className="p-4">
                    <summary className="font-semibold text-white">
                        How to install Tailwind CSS 3 ?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-white">
                        React with Tailwind CSS Faq Accordion 3
                        </p>
                    </div>
                </details>
                <details className="p-4">
                    <summary className="font-semibold text-white">
                        How to send feedback ?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-white">
                        React with Tailwind CSS Faq Accordion 4
                        </p>
                    </div>
                </details>
                </div>
            </div>

            <div className="container mx-auto py-5">
              <div className="text-center my-5">
                <a href="#" className="button white mr-5">View Marketplace</a>
                <a href="#" className="button transparent">Get Started</a>
              </div>
            </div>
        </div>
          </div>
        </div>

        <div className="purple-bg py-5">
          <div className="container mx-auto py-5 my-5">
            <h2 className="text-white my-0">Install for your Browser</h2>
            <div className="text-center my-5">
              <a href="#" className="button transparent">Install Extension for Safari</a>
            </div>
            <p className="text-white pt-5 w-8/12 mx-auto">No eos persius deseruisse intellegebat, ne iriure denique persecuti per. Liber omittantur eu usu. Te verear nostrum omittantur pri, usu deleniti gubergren ad. Alii veritus ex eam.</p>
          </div>
        </div>

        <Slider />
    </>
  );
}

export default Home;
