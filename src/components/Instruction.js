import { useState } from "react";
import CustomModal from "./layout/Modal/CustomModal";

const Instruction = ({instructions,title}) => {
    const [isOpen, setIsOpen]= useState(false);
    return (
    <>
        <button onClick={()=>setIsOpen(!isOpen)} aria-label="Ayuda" className="instruction">Ayuda</button>
        <CustomModal
        props={{title: title, isOpen: isOpen}}
        methods={{toggleOpenModal: ()=>setIsOpen(!isOpen)}}
        >
        <h3>Instrucciones</h3>
        <ul>
                {instructions.map((i=>(
                    <li key={i}>{i}</li>
                )))}
        </ul>
        </CustomModal>

    </>
    );
}

export default Instruction;