import { useState } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { InputTask, ListTasks } from './components';
import configureStore from './redux/story/reduser';

const store = configureStore();

const App = () => {
	const [isVisible, setIsVisible] = useState(true);

	const showModalVisible = () => {
		setIsVisible(true);
	};

	const clossModalVisible = () => {
		setIsVisible(false);
	};

	return (
		<>
			<StatusBar style="light" />
			<Provider store={store}>
				<View style={styles.container}>
					<Pressable style={styles.styleButton} onPress={showModalVisible}>
						<Text style={styles.textButton}>Add new Task</Text>
					</Pressable>

					<InputTask isVisible={isVisible} closeModal={clossModalVisible} />

					<ListTasks />
				</View>
			</Provider>
		</>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#042545',
		alignItems: 'center',
		color: '#FFF',
	},
	styleButton: {
		elevation: 8,
		backgroundColor: '#014365',
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginTop: 80,
		marginBottom: 25,
	},
	textButton: {
		color: '#FFF',
		textAlign: 'center',
		fontSize: 16,
	},
});
