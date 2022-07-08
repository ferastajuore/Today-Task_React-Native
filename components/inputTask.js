import { useState } from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import {
	View,
	StyleSheet,
	Text,
	Modal,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
	Image,
} from 'react-native';

import { createTask } from '../redux/action/taskActions';

const InputTask = ({ isVisible, closeModal, createTask }) => {
	const [task, setTask] = useState('');
	const [error, setError] = useState('');

	const submitHandler = () => {
		if (task === '') {
			return setError("The input can't be empty");
		}

		const data = {
			id: Math.random().toString(),
			task,
		};

		// make error empty
		setError('');

		// send data to action
		createTask(data);

		// make input empty
		setTask('');

		// close modal
		closeModal();
	};

	return (
		<>
			<StatusBar style="light" />
			<Modal visible={isVisible} animationType="fade">
				<View style={styles.inputContainer}>
					<View style={styles.card}>
						{/* <Text style={styles.text}>React Native</Text> */}
						<View style={styles.imageContainer}>
							<Image
								source={require('../assets/images/planning.png')}
								style={styles.image}
							/>
						</View>
						<SafeAreaView>
							<TextInput
								placeholder="Add New Task"
								style={styles.input}
								placeholderTextColor="#014365"
								value={task}
								onChangeText={(newTask) => setTask(newTask)}
							/>
							<Text style={styles.errorMessage}>{error}</Text>
						</SafeAreaView>

						<View style={styles.buttons}>
							<TouchableOpacity style={styles.AddTaskButton} onPress={submitHandler}>
								<Text style={styles.textButton}>Add Task</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.showTaskButton}>
								<Text style={styles.textButton} onPress={closeModal}>
									show Task
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</>
	);
};

const mapDispatchToProps = {
	createTask,
};

export default connect(undefined, mapDispatchToProps)(InputTask);

/**
 * Style Sheet
 */

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#033665',
		width: '100%',
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 8,
		paddingVertical: 45,
		paddingHorizontal: 25,
		width: '92%',

		elevation: 10,
		shadowColor: '#000',
	},
	imageContainer: {
		alignItems: 'center',
		marginBottom: 20,
		marginTop: 0,
	},
	image: {
		height: 100,
		width: 100,
	},

	input: {
		borderWidth: 2,
		borderColor: '#DDD',
		borderRadius: 5,
		backgroundColor: '#FFF',
		padding: 10,
		paddingHorizontal: 14,
		elevation: 10,
		shadowColor: '#333',
		// width: '80%',
	},

	buttons: {
		flexDirection: 'row-reverse',
		justifyContent: 'space-around',
		alignItems: 'center',
	},

	AddTaskButton: {
		elevation: 8,
		backgroundColor: '#014365',
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	showTaskButton: {
		elevation: 8,
		backgroundColor: '#2a3550',
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	textButton: {
		color: '#FFF',
		textAlign: 'center',
		fontSize: 16,
	},
	errorMessage: {
		color: '#ef3333',
		marginTop: 8,
		marginBottom: 15,
	},
});
