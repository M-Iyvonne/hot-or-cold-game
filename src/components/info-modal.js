import React from 'react';
import {connect} from 'react-redux';

import './info-modal.css';
import {toggleInfoModal} from '../action';

export class InfoModal extends React.Component {
    hide(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    render() {
        return (
            <div className="overlay" id="modal">
                <div className="content">
                    <h3>What is the name of the game?</h3>
                    <div>
                        <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
                        <ul>
                            <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
                            <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
                            <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
                        </ul>
                        <p>So, Are you ready?</p>
                        <a className="close" href="#" onClick={e => this.onClose(e)}>Got It!</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(InfoModal);