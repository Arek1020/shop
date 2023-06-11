import React from 'react'
import { Link } from 'react-router-dom'

export const LeftMenu = () => {
    return (
        <div style={{
            height: 'calc(90vh - 60px)',
            width: 150,
            borderRightWidth: 1,
            borderRightColor: '#a9a9a9',
            borderRightStyle: 'solid'
        }}>
            <br></br>
            <br></br>
            <Link to={'/profile/orders'}>Zamówienia</Link>
        </div>
    )
}
