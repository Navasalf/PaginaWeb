import { useState } from 'react'
import '../styles/navbar.css'
import  {Modal} from './Modal'

export function Navbar () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
       <div className="containerN">
        <button onClick={()=> setIsModalOpen(true)} className='ButtonNavbar'>Connect Wallet</button>
        <Modal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>
       </div>
    )
}


