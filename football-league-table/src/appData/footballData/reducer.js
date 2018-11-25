import AppConstants from '../../constants';
import {createGameData} from './utils/footballLeagueUtils';

const initialState = {
    footballLeagueData: [],
     headers: ['Rank', 'Teams', 'Total Wins', 'Total Draws', 'Total Defeats', 'Goals For',
    'Goals Against', 'Goal Difference', 'Points'],
    isError: false,
};

/**
 * To handle state of football league data
 * @param state - maintain state
 * @param action - action object
 */
const FootballReducer = ( state=initialState, action ) => {
    switch(action.type) {
        case AppConstants.API_SUCCESS: 
            return Object.assign({}, state, { footballLeagueData: createGameData(action.payload), isError: false });
        case AppConstants.API_FAILURE: 
            return Object.assign({}, state, { footballLeagueData: [], isError: true  });
        default : return state;
    }
};

export default FootballReducer;