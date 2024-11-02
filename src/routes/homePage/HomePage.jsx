import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import React from "react";

const HomePage = () => {
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis 
                        nihil laborum voluptatum laboriosam voluptatem  labore maiores est, vel non, 
                        ex minima quibusdam sapiente esse quos nesciunt? Quos molestiae minima quod 
                        officiis. Sequi, rerum a excepturi non ex, aperiam cum accusamus delectus voluptate 
                        nulla, tempore velit nam in? Fuga est tempore eveniet iusto enim consequatur 
                        voluptates, aliquid deserunt consequuntur nam rerum  accusantium architecto dicta, 
                        cumque ea aperiam modi ratione ipsum  alias explicabo harum quis illo eum quia. 
                        Provident veritatis vero, odit esse impedit officia omnis commodi harum veniam voluptatum 
                        ametdoloremque quaerat repellendus ab nulla ullam beatae maiores id voluptatem saepe.
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;