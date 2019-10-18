import React from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'


class Dashboard extends React.Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }
    render(){
        return(
            <div className="Dashboard">
                <div className="sidebars"></div>
                <div className="dashboardInfo">
                    <div className="dashHeader">
                        <div className="dashTitle">Dashboard</div>
                        <Link to='/wizard'><button className='dashbtn'>Add New Property</button></Link>
                    </div>
                    <h5>Home Listing</h5>
                <House/>
                </div>
                <div className="sidebars"></div>
            </div>
        )
    }
}
export default Dashboard;