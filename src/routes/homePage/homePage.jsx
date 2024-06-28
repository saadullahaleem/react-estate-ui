import SearchBar from "../../components/searchbar/SearchBar";
import "./homePage.scss";

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <div className="title">
                        <h1>This is a heading that will tell the visitor about this site which is gonna happen soonish</h1>
                    </div>
                        <p>
                        Lorem ipsum erat augue est non tellus. Nam efficitur aliquet sapien, porta pharetra neque pulvinar quis. 
                        Duis lobortis facilisis nulla ut hendrerit. 
                        Vestibulum at laoreet odio. Phasellus enim augue, commodo nec purus ut, interdum scelerisque sapien. 
                        Donec ullamcorper quis felis sit amet gravida.
                        </p>
                        <SearchBar />
                        <div className="boxes">
                            <div className="box">
                                <h1>10+</h1>
                                <h2>Cities</h2>
                            </div>
                            <div className="box">
                                <h1>200</h1>
                                <h2>Awards</h2>
                            </div>
                            <div className="box">
                                <h1>2000+</h1>
                                <h2>Spaces for Rent</h2>
                            </div>
                        </div>
                </div>          
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="img" />
            </div>

        </div>
    )
}

export default HomePage;