import { Link
} from "react-router-dom";

function Footer() {
   return (
     <div className="footer purple-bg py-5">
        <div className="container mx-auto flex flex-row py-5">
            <div className="section flex flex-col w-1/4 text-left py-5">
                <p className="text-lg text-white font-bold pb-3">Products</p>
                <div className="flex flex-col">
                    <Link to="/" className="lt-purple">Home</Link>
                    <Link to="/blog" className="lt-purple">Blog</Link>
                    <Link to="/tutorials" className="lt-purple">Tutorials</Link>
                    <Link to="/partnerships" className="lt-purple">Partnerships</Link>
                </div>
            </div>
            <div className="section flex flex-col w-1/4 text-left py-5">
                <p className="text-lg text-white font-bold pb-3">Products</p>
                <div className="flex flex-col">
                    <Link to="/" className="lt-purple">Home</Link>
                    <Link to="/blog" className="lt-purple">Blog</Link>
                    <Link to="/tutorials" className="lt-purple">Tutorials</Link>
                    <Link to="/partnerships" className="lt-purple">Partnerships</Link>
                </div>
            </div>
            <div className="section flex flex-col w-1/4 text-left py-5">
                <p className="text-lg text-white font-bold pb-3">Products</p>
                <div className="flex flex-col">
                    <Link to="/" className="lt-purple">Home</Link>
                    <Link to="/blog" className="lt-purple">Blog</Link>
                    <Link to="/tutorials" className="lt-purple">Tutorials</Link>
                    <Link to="/partnerships" className="lt-purple">Partnerships</Link>
                </div>
            </div>
            <div className="section flex flex-col w-1/4 text-left py-5">
                <p className="text-lg text-white font-bold pb-3">Products</p>
                <div className="flex flex-col">
                    <Link to="/" className="lt-purple">Home</Link>
                    <Link to="/blog" className="lt-purple">Blog</Link>
                    <Link to="/tutorials" className="lt-purple">Tutorials</Link>
                    <Link to="/partnerships" className="lt-purple">Partnerships</Link>
                </div>
            </div>
        </div>
        <div className="container flex justify-between mx-auto items-center btm-footer pt-3">
            <div className="flex flex-row">
                <Link to="/" className="lt-purple mr-4">Home</Link>
                <Link to="/blog" className="lt-purple mr-4">Blog</Link>
                <Link to="/tutorials" className="lt-purple mr-4">Tutorials</Link>
                <Link to="/partnerships" className="lt-purple mr-4">Partnerships</Link>
            </div>
            <div className="flex flex-row items-center">
                <a href="/" className="button transparent mr-4">Home</a>
                <Link to="/blog" className="lt-purple mr-4">Blog</Link>
                <Link to="/tutorials" className="lt-purple mr-4">Tutorials</Link>
                <Link to="/partnerships" className="lt-purple">Partnerships</Link>
            </div>
        </div>
     </div>
   );
 }
 
 export default Footer;
 