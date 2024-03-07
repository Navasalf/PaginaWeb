import { useState } from 'react'
import '../styles/navbar.css'
import  {Modal} from './Modal'


export function Navbar () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
       <div className="container-navbar">
        <button onClick={()=> setIsModalOpen(true)} className='button-navbar'>Connect Wallet</button>
        <Modal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>
       </div>
    )
}


