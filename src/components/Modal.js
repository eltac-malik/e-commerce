import react from "react";

function Modal(props) {
  console.log(props.data.price);
  
  
  return (
    <div>
        <h1>{props.data.title}</h1>
        <h1 className="btn btn-primary" onClick={()=> props.closeModal()}>Close</h1>

    </div>
  );
}

export default Modal;
