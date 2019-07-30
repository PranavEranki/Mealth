import { connect } from 'react-redux'
import { createEvent, updateNewEventDate, updateNewEventText } from '../actions'
import NewEvent from '../components/NewEvent'

const mapStateToProps = state => {
  return {
    dates: state.emotions.sort((a, b) => {
        if (a.date > b.date) {
            return -1;
        } else if (a.date < b.date) {
            return 1;
        } else {
            return 0;
        }
    }).map(val => {
        return {label: val.date.getMonth()+1 + "/" + val.date.getDate()+"/"+val.date.getFullYear(), value: val.date};
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEvent: ((event) => {
      dispatch(createEvent(event))
    }),
  }
}

const NewEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEvent)

export default NewEventContainer