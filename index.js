import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';

const RNRedux = () => {
	return (
		<Provider>
			<App />
		</Provider>
	);
};

AppRegistry.registerComponent(appName, () => RNRedux);
