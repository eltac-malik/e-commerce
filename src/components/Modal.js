import {useContext} from "react";
import  Context from "../context/Context";

function Modal(props) {
  
  const x = useContext(Context);



  return (
    <div >


      <div className="contain">

  <div className="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
    <div className="modal-dialog modal-dialog-centered  modal-sm">
      <div className="modal-content">
        <div className="mod-header">
          <h2 className="modal-title">INFO</h2>
          <i className="fa-solid fa-xmark fa-2x" data-dismiss="modal"></i>
        </div>
        <div className="modal-body">
          <img src={props.data.image} alt=""/>
        </div>
        <div className="modal-body">
          <h2 className="modal-title">Name : {props.data.title}</h2>
          <h4> PRICE : {props.data.price} AZN</h4>
          <h4> COUNT : {props.data.alt}</h4>
        </div>
        <div className="modal-footer">
         <button onClick={()=> x.countPlusbtn(props.data)}  className="btn ab-btn btn-danger">Add</button>
        </div>
      </div>
    </div>
  </div>
</div> 




    </div>
  );
}

export default Modal;
