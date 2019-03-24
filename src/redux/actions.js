import * as API from '../API/API'

export const GET_ISSUES   = "GET_ISSUES"
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUE = 'GET_ISSUE';
export const GET_ISSUE_BEGIN ="GET_ISSUE_BEGIN"

export const getIssues=()=>{
    return dispatch =>{
        dispatch({type:GET_ISSUES})
        API.getIssues().then((data)=>{
            dispatch({type:GET_ISSUES_SUCCESS, payload:{
                data:data.data
            }})
        })
    }
}


export function getIssue(number) {
    console.log(number)
    return dispatch => {
      dispatch({type: GET_ISSUE_BEGIN});
      API.getIssue(number)
        .then(data =>{
            dispatch({type:GET_ISSUE,payload:{
                data:data
        }})
        } )
    };
  }