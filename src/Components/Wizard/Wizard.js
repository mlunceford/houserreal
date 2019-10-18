import React from 'react'
import {Link} from 'react-router-dom'

class Wizard extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }
    render(){
        return(
            <div className="Wizard">
                <div className="sidebars"></div>
                <div className="wizardInfo">
                    <div className="wizardHeader">
                        <div className="wizardTitle">Add New Listing</div>
                        <Link to='/'><button className='wizardCancel'>Cancel</button></Link>
                    </div>
                </div>
                <div className="sidebars"></div>
            </div>
        )
    }
}
export default Wizard;