import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../home');
    }

    return(
        <div>
            <h1>Ini Halaman About</h1>

            <button onClick={handleClick}>Klik Menuju Home</button>
        </div>
    ) 
}

export default About;