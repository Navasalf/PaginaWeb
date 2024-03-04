import React from 'react';
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";


export function  Modal ({isModalOpen, closeModal}) {
if (!isModalOpen) return null;

    return (
       <>
       <Overlay>
            <ContenedorModal>
                <EncabezadoModal>
                    <BotonCerrar> <IoMdClose onClick={closeModal}/> </BotonCerrar>
                </EncabezadoModal>
                <PrimeraParte>
                <div className='Box'>

                </div>
                <div>
                <h4>Connect Wallet</h4>
                <p> Start by connecting with one of the wallets below. Be Sure to store your private keys or seed phrase securely. Never share them with anyone.</p>
                </div>
                </PrimeraParte>
                <SegundaParte>
                <div></div>
                <div></div>
                <div></div>
                </SegundaParte>
            </ContenedorModal>
       </Overlay>
       </>


    )
}


const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items:center;
    justify-content:center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    height: auto;
    position: relative;
    background: #181818;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    border: 3px solid yellow
`;
const EncabezadoModal = styled.div`
    Display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }

`;
const BotonCerrar = styled.div`
    position: absolute;
    top:15px;
    right:20px;

    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
    transition; .3s wase all;
    border-radius: 5px;
    color: #1766DC;
    font-size:20px;
    color: white;
    

    &:hover {
        background: #313131;
    }
`;

const PrimeraParte = styled.div`
    Display: flex;
    padding: 10px;
    margin: 10px;
    text-align: justify;

.Box {
        
        background: #313131;
        width: 420px;
        height: 120px;
        border-radius: 15px;
        margin-right: 20px;
        cursor: pointer;
        transition; .3s wase all;
    
        
        &:hover {
            background: #515151;
        }
    }
    }

h4 {
    margin-bottom: 10px;
    color: yellow;
}
`;

const SegundaParte = styled.div`
    display: flex;

div {

    height: 90px;
    width: 125px;
    background: #313131;
    border-radius: 15px;
    margin-left: 20px;
    border: none;
    cursor: pointer;
    transition; .3s wase all;


    &:hover {
        background: #515151;
    }
}

`;
