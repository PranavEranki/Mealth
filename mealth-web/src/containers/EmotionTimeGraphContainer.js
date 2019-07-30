import { connect } from 'react-redux';
import EmotionTimeGraph from '../components/EmotionTimeGraph';
import {toggleRender} from '../actions';

const mapStateToProps = state => {
  return {
    labels: state.emotions.sort((a, b) => {
        if (a.date > b.date) {
            return 1;
        } else if (a.date < b.date) {
            return -1;
        } else {
            return 0;
        }
    }).map(val => {
        return val.date.getMonth()+1 + "/" + val.date.getDate()+"/"+val.date.getFullYear();
    }),
    scores: state.emotions.sort((a, b) => {
        if (a.date > b.date) {
            return 1;
        } else if (a.date < b.date) {
            return -1;
        } else {
            return 0;
        }
    }).reduce((acc, y) => {
        return {
            happyscores: [
                ...acc.happyscores, y.happy
            ],
            worryscores: [
                ...acc.worryscores, y.worry
            ],
            lovescores: [
                ...acc.lovescores, y.love
            ],
            hatescores: [
                ...acc.hatescores, y.hate
            ],
            sadscores: [
                ...acc.sadscores, y.sad
            ],
        }
    }, {happyscores: [], worryscores:[], lovescores: [], hatescores: [], sadscores: []}),
    lineNums: state.events.map((e) => {
        let i = 0;
        return state.emotions.reduce((acc, y) => {
            if (y.date.getMonth() === e.date.getMonth() && y.date.getDate() === e.date.getDate() && y.date.getFullYear() === e.date.getFullYear()) {
                return i;
            } else {
                i += 1;
                return acc;
            }
        }, -1);
    }),
    rerender: state.rerender
  };
}

const mapDispatchToProps = dispatch => {
  return {
      toggleRender: () => {
          dispatch(toggleRender())
      }
  };
}

const EmotionTimeGraphContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmotionTimeGraph)

export default EmotionTimeGraphContainer