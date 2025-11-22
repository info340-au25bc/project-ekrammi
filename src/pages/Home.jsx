import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div> 
        <section className="corelab-intro">
        <h1> CoreLab Pilates </h1>
        <p>Seattle's Best interactice pilates studio for strength, Community and Confidence</p>

        <Link to="/classes" className="btn primary">View Classes</Link>
        </section>

        <section className="why-corelab">
            <div className="why-core">

                <div className="why-1">
                    <h1>Why CoreLab </h1>
                    <h2><strong>Strength & Confidence</strong></h2>
                    <p>CoreLab is women owned pilates studio tha offers reformer and matt pilates. 
                       We blend modern reformer pilates with the intention to help you build better confidence and strength
                       Not just physically but also mentally and through posture, mindset and balance.
                    </p>
                </div>

                <div className="why-2">
                    <h2><strong>Small Classes, Big Result</strong></h2>
                    <p>Whether it is your first ever pilates class or your 1000th, our instructors are here to guide you through 
                       every movement effectively but most importanly safely.
                   
                    <strong>No judgment, just progress</strong>
                    </p>
                </div>

                <div className="why-3">
                    <h2><strong>Modern Reformer, Matt classes and Aesthtic Studio</strong></h2>
                    <p> Corelab is nopt just about the exercises, it is about feeling at piece and feeling calm. Corelab is designed to feel
                        like a calm escape, with minimal and motivating Aesthtic.
                    </p>
                </div>

            </div>
        </section>
        </div>
    );
}