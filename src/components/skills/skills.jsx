import { useState, useEffect } from "react";

const Skills = (props) => {
    const {skills} = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 1010);
    },[]);

    return (
        <>
            <ul>
                {skills.map( skill => {
                    return <li key={skill}>{skill}</li>
                })}
            </ul>
            {isLoggedIn ? 
                <button>Start Learning</button>
                :
                <button onClick={() => setIsLoggedIn(true)} id="login-btn">Login</button>
            }
        </>
    )
}

export default Skills;