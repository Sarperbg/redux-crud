import { GrClose } from "react-icons/gr"
import { useDispatch } from "react-redux"
import { modalFunc } from "../redux/modalSlice";

const Modal = ({ title, content, btnText, btnFunc }) => {
 const dispatch = useDispatch();

 return (
  <div className='flex items-center justify-center fixed top-0 left-0 bottom-0 right-0 w-full h-screen'>
   <div className='w-1/3 bg-white shadow-lg rounded-md p-4'>
    <div className='flex items-center justify-between border-b py-3'>
     <div className='text-2xl'>{title}</div>
     <GrClose onClick={() => dispatch(modalFunc())} size={24} />
    </div>
   {content}
   </div>
  </div>
 )
}

export default Modal