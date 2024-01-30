import React from 'react';
import Graphfarmer from "./page-com/graphfarmer";

const Milk = () => {
    const divStyle = {
        color: '#082459',
        fontSize: '24px',
        fontFamily: 'Roboto',
        fontWeight: 700,
        wordWrap: 'break-word'
    };
    const divStylein = {
        margin: '12px',
        color: '#082459',
        fontSize: '24px',
        fontFamily: 'Roboto',
        fontWeight: 700,
        wordWrap: 'break-word'
    };
    const divSmall = {
        margin: '12px',
        color: '#082459',
        fontSize: '20px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        wordWrap: 'break-word'
    }
    const divSmaller = {
        margin: '12px',
        color: '#082459',
        fontSize: '16px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        wordWrap: 'break-word',
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <div style={{ margin: '16px' }}>
            <div style={divStyle}>
                กราฟแสดงปริมาณนมต่อวัน
            </div>
            <Graphfarmer />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'EDEDED', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '8px' }}>
                <div>
                    <div style={divStylein}>
                    รายการล่าสุด
                    </div>
                    <div style={divSmall}>23 Nov 2023</div>
                    <div style={{width: '100%', height: '100%', background: '#D9D9D9'}}>
                        <div style={divSmaller}> 
                        <p>ปริมาณนมวัว</p>
                        <p>+ 80ml.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Milk;
