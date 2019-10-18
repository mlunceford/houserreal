import React from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'


class Dashboard extends React.Component {
    constructor(){
        super()
        this.state = {
            houses: [1,2,3]  //number just to see 3 items actually cgetting mapped.
        }
    }
    render(){
        let houses = this.state.houses.map((element, index) =>{
            return<House key={index} data={element}/>
        })
        return(
            <div className="Dashboard">
                <div className="sidebars"></div>
                <div className="dashboardInfo">
                    <div className="dashHeader">
                        <div className="dashTitle">Dashboard</div>
                        <Link to='/wizard'><button className='dashbtn'>Add New Property</button></Link>
                    </div>
                    <br />
                    <h5>Home Listing</h5>
                {houses}
                </div>
                <div className="sidebars"></div>
            </div>
        )
    }
}
export default Dashboard;