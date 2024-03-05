import React from 'react';
import '../styles/account.css'

const Account = () => {

    
    return (
        <div className='ContainerAccount'>
            <div className='onebox'>
                <div className='box'>
                    <p className='Title'>Tickets:</p>
                    <p className='TextoAccount'>20 tickets</p>
                </div>
                <div className='box'>
                    <p className='Title'>Your balance:</p>
                    <p className='TextoAccount'>100 USDT</p>
                </div>
                <div className='box'>
                    <p className='Title'> Your earnings:</p>
                    <p className='TextoAccount'>300 USDT</p>
                </div>
            </div>
            <div className='boxtwo'>
                <p className='Titletwo'> Account transaction history</p>
                <div className='twobox'>
                <div className='twobox-item'>
                                <h3>Lottery:</h3> 
                                <p>BTC Fever Lottery #1</p>
                    </div>
                    <div className='twobox-item'>
                                <h3>Your Balance:</h3>
                                <p>25 Tickets</p>
                    </div>
                    <div className='twobox-item'>
                                <h3>Estimated Prize:</h3> 
                                <p>$20,000</p>
                    </div>
                    <div className='twobox-item'>
                                <h3>Status:</h3>
                                <p className='Parrafoone'>Finished</p>
                     </div>       
                </div>
                <div className='twobox'>
                    <div className='twobox-item'>
                                <h3>Lottery:</h3> 
                                <p>BTC Fever Lottery #1</p>
                    </div>
                    <div className='twobox-item'>
                                <h3>Your Balance:</h3>
                                <p>25 Tickets</p>
                    </div>
                    <div className='twobox-item'>
                                <h3>Estimated Prize:</h3> 
                                <p>$20,000</p>
                    </div>
                    <div className='twobox-item'>
                                <h3>Status:</h3>
                                <p className='ParrafoTwo'>Pending</p>
                     </div>                   
                </div>

            </div>
        </div>
    );
};

export default Account;