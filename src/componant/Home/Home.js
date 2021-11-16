import React from 'react';
import Data from  '../../Data/data'
import Room from '../Room/Room';
const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }

    const data= Data;
    return (
        <div style={style}>
            <h1>Home</h1>
            {
                data.map(item=> <Room item={item}></Room>)
            }
        </div>
    );
};

export default Home;