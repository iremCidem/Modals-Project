import { useDispatch } from "react-redux";
import { removeModal, useModal } from "../store/modalSlice";
import "./modal.css";
import { modalsData } from "../modalsData";

export default function Modal() {
  const data = useModal()

  const currentModal = modalsData.find((modal) => modal.name === data.name )

  const dispatch = useDispatch();
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-white/40">
<div className="center bg-white">
<button className="text-lg absolute top-2 right-3" onClick={() => dispatch(removeModal())}>X</button>
    <h2>bu bir modal</h2>
    <currentModal.element {...data} />
   
  </div>
    </div>
    
  );
}
