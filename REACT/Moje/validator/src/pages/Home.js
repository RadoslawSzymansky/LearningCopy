import React from "react";
import { Link } from "react-router-dom"
import "../styles/Home.scss"
const Home = () => {
    return (
        <div className="home">
            <h1>Strona główna klubu Olsztyn</h1>
            <h2> Aktualności:</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, ducimus. Id rerum officia voluptates similique numquam harum exercitationem illo rem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolorum veniam. Nam consequatur provident similique ducimus voluptatum tenetur quo quasi corporis illo nemo repellat nisi deleniti, eos voluptates. Libero, temporibus.</p>
            <button className=" btn btn-primary">
                <Link to="/join" style={{ color: "white", textDecoration: "none" }}>Dołącz do klubu</Link>
            </button>
        </div>
    )
}
export default Home