import React, {useEffect, useState} from 'react';
import './App.scss';
import catsImg from "./img/cats.jpg"
import chubakaImg from "./img/chubaka.jpg"
import dogsImg from "./img/dogs.jpg"
import dynoImg from "./img/dyno.jpg"
import planetsImg from "./img/planets.jpg"


const data = [
    {
        img: catsImg
    },
    {
        img: chubakaImg
    },
    {
        img: dogsImg
    },
    {
        img: dynoImg
    },
    {
        img: planetsImg
    }
]

function App() {
    const [header, setheader] = useState(data[Math.floor(Math.random() * data.length)])
    const [left, setleft] = useState(data[Math.floor(Math.random() * data.length)])
    const [right, setright] = useState(data[Math.floor(Math.random() * data.length)])
    const [button, setbutton] = useState(data[Math.floor(Math.random() * data.length)])
    const [shangeColorButton, setShangeColorButton] = useState(false)


    const clockButton = () => {
        setheader(data[Math.floor(Math.random() * data.length)])
        setleft(data[Math.floor(Math.random() * data.length)])
        setright(data[Math.floor(Math.random() * data.length)])
        setbutton(data[Math.floor(Math.random() * data.length)])
        setShangeColorButton(!shangeColorButton)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            clockButton()
        }, 52000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className=" App">
            <header>
                <img src={header.img}/>
            </header>
            <div className="containerMain">
                <div className="leftBlock">
                    <img src={left.img}/>
                </div>
                <button
                    onClick={() => clockButton()}
                    style={{
                        backgroundColor: shangeColorButton ? "red" : "green"
                    }}>
                    click
                </button>
                <div className="rightBlock">
                    <img src={right.img}/>
                </div>
            </div>
            <footer>
                <img src={button.img}/>
            </footer>
        </div>
    );
}

export default App;
