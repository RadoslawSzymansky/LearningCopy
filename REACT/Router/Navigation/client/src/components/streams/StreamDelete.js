import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect  } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';
 
class StreamDelete extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    console.log(this.props)
  }

  renderContent() {
    if(!this.props.stream) {
      return `Are you sure you want to delete this stream?`
    } 
    return `Are you sure you want to delete stream with titile: ${this.props.stream.title}?`
  }

  render() {
    const { id } = this.props.match.params;
    const actions = (
      <>
        <button onClick={() => this.props.deleteStream(id)} className="ui primary button">Delete</button>
        <Link to="/" onClick={() => history.push('/')} className="ui button">Cancel</Link>    
      </>
    )
    return (
        <Modal
          title="Delete stream"
          content={this.renderContent()}
          actions={actions}
          onDisMiss={() => history.push('/')}
        />
    )
  }
};


const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);