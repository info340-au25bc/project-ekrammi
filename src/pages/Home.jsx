import { Link } from "react-router-dom";

export default function Home(){
    return (
        <section>
        <h1> CoreLab Pilates </h1>
        <p>Seattle's Best interactice pilates studio for strength anf alignment</p>
        <Link to="/classes" className="btn primary">View Classes</Link>
        </section>
    );
}