/**
 * @description 
 * @author ronffy
 * @Date 2020-12-02 16:19:40
 * @LastEditTime 2020-12-03 15:49:08
 * @LastEditors ronffy
 */
import { useMemo, useReducer } from 'react';

export default function createStore(reducer, initState, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer, initState);
  }
  let linkedDispatch;  
  let globalState = initState;

  // state 只能通过 dispatch 修改
  const globalDispatch = (action) => {
    if (linkedDispatch) {
      linkedDispatch(action);
    } else {
      globalState = reducer(globalState, action);
    }

    return action;
  }

  const getState = () => {
    return globalState;
  }

  function useStore() {
    const [state, dispatch] = useReducer(reducer, initState);
    const store = useMemo(() => ({
      state,
      dispatch,
      getState() {
        return state;
      }
    }), [state, dispatch]);
    if (linkedDispatch !== dispatch) {
      linkedDispatch = dispatch;
    }
    globalState = state;
    return store;
  }

  const useDispatch = () => {
    const { dispatch } = useStore(reducer, initState);
    return dispatch;
  }

  return {
    useStore,
    dispatch: globalDispatch,
    getState,
    useDispatch,
  }
}