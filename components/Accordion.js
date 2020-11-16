import React, {useState, useRef} from 'react'
import { white } from '../style/colors'
import { Chevron } from './Icons'


function Accordion({title, content}) {
    const [setActive, setActiveState] = useState("")
    const activeContent = useRef(null)
    const [setHeight, setHeightState] = useState("0px")
    const [setRotate, setRotateState] = useState("accordion__icon");

    function toggleAccordion() {
      setActiveState(setActive === "" ? "active" : "")
      setHeightState(
        setActive === "active" ? "0px" : `${activeContent.current.scrollHeight}px`
      )
      setRotateState(
        setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
      )
    }
 return (
   <div className='section'>
     <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
       <p className='title'>{title}</p>
       <div className={`${setRotate}`}>
        <Chevron/>
       </div>
     </button>
     <div ref={activeContent} style={{ maxHeight: `${setHeight}` }} className='content'>
       <div className='text'>
         {content}
        </div>
     </div>
     <style jsx>{`
     .section {
        display: flex;
        flex-direction: column;
      }

      .accordion {
        background-color: #3D4057;
        color: ${white};
        cursor: pointer;
        padding: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: none;
        outline: none;
        transition: background-color 0.6s ease;
      }

      .accordion:hover,
      .active {
        background-color: #FFAF2D;
      }

      .title {
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 0;
        text-align: left;
      }

      .accordion__icon {
        margin-left: 3em;
        transition: transform 0.6s ease;
      }

      .rotate {
        transform: rotate(90deg);
      }

      .content {
        background-color: white;
        overflow: hidden;
        transition: max-height 0.6s ease;
        margin-bottom: 1em;
      }

      .text {
        font-weight: 400;
        font-size: 14px;
        padding: 18px;
      }
    `}
     </style>
   </div>
 )
}

export default Accordion