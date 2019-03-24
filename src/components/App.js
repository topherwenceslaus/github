import React, { Component } from 'react';
import '../styles/App.css';
import {connect} from 'react-redux'
import {getIssues} from '../redux/actions'
import {Avatar} from '../containers/Avatar'
import {Issue} from '../containers/Issue' 

class App extends Component {
  render() {
    return (
      <div className="App">
      
          {!this.props.data.isLoading && this.props.data.issues.data.map((user,i)=>{
                return(
                  <div  className='issue' key={i}>
                    <Avatar  user={user.user}/>
                    <Issue issue={user}/>
                  </div>
                )
          })}
      </div>
    );
  }
  componentDidMount(){
    this.props.getIssues()
  }
}

const mapStateToProps= (state)=>{
    return {
      data: state
    }
}

const  mapDispatch = {getIssues}
export default connect(mapStateToProps,mapDispatch)(App);
