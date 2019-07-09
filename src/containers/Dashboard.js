import React,{ Component } from 'react'

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Dashboard extends Component {
    state={
        details: ''
    }

    render() {
        // const { details } = this.props;
        // console.log('props Dashboard', this.props);
        return(
            <div>done</div>
        )
    }
 }


function mapStateToProps(state) {
    return{
        auth: "something",
        details: state.authontications.details
    }
}

export default withRouter(connect(mapStateToProps,null,null, {pure: false})(Dashboard));