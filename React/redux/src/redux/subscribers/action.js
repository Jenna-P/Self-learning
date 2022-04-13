import {ADD_SUBSCRIBER, REMOVE_SUBSCRIBER} from './types';

//reduce 에  요청하는 액션
export const addSubscriber = () => {
    return {
        type : ADD_SUBSCRIBER
    }
}

export const removeSubscriber = () => {
    return {
        type : REMOVE_SUBSCRIBER
    }
}
