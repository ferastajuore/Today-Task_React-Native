import { connect } from 'react-redux';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';

import { deleteTask } from '../redux/action/taskActions';

const listTasks = ({ allTasks, deleteTask }) => {
	const deleteTaskHandler = (id) => {
		deleteTask(id);
	};

	return (
		<View style={styles.ListContainer}>
			<View style={styles.card}>
				{allTasks.length !== 0 ? (
					<FlatList
						data={allTasks}
						renderItem={({ item }) => {
							return (
								<View style={styles.itemTask}>
									<Pressable
										android_ripple={{ color: '#042545' }}
										onPress={deleteTaskHandler.bind(this, item.id)}
									>
										<Text style={styles.textTask}>{item.task}</Text>
									</Pressable>
								</View>
							);
						}}
						keyExtractor={(item, index) => item.id}
					/>
				) : (
					<Text style={styles.messageText}>Thery is no task 😔</Text>
				)}
			</View>
		</View>
	);
};

const mapStateToProps = ({ tasks }) => ({
	allTasks: tasks.tasks,
});

const mapDispatchToProps = {
	deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(listTasks);

/**
 * Style Sheet
 */

const styles = StyleSheet.create({
	ListContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		width: '100%',
		alignItems: 'center',
		// backgroundColor: '#054582',
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 8,
		paddingVertical: 45,
		paddingHorizontal: 25,
		width: '92%',
		height: '90%',
		marginVertical: 10,
		elevation: 10,
		shadowColor: '#000',
	},
	itemTask: {
		backgroundColor: '#014365',
		borderRadius: 10,
		marginBottom: 20,
	},
	textTask: {
		fontSize: 14,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: '#FFF',
		padding: 15,
	},
	messageText: {
		backgroundColor: '#da4545',
		borderRadius: 10,
		marginBottom: 20,
		fontSize: 14,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: '#FFF',
		padding: 15,
		textAlign: 'center',
	},
});
