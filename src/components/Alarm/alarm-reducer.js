import * as actionTypes from '../../constants/action-types'
import * as aduioStates from '../../constants/audio-states'

export default function audio(state = {}, action) {
    switch (action.type) {
        case actionTypes.PLAY_AUDIO:
            return {
                ...state,
                state: aduioStates.PLAYING,
                startedAt: Date.now(),
            }
        case actionTypes.PAUSE_AUDIO:
            return {
                ...state,
                state: aduioStates.PAUSED,
                startedAt: 0,
            }
        default:
            return state
    }
}
