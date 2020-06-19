import { ImmerReducer, Subscription } from 'umi';

// import { GlobalModelState } from './types.d';

export interface GlobalModelState {
  pathName?: string;
  search?: string;
  query?: object;
}

export interface LocationProps {
  query?: object;
  pathname?: string;
  search?: string;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  // effects: {
  //   query: Effect;
  // };
  reducers: {
    save: ImmerReducer<GlobalModelState>;
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  subscriptions: {
    setup({ history, dispatch }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      history.listen(
        ({
          pathname: pathName = '',
          search = '',
          query = {},
        }: LocationProps): void => {
          console.log(pathName);
          dispatch({
            type: 'save',
            payload: {
              pathName,
              search,
              query,
            },
          });
        },
      );
    },
  },
  state: {
    pathName: '',
    search: '',
    query: {},
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default GlobalModel;
