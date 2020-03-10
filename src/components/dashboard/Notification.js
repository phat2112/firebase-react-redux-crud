import React from 'react';
import PropTypes from 'prop-types';

const Notification = props => {
    const { notification } = props
    return (
        <div className='section'>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notification</span>
                    <ul className='notifications'>
                       {notification && notification.map(item=>(
                            <li key={item.id}>
                                <span className="pink-text">{item.user}</span>
                                <span>{item.content}</span>
                                {/* <div className="grey-text note-date">
                                    {item.time.todate()}
                                </div> */}
                            </li>  
                       ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

Notification.propTypes = {
    
};

export default Notification;