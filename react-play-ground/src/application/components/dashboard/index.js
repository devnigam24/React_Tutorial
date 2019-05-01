import React from 'react';
import { connect } from 'react-redux';
import { toggleTest } from '../../../store/actions';
import Button from '../button';
import UserDashBoard from '../user-dashboard'
import './styles.css'

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonPressed: false,
      isUserDashBoardShowing: false
    };
    this.onLocalStateChange = this.onLocalStateChange.bind(this);
    this.showDashBoard = this.showDashBoard.bind(this);
  }

  onLocalStateChange() {
    this.setState(previousState => ({
      buttonPressed: !previousState.buttonPressed
    }));
  }

  showDashBoard() {
    this.setState({
      isUserDashBoardShowing: true
    });
  }

  render() {
    const {
      props: {
        testFlag,
        changeTestFlag,
        userData
      },
      state: {
        buttonPressed,
        isUserDashBoardShowing
      },
      onLocalStateChange,
      showDashBoard
    } = this;

    return(
      <div className='dashboard'>
        <div className="buttons-div">
          <Button
            onClick={onLocalStateChange}
            label={buttonPressed ? 'LocalStateChange YES' : 'LocalStateChange NO'} />
          <Button
            onClick={() => changeTestFlag()}
            label={testFlag ? 'StoreStateChange YES' : 'StoreStateChange NO'} />
          <Button
            onClick={showDashBoard}
            label='Show Me My Dashboard'/>
        </div>
        <div className='dashboard-content'>
          {isUserDashBoardShowing && (<UserDashBoard {...userData}/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  testFlag: state.test.testFlag,
  userData: state.user
});

const mapDispatchToProps = dispatch => ({
  changeTestFlag: () => dispatch(toggleTest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);