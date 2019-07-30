import { connect } from 'react-redux';
import EmotionPanel from '../components/EmotionPanel';

const mapStateToProps = state => {
  return {
    emoscore: state.emotions.reduce((acc, y) => {
        return y.date > acc.date ? y : acc;
    }, {date: new Date(0)})
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const EmotionPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmotionPanel)

export default EmotionPanelContainer