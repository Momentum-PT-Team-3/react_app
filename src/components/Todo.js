import Backdrop from './Backdrop'
import Modal from './Modal'
import { useState } from 'react'

function Todo(props) {
  //components always start with capital letter
  const [ modalIsOpen, setModalIsOpen ] = useState(false) //this is a "react hook"- can only be called in react component. initial state "false" bc do not want modal open
         // ^current stored value ^function that will change the value of modal

function deleteHandler(){
    setModalIsOpen(true) //will change state from false to true
}

function closeModalHandler() {
    setModalIsOpen(false)
}

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
          {/* deleteHandler points at the function above */}
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {/* //if modalisopen is true open modal  */}
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />} 
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

    </div>
  );
}

export default Todo; //makes it available in other files
