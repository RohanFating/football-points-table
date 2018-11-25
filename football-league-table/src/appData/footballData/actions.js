import AppConstants from '../../constants';
import FOOTBALL_DATA from '../../footballData/football';



export const getFootballLeagueData = () => ({
    type: AppConstants.API_SUCCESS,
    payload: FOOTBALL_DATA,
});