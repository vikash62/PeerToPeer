
const surveyUrl = 'http://api.surveycliq.com/api/GetUserSurvey';
const baseUrl = 'http://api.surveycliq.com/api/';
const newBaseUrl = 'http://panel.teamarcs.com/api/';
//http://api.surveycliq.com/api/GetUserSurvey?userIdendtifier=2463E5F5-9486-4C0D-A67E-BF53B428D985
import { AsyncStorage } from 'react-native';
//global.MyVar = '';
//AsyncStorage.getItem('token').then(token => global.MyVar=token);
// async function addSessionId() {
// 	global.MyVar
// 	await AsyncStorage.getItem('token').then(value => global.MyVar = value); 
//  return global.MyVar

//  }
//  addSessionId();
// console.warn(addSessionId());
//console.warn('h',tc._55);
//setTimeout(function(){ }, 200);
// const at = async =() =>{
//   var value = AsyncStorage.getItem('token')
//   return value
// }

// GET
export const imageUrl = 'http://test.bidraves.com:3000/';

export const getSurveyList = () => {
	const url = `${surveyUrl}?userIdendtifier=2463E5F5-9486-4C0D-A67E-BF53B428D985`;
	return fetch(url)
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const getSurvey = (data) => {
	const url = `${newBaseUrl}GetUserSurvey?userId=${data}`;
	console.warn(url);
	return fetch(url)
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const GetProfileCompleted = (data) => {
	const url = `${newBaseUrl}GetProfileCompleted?userId=${data}`;
	console.warn(url);
	return fetch(url)
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const GetSurveyHistory = (data) => {
	const url = `${newBaseUrl}GetSurveyHistory?UserIdentifier=${data}`;
	console.warn(url);
	return fetch(url)
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const getTransactionHistory = (data) => {
	const url = `${newBaseUrl}GetTransHistory?UserId=${data.UserId}`;
	console.log(url);
	return fetch(url)
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const GetQuestionCategories = (data) => {
	const url = `${newBaseUrl}GetQuestionCategoryWithCompletePercent?UserId=${data}`;
	//console.log(url);
	return fetch(url)
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const GetQuestionByCategory = (catId,data) => {
	const url = `${newBaseUrl}GetQuestionByCategoryMobile?categoryId=${catId}&UserId=${data}`;
	//console.warn('myurl',url);
	return fetch(url)
	.then(res => res.json())
	.catch(e => console.log(e));
}



export const getRegistered = (data) => {
	const url = `${newBaseUrl}SignUp`;
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const GoogleSignUps = (data) => {
	const url = `${newBaseUrl}GoogleSignUp`;
	console.log(data);
	console.log(url);
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const sendVerification = (data) => {
	const url = `${newBaseUrl}OtpVerify?verificationCode=${data.verificationCode}&email=${data.email}`;
	//console.warn(url);
	return fetch(url, {
		method: 'GET',
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const getPoints = (UserId) => {
	const url = `${newBaseUrl}GetPoints?UserId=${UserId}`;
	//console.warn(url);
console.warn("userID",UserId)
	return fetch(url, {
		method: 'GET',
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const login = (data) => {
	const url = `${newBaseUrl}Login?email=${data.email}&password=${data.password}`;
	console.warn(url);
	return fetch(url, {
		method: 'GET',
		//body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const checkDuplicateEmail = (data) => {
	const url = `${newBaseUrl}CheckEmailExists?email=${data.email}`;
	//console.warn(url);
	return fetch(url, {
		method: 'GET',
		//body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const checkExistEmail = (data) => {
	const url = `${newBaseUrl}CheckGoogleEmail?Email=${data.Email}`;
	console.warn(url);
	return fetch(url, {
		method: 'GET',
		//body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const checkDuplicateNumber = (data) => {
	const url = `${newBaseUrl}CheckMobileExists?mobile=${data.mobile}`;
	//console.warn(url);
	return fetch(url, {
		method: 'GET',
		//body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const getPollQuestion = (data) => {
	const url = `${newBaseUrl}GetTodaysPoll?UserId=${data}`;
	//console.warn(url);
	return fetch(url, {
		method: 'GET',
		//body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const GetPollTransAverage = (data) => {
	const url = `${newBaseUrl}GetPollTransAverage?pollId=${data}`;
	//console.warn(url);
	return fetch(url, {
		method: 'GET',
		//body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const PostPollAnswer = (data) => {
	const url = `${newBaseUrl}PostPollAnswer`;
	console.warn(data);
	//console.log(url);
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

//forgot password 


export const ForgotPassword = (data) => {
	const url = `${newBaseUrl}ForgotPassword?Email=${data.email}`;
	//console.warn(url);
	return fetch(url, {
		method: 'GET',
		//body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

//post user data

export const PostUserDetail = (data) => {
	const url = `${newBaseUrl}PostUserDetail`;
	console.log(url);
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		 headers: {
		 	'Content-Type': 'application/json'
		 }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const GetProfile = (data) => {
	const url = `${newBaseUrl}GetUserProfile?Email=${data}`;
	console.log(url);
	console.warn(data)
	return fetch(url, {
		method: 'GET',
		// body: JSON.stringify(data),
		//  headers: {
		//  	'Content-Type': 'application/json'
		//  }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const PostQuestionAnswer = (data) => {
	const url = `${newBaseUrl}PostProfileQuestion`;
	console.warn('data',data);
	console.warn('url',url);
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const GetRedeemPoint = (data) => {
	const url = `${newBaseUrl}GetRedeemPoint?userId=${data}`;
	//console.warn(data);
	//console.log(url);
	// alert(JSON.stringify(data))
	return fetch(url, {
		method: 'GET',
		// body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const GetUserPaymentDetails = (data) => {
	const url = `${newBaseUrl}GetUserPaymentDetails?userId=${data}`;
	//console.warn(data);
	//console.log(url);
	// alert(JSON.stringify(data))
	return fetch(url, {
		method: 'GET',
		// body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const PostRedemPoint = (data) => {
	const url = `${newBaseUrl}PostRedemPoint`;
	console.warn('kk',data);
	console.log(url);
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
		'Content-Type': 'application/json'
		}
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const GetRedeemHistroyById = (data) => {
	const url = `${newBaseUrl}GetRedeemHistroyById?userId=${data}`;
	//console.warn(data);
	//console.log(url);
	return fetch(url, {
		method: 'GET',
		// body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const PostSurveyHistory = (data) => {
	const url = `${newBaseUrl}PostSurveyHistory`;
	console.warn('kk',data);
	console.log(url);
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
		'Content-Type': 'application/json'
		}
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

export const GetCountry = (data) => {
	const url = `${newBaseUrl}GetAPICountry`;
	//console.warn(data);
	//console.log(url);
	return fetch(url, {
		method: 'GET',
		// body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}
 export const PostReferral =(data)=>{
	const url = `${newBaseUrl}PostReferral`;
	return fetch(url, {
		method: 'GET',
		// body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));

 }

 export const Refralcode = (data) => {
	const url = `${newBaseUrl}GetReferralCode?UserId=${data}`;
	//console.warn(data);
	// alert(url)
	return fetch(url, {
		method: 'GET',
		// body: JSON.stringify(data),
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	.then(res => res.json())
	.catch(e => console.log(e));
}

