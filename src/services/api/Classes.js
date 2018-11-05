import axios from 'axios';

export default {

	getClasses() {
		return axios.get('/classes')
			.then(response => {
				return response.data;
			})
	},

	getClass (id) {
		return axios.get(/classes/ + id)
			.then(response => {
				return response.data;
			})
	}
}
