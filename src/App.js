import React from 'react';
import {connect} from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import {URL} from './components/URL';
import {Note} from './components/Note';
import {FILTER_BY} from './redux/actions';

class App extends React.Component {
  state = {
    url: 'http://google.com'
  }
  render() {
    const {urls, notes, dispatch} = this.props;
    const URLNodes = [];
    urls.forEach(({url}, index) => {
      URLNodes.push(
        <URL key={`url${index}`} string={url} onEdit={(newURL) => {
          // this.setState({
          //   url: newURL
          // });
        }}/>
      );
    });
    const noteNodes = [];
    notes.forEach(({note}, index) => {
      noteNodes.push(
        <Note
          note={note}
        />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          WorkBook
          <input onChange={(evt) => {
            const {value} = evt.target;
            dispatch({
              type: FILTER_BY,
              keyword: value
            });
          }}></input>
          {URLNodes}
          {noteNodes}
        </header>
      </div>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      urls: state.urls,
      notes: state.notes
    };
  },
  function mapDispathToProps(dispatch) {
    return {
      dispatch
    };
  }
)(App);
