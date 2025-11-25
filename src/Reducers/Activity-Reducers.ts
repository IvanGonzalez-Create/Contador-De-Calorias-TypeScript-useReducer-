import type { Activity } from "../Types/Index";

export type ActivityActions = {

     type : 'Save-Activity', payload: { NewActivity : Activity } 

}

type ActivityState = {
    Activities : Activity[]

}

export const InitialState : ActivityState = {
    Activities : []


}

export const ActivityReducer = (
    state : ActivityState = InitialState,
    action: ActivityActions
) => {
    if (action.type === 'Save-Activity') {

        return {
            ...state,
            Activities: [...state.Activities,action.payload.NewActivity]
        }
    }

    return state
}