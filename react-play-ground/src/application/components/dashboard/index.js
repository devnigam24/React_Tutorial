import React from 'react';
import { connect } from 'react-redux';
import { toggleTest } from '../../../store/actions';
import Button from '../button';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonPressed: false 
    };
    this.onLocalStateChange = this.onLocalStateChange.bind(this);
  }

  onLocalStateChange() {
    this.setState(previousState => ({
      buttonPressed: !previousState.buttonPressed
    }));
  }

  render() {
    const {
      props: {
        testFlag,
        changeTestFlag
      }, onLocalStateChange,
      state: {
        buttonPressed
      }
    } = this;

    return(
      <div>
        <Button
          onClick={onLocalStateChange}
          label={buttonPressed ? 'LocalStateChange YES' : 'LocalStateChange NO'} />
        <Button
          onClick={() => changeTestFlag()}
          label={testFlag ? 'StoreStateChange YES' : 'StoreStateChange NO'} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  testFlag: state.test.testFlag
});

const mapDispatchToProps = dispatch => ({
  changeTestFlag: () => dispatch(toggleTest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);