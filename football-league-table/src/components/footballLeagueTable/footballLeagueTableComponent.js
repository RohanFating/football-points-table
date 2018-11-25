import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFootballLeagueData } from '../../appData/footballData/actions';

/**
 * FootballLeagueTableComponent - to show football points table
 */
class FootballLeagueTableComponent extends Component {

    /**
     * Lifecycle hook: componentDidMount
     */
    componentDidMount() {
        this.props.getFootballLeagueData();
    }

    /**
     * To render table view
     */
    render() {
        return (
            <div>
            <h2 className="text-center">Football League Table</h2>
            <table  cellSpacing="10"  className="text-left">
                <thead>
                    <tr align="center">
                        {this.props.headers.map(v => <th className="m-1" key={v}>
                            {v}
                        </th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.props.footballData.map((v, index) => <tr align="center" key={v.name}>
                        <td className="m-1">#{index + 1}</td>
                        <td align="left" className="m-1">{v.name}</td>
                        <td className="p-1">{v.wins}</td>
                        <td className="m-1">{v.draws}</td>
                        <td className="m-1">{v.defeats}</td>
                        <td className="m-1">{v.goalsFor}</td>
                        <td className="m-1" >{v.goalsAgainst}</td>
                        <td className="m-1">{v.goalsFor - v.goalsAgainst}</td>
                        <td className="m-1">{v.points}</td>
                    </tr>)}
                </tbody>
            </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    footballData: state.footballLeagueData || [],
    headers: state.headers,
});

const actionCreators = {
    getFootballLeagueData,
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FootballLeagueTableComponent);