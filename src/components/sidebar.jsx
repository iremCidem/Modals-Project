import { useDispatch } from "react-redux";
import { addModal } from "../store/modalSlice";
import { AiOutlineDoubleRight } from 'react-icons/Ai';

export default function Sidebar() {
      const dispatch = useDispatch();

   const classList = "bg-white text-black w-40 py-3 mb-3 hover:bg-amber-500 focus:bg-amber-500 flex flex-row justify-center ";
  return (
    <div className="flex flex-col">
        <button className={classList} onClick={ () => dispatch(addModal({name:"pembeModal"}))}> <AiOutlineDoubleRight className="mt-1" /> modal 1</button>
        <button className={classList} onClick={ () => dispatch(addModal({name:"morModal"}))}><AiOutlineDoubleRight className="mt-1" /> modal 2</button>
        <button className={classList} onClick={ () => dispatch(addModal({name:"yeşilModal"}))}><AiOutlineDoubleRight className="mt-1" /> modal 3</button>
      
    </div>
  )
}
