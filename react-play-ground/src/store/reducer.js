import { combineReducers } from 'redux';

const APPLICATION_INITIAL_STATE = {
  applicationState: null,
  timeStamps: []
};

const TEST_INITIAL_STATE = {
  testFlag: false
};

const USER_INITIAL_STATE = {
  userName: 'Jhon'
};

const applicationReducer = (state = APPLICATION_INITIAL_STATE, action) => {
  switch(action.type) {
    case 'APPLICATION_INVOKED': {
      return { ...state, applicationState: action.payload };
    }

    case 'APPLICATION_TIME': {
      const { timeStamps } = state;
      const { name, value } = action.payload;
      const newTimeStamp = [...timeStamps, { name, value }];
      return { ...state, timeStamps: newTimeStamp };
    }

    default: {
      return APPLICATION_INITIAL_STATE;
    }
  }
};

const testReducer = (state = TEST_INITIAL_STATE, { type }) => {
  switch(type) {
    case 'TOGGLE_TEST': {
      return { ...state, testFlag: !state.testFlag }
    }
  
    default: {
      return TEST_INITIAL_STATE;
    }
  }
};

const userReducer = (state = USER_INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case 'SET_USERNAME': {
      return { ...state, userName: payload }
    }
  
    default: {
      return USER_INITIAL_STATE;
    }
  }
};

const rootReducer = combineReducers({
  application: applicationReducer,
  test: testReducer,
  user: userReducer
});

export default rootReducer;