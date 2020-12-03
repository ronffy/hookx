/**
 * @description 
 * @author ronffy
 * @Date 2020-12-02 18:22:31
 * @LastEditTime 2020-12-03 16:21:24
 * @LastEditors ronffy
 */
import { createContext, useContext } from 'react';

const GlobalContext = createContext(null);
GlobalContext.displayName = 'GlobalContext';
const Consumer = GlobalContext.Consumer;

const Provider = ({ children, store }) => {
  return (
    <GlobalContext.Provider value={store}>
      {children}
    </GlobalContext.Provider>
  );
}

const useContextState = () => {
  const { useStore } = useContext(GlobalContext);
  const { state } = useStore();
  return state
}

function connect(mapStateToProps, mapDispatchToProps) {
  return function createConnect(WrapComponent) {
    return function ConnectHOC(props) {
      const { useStore, dispatch } = useContext(GlobalContext);
      const { state } = useStore();
      console.log('state', state);

      let stateProps;
      if (typeof mapStateToProps === 'function') {
        stateProps = mapStateToProps(state, props);
      }
      let dispatchProps = {
        dispatch,
      }
      if (typeof mapDispatchToProps === 'function') {
        dispatchProps = mapDispatchToProps(dispatch, props);
      }

      return <WrapComponent {...props} {...stateProps} {...dispatchProps} />
    }
  }
}

export {
  connect,
  useContextState,
  Consumer,
  Provider,
}