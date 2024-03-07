import React from 'react';
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";


export function  ModalTickets ({isModalOpen, closeModal, props}) {
if (!isModalOpen) return null;

    return (
       <>
       <Overlay>
            <ContenedorModal>
                <EncabezadoModal>
                    <BotonCerrar> <IoMdClose onClick={closeModal}/> </BotonCerrar>
                </EncabezadoModal>
                <PrimeraParte>
                <div className='titulo-modaltickets'>
                    <h2>Confirm Deposit</h2>
                </div>
                <div className='body-modaltickets'>
                <p className='p-modaltickets'>You are purchasing {props} tickets to participate in BTC Fever Lottery #1.</p>
                </div>
                <div className='box-modal-button'><button className='button-modal'>Buy Now</button></div>
                </PrimeraParte>
            </ContenedorModal>
       </Overlay>
       </>


    )
}
const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed; z-index:20;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items:center;
    justify-content:center;
`;

const ContenedorModal = styled.div`
    width: 600px;
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
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    text-align: justify;

.titulo-modaltickets {

    margin-bottom: 25px;
    color: hwb(60 68% 3%);
}
.p-modaltickets {
    margin-bottom: 15px;
}

.button-modal {
    margin-top: 16px;
    margin-right: 20px;
    background-color: #313131;
    font-size: 20px;
    padding: 10px;
    color: hwb(60 68% 3%);
    border: 2px solid yellow;
    border-radius: 8px;
    width: 190px;
    

    display: inline-block;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 hwb(60 0% 45%);
    -webkit-transition: ease-out 0.8s;
    -moz-transition: ease-out 0.8s;
    transition: ease-out 0.4s;
    
}

.button-modal:hover {
    box-shadow: inset 400px 0 0 0 hwb(60 0% 45%);
}

.box-modal-button {
    margin: auto;
}
`;

