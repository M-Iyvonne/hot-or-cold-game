import {
	NEW_GAME,
	MAKE_GUESS,
	TOGGLE_INFO_MODAL
} from './action';

const initialState = {
	guesses:[],
	feedback: 'Choose Your Number Wisely!',
	correctAnswer: Math.round(Math.random()*100),
	showInModal: false
};

export default (state,action)=> {
	state = state || initialState;
		if (action.type === NEW_GAME) {
			state = Object.assign({}, initialState,{
				correctAnswer: action.correctAnswer
			});
			return state;
		}
		else if (action.type === MAKE_GUESS) {
        	const guess = parseInt(action.guess, 10);
        	if (isNaN(guess)) {
            	state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });
			return state;
		}
		const difference = Math.abs(guess - state.correctAnswer);
		let feedback;
		if(difference >= 50){
			feedback = "Your are Super Cold!";
		}else if(difference >= 40){
			feedback = "Your are Cold!";
		}else if(difference >= 30){
			feedback = "Your are Warm!";
		}else if(difference >= 20){
			feedback = "Your are Hot!";
		}else if(difference >=10){
			feedback = "You are Super Steamy Hot!";
		}else if(difference >=1){
			feedback = "You are Super Hot!";
		}else {
			feedback = "You Choose Wisely!";
		}
		state = Object.assign({}, state, {
			feedback,
			guesses: state.guesses.concat(action.guess)
		});
		return state;
	}
	else if (action.type === TOGGLE_INFO_MODAL) {
         state = Object.assign({}, state, {
             showInfoModal: !state.showInfoModal
        });
        return state;
    }
    return state;
};
