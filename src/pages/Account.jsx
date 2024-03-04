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
                    <table>
                        <tbody> {/* Wrap content in tbody to avoid unnecessary rows */}
                            <tr>
                                <th><p className='littleP'>Lottery:</p></th>
                                <th><p className='littleP'>Your Balance:</p></th>
                                <th><p className='littleP'>Estimated Prize:</p></th>
                                <th><p className='littleP'>Status:</p></th>
                            </tr>
                            <tr>
                                <td><p className='littleP'>BTC Fever Lottery #1</p></td>
                                <td><p className='littleP'>25 Tickets</p></td>
                                <td><p className='littleP'>$20,000</p></td>
                                <td><p className='littleP'>Finished</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='twobox'>
                    <table>
                        <tbody>
                            <tr>
                                <th><p className='littleP'>Lottery:</p></th>
                                <th><p className='littleP'>Your Balance:</p></th>
                                <th><p className='littleP'>Estimated Prize:</p></th>
                                <th><p className='littleP'>Status:</p></th>
                            </tr>
                            <tr>
                                <td><p className='littleP'>BTC Fever Lottery #1</p></td>
                                <td><p className='littleP'>25 Tickets</p></td>
                                <td><p className='littleP'>$20,000</p></td>
                                <td><p className='littleP'>Finished</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Account;