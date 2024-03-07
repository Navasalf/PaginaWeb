import React from 'react';
import { useState } from 'react';
import '../styles/lottery.css'
import { NavLink } from 'react-router-dom';
import { ModalTickets } from '../components/ModalTickets';


export function Lottery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [isModalOpen10, setIsModalOpen10] = useState(false);
    const [isModalOpen25, setIsModalOpen25] = useState(false);
    const [isModalOpen50, setIsModalOpen50] = useState(false);
    const [isModalOpen100, setIsModalOpen100] = useState(false);
    
    return (


        <div className='container-lottery'>
            <div className='container-main-lottery'>
                <div className='container-details-lottery-description'>
                    <div className='container-details-lottery-description-back'>
                        <NavLink to="/AvaliableOptions" style={{ background: "none" }}> &lt; Back to Options  </NavLink>
                    </div>
                    <div className='container-details-lottery-description-cont'>
                        <div><h2>BTC Fever Lotter #1</h2></div>
                        <div className='container-details-lottery-description-cont-balls'>
                            <div className='container-details-lottery-description-cont-balls-ball'>
                                <div className='button'>
                                    <div className='bloom-container'>
                                        <div className='button-container-main'>
                                            <div className='button-inner'>
                                                <div className='back'></div>
                                                <div className='front'>0</div>
                                            </div>
                                            <div className='button-glass'>
                                                <div className='back'></div>
                                                <div className='front'></div>
                                            </div>
                                        </div>
                                        <div className='bloom bloom1'></div>
                                        <div className='bloom bloom2'></div>
                                        <div>
                                            <h3>Hours</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container-details-lottery-description-cont-balls-ball'>
                                <div className='button'>
                                    <div className='bloom-container'>
                                        <div className='button-container-main'>
                                            <div className='button-inner'>
                                                <div className='back'></div>
                                                <div className='front'>0</div>
                                            </div>
                                            <div className='button-glass'>
                                                <div className='back'></div>
                                                <div className='front'></div>
                                            </div>
                                        </div>
                                        <div className='bloom bloom1'></div>
                                        <div className='bloom bloom2'></div>
                                        <div>
                                            <h3>Hours</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container-details-lottery-description-cont-balls-ball'>
                                <div className='button'>
                                    <div className='bloom-container'>
                                        <div className='button-container-main'>
                                            <div className='button-inner'>
                                                <div className='back'></div>
                                                <div className='front'>0</div>
                                            </div>
                                            <div className='button-glass'>
                                                <div className='back'></div>
                                                <div className='front'></div>
                                            </div>
                                        </div>
                                        <div className='bloom bloom1'></div>
                                        <div className='bloom bloom2'></div>
                                        <div>
                                            <h3>Hours</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text-items'>Don't miss the opportunity to ender for the frand prize!</p>
                    </div>
                </div>
            </div>
            <div className='container-details-lottery-buy'>
                <h2>Buy Tickets</h2>
                <div className='container-details-lottery-buy-options'>
                    <div className='container-details-lottery-buy-options-item'>
                        <div className='container-details-lottery-buy-options-item-info'>
                            <svg className='svg-lottery' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="90px" width="90px" xmlns="http://www.w3.org/2000/svg"><path d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"></path></svg>
                            <h3>1 Ticket</h3>
                            <p>1$</p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className='botton-lottery'>Connect Wallet</button>
                        <ModalTickets props="1" isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>5</ModalTickets>
                    </div>
                    <div className='container-details-lottery-buy-options-item'>
                        <div className='container-details-lottery-buy-options-item-info'>
                            <svg className='svg-lottery' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="90px" width="90px" xmlns="http://www.w3.org/2000/svg"><path d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"></path></svg>
                            <h3>1 Ticket</h3>
                            <p>5$</p>
                        </div>
                        <button onClick={() => setIsModalOpen5(true)} className='botton-lottery'>Connect Wallet</button>
                        <ModalTickets props="5" isModalOpen={isModalOpen5} closeModal={() => setIsModalOpen5(false)} />
                    </div>
                    <div className='container-details-lottery-buy-options-item'>
                        <div className='container-details-lottery-buy-options-item-info'>
                            <svg className='svg-lottery' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="90px" width="90px" xmlns="http://www.w3.org/2000/svg"><path d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"></path></svg>
                            <h3>1 Ticket</h3>
                            <p>10$</p>
                        </div>
                        <button onClick={() => setIsModalOpen10(true)} className='botton-lottery'>Connect Wallet</button>
                        <ModalTickets props="10" isModalOpen={isModalOpen10} closeModal={() => setIsModalOpen10(false)} />
                    </div>
                    <div className='container-details-lottery-buy-options-item'>
                        <div className='container-details-lottery-buy-options-item-info'>
                            <svg className='svg-lottery' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="90px" width="90px" xmlns="http://www.w3.org/2000/svg"><path d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"></path></svg>
                            <h3>1 Ticket</h3>
                            <p>25$</p>
                        </div>
                        <button onClick={() => setIsModalOpen25(true)} className='botton-lottery'>Connect Wallet</button>
                        <ModalTickets props="25" isModalOpen={isModalOpen25} closeModal={() => setIsModalOpen25(false)} />
                    </div>
                    <div className='container-details-lottery-buy-options-item'>
                        <div className='container-details-lottery-buy-options-item-info'>
                            <svg className='svg-lottery' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="90px" width="90px" xmlns="http://www.w3.org/2000/svg"><path d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"></path></svg>
                            <h3>1 Ticket</h3>
                            <p>50$</p>
                        </div>
                        <button onClick={() => setIsModalOpen50(true)} className='botton-lottery'>Connect Wallet</button>
                        <ModalTickets props="50" isModalOpen={isModalOpen50} closeModal={() => setIsModalOpen50(false)} />
                    </div>
                    <div className='container-details-lottery-buy-options-item'>
                        <div className='container-details-lottery-buy-options-item-info'>
                            <svg className='svg-lottery' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="90px" width="90px" xmlns="http://www.w3.org/2000/svg"><path d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"></path></svg>
                            <h3>1 Ticket</h3>
                            <p>100$</p>
                        </div>
                        <button onClick={() => setIsModalOpen100(true)} className='botton-lottery'>Connect Wallet</button>
                        <ModalTickets props={100} isModalOpen={isModalOpen100} closeModal={() => setIsModalOpen100(false)} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}