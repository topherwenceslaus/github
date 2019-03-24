import {GET_ISSUES,GET_ISSUES_SUCCESS,GET_ISSUE_BEGIN,GET_ISSUE} from './actions'
let initialState = {
issues:{},
isLoading: true,
currentIssue: null,
isIssueLoaded: false
}
export const reducer= (state= initialState, action)=>{
    switch(action.type){
        case GET_ISSUES:{
            return state
        }
        case GET_ISSUE_BEGIN:{
            return {...state,isIssueLoaded: false}
        }
        case GET_ISSUES_SUCCESS:{
                return {...state,issues:action.payload, isLoading:false}
        }
        case GET_ISSUE:{
            return {...state,[action.payload.data.number]:action.payload.data, currentIssue:action.payload.data.number,isIssueLoaded:true}
        }
        default:
            return state
    }
}