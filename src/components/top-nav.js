import React from 'react';
import {connect} from 'react-redux';
import {newGame, toggleInfoModal} from '../action'
import './top-nav.css';

export class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        this.props.dispatch(newGame());
    }

    toggleInfoModal(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.onInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);