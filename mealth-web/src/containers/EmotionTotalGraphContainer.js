import { connect } from 'react-redux';
import EmotionTotalGraph from '../components/EmotionTotalGraph';
import {toggleRender} from '../actions';

const mapStateToProps = state => {
  return {
    emoscore: state.emotions.reduce((acc, y) => {
        return y.date > acc.date ? y : acc;
    }, {date: new Date(0)}),
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

const EmotionTotalGraphContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmotionTotalGraph)

export default EmotionTotalGraphContainer;