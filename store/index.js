import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const store = createStore(
	reducers,
	{},
	compose(applyMiddleware(ReduxThunk), autoRehydrate())
);

persistStore(store, { storage: AsyncStorage, whitelist: ['auth'] });

export default store;
