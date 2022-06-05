export const LoginData = (data) => {
	//alert(data);
	return {
		type: 'Login',
		payload: data,
	}
}

// export const saveSignUpData = (data) => {
// 	return {
// 		type: 'save',
// 		payload: data,
// 	}
// }

// export const saveFinalSignUpData = (data) => {
// 	//console.warn('new',data)
// 	return {
// 		type: 'savecompletedata',
// 		payload: data,
// 	}
// }

// export const saveCategories = (data) => {
// 	return {
// 		type: 'saveCategories',
// 		payload: data,
// 	}
// }

// export const saveServiceProviders = (data) => {
// 	return {
// 		type: 'saveServiceProviders',
// 		payload: data,
// 	}
// }

// export const saveUserAllData = (data) => {
// 	return {
// 		type: 'saveUserAllData',
// 		payload: data,
// 	}
// }

export const viewgym = (data) => {
	console.warn('redux',data);
	return {
		type:'viewgym',
		payload: data,
	}
}

// export const undoRow = (data) => {
	
// 	return {
// 		type:'undoRow',
// 		payload: data,
// 	}
// }

// export const increaseJobCount = (data) => {
// 	return {
// 		type:'increase',
// 		payload: data,
// 	}
// }

// export const increaseArchiveJobCount = (data) => {
// 	return {
// 		type:'archiveincrease',
// 		payload: data,
// 	}
// }

// export const updateRating = (data) => {
// 	return {
// 		type: 'update',
// 		payload: data
// 	}
// }
