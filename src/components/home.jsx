import Banner from "./banner";
import Categories from "./categories";
import Videos from "./vedio";

const Home = () => {
    return ( 
        <div className="home">
            <Categories/>
            <Banner/>
            <Videos/>
        </div>
     );
}
 
export default Home;