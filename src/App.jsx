import { useModal } from "./store/modalSlice";
import Modal from "./components/modal"

import Sidebar from "./components/sidebar";
function App() {
  const myModal = useModal();

  return (
    <div className="bg-black text-white h-screen " >
      <Sidebar />
     
     {myModal && <Modal/>}
    </div>
  );
}

export default App;
