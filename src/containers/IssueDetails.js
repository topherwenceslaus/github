import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {getIssue} from '../redux/actions'
import {Avatar} from './Avatar'
import {Issue} from '../containers/Issue' 

class IssueDetails extends React.Component{
    render(){
        // const issue = this.props.issue[this.props.issue.currentIssue]
        console.log(this.props.issue.currentIssue)
        // console.log(issue)
         return(
           <div className='issueDetail'>
                {this.props.issue.isIssueLoaded && this.props.issue.currentIssue &&<div>
                    <Avatar user={this.props.issue[this.props.issue.currentIssue].user}/>
                    <Issue issue={this.props.issue[this.props.issue.currentIssue]}/>
                </div>}
           </div>
        )
    }
    componentDidMount(){
        this.props.getIssue(this.props.match.params.issueid)
    }
}

const mapStateToProps= (state)=>{
      return{
        issue:state
      } 
}

const mapDispatch = {getIssue}

export default connect(mapStateToProps,mapDispatch)(IssueDetails)
