import { connect } from 'react-redux'
import EventList from '../components/EventList'

const mapStateToProps = state => {
  return {
    events: state.events.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const EventListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)

export default EventListContainer