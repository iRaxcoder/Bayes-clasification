import { useState } from "react"
import "./Menu.css"
import CustomLink from "../../CustomLink";
const Menu = () => {
    const [menuMainClass,setMenuMainClass] = useState("menu__ ");
    const [isVisibleToggle,setIsVisibleToggle] = useState("");
    const onToggleAction = () => {
        isVisibleToggle.length===0?
        setIsVisibleToggle("menu__visible")
        :
        setIsVisibleToggle("");
    }
    return (
    <div className="menu__container"> 
        <h1 className="menu__title">Clasificación Bayesiana</h1>
        <button onClick={onToggleAction} className="menu__toggle"></button>
        <hr></hr>
        <nav className={menuMainClass+isVisibleToggle}>
            <CustomLink className={"link "} to="/learning-style">Estilo de aprendizaje</CustomLink>
            <CustomLink className={"link "} to="/origin-place">Recinto de origen </CustomLink>
            <CustomLink className={"link "} to="/student-genre">Sexo de estudiante</CustomLink>
            <CustomLink className={"link "} to="/guess-learning-style">Ad. Estilo de aprendizaje </CustomLink>
            <CustomLink className={"link "} to="/professor-type">Tipo de profesor</CustomLink>
            <CustomLink className={"link "} to="/network-class">Clase de red</CustomLink>
        </nav>
    </div>
    );
}

export default Menu;