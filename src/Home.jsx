
import CardStreamList from "./components/Stream/CardStreamList";
import Trends from "./components/Trends/Trends";
import Categories from "./components/Categories/Categories";
import "./Home.scss"


function Home() {

    return (
        <>
            <div className="image_back_container">
                <img className="image" src="./public/background/zelda.jpeg" alt="" />
            </div>
            <Trends />
            <CardStreamList />
            <div className="image_back_container">
                <img className="image" src="./public/background/horizon.jpeg" alt="" />
            </div>
            <Categories />
        </>
    );
}
export default Home;