var startPathPrefixDev = "sabrimutlucag.dev.";
var startPathPrefixLive = "www.";
var startPath = "https://"+ startPathPrefixLive +"udemy.com/";

function getDataPurposeOfElement(text, type) {
	let elements;
	
	switch(type) {
		case 'link':
			elements = this.elementList.linkList;
			break;
		case 'input':
			elements = this.elementList.inputList;
			break;
		case 'button':
			elements = this.elementList.buttonList;
			break;
	}

	for (var element in elements) {
		if (elements[element].identifier === text) {
			return elements[element].dataPurpose;
		}
	};

	return null;
};

module.exports = {
	//web application page&popup list
	pageList: {
		// home page 
		home: {
			getDataPurposeOfElement: getDataPurposeOfElement,
			// deciding is page or popup
			isPopup: false,
			// used for pages
			url: startPath,
			//used for popups
			class: "",
			//used for page loaded
			validationElement: {
				dataPurpose: "",
				dataPurposePrefix: ""
			},
			//page's/popup's element list
			elementList: {
				//links contained by page/popup 
				linkList: {
					 udemy_for_business: {
					 	// is used on feature for gathering element object value
					 	identifier: "Udemy for Business",
					 	dataPurpose: "",
					 	clickable: true,
					 	writable: false
					 },
					 become_an_instructor: {
					 	identifier: "Become an Instructor",
					 	// unique css selector for data purpose
					 	dataPurpose: "instructor-dropdown",
					 	clickable: true,
					 	writable: false
					 },
					 login: {
					 	identifier: "Login",
					 	// unique css selector for data purpose
					 	dataPurpose: "login",
					 	clickable: true,
					 	writable: false
					 },
					 sign_up: {
					 	identifier: "Sign Up",
					 	// unique css selector for data purpose
					 	dataPurpose: "header-signup",
					 	clickable: true,
					 	writable: false
					 }
				}
			}
		},
		// login popup
		login: {
			getDataPurposeOfElement: getDataPurposeOfElement,
			// deciding is page or popup
			isPopup: true,
			url: "",
			//used for popups
			class: ".loginbox-v4",
			//page's/popup's element list
			elementList: {
				//inputs contained by page/popup
				inputList: {
					email: {
						identifier: "Email",
						dataPurpose: "email",
						clickable: true,
					 	writable: true
					},
					password: {
						identifier: "Password",
						dataPurpose: "password",
						clickable: true,
					 	writable: true
					}
				},
				//buttons contained by page/popup
				buttonList: {
					login: {
						identifier: "Login",
						dataPurpose: "do-login",
						clickable: true,
					 	writable: true
					}
				}
			}
		},
		// login popup
		signup: {
			getDataPurposeOfElement: getDataPurposeOfElement,
			// deciding is page or popup
			isPopup: true,
			url: "",
			//used for popups
			class: ".js-signin-box",
			//page's/popup's element list
			elementList: {
				//inputs contained by page/popup
				inputList: {
					fullname: {
						identifier: "Fullname",
						dataPurpose: "fullname",
						clickable: true,
						writable:true
					},
					email: {
						identifier: "Email",
						dataPurpose: "email",
						clickable: true,
					 	writable: true
					},
					password: {
						identifier: "Password",
						dataPurpose: "password",
						clickable: true,
					 	writable: true
					}
				},
				//buttons contained by page/popup
				buttonList: {
					signup: {
						identifier: "Sign Up",
						dataPurpose: "do-signup",
						clickable: true,
					 	writable: true
					}
				}
			}
		},
		// feature page
		featured: {
			getDataPurposeOfElement: getDataPurposeOfElement,
			// deciding is page or popup
			isPopup: false,
			url: startPath + "courses/",
			class: "",
			// used for page loaded
			validationElement: {
				dataPurpose: "cart-icon",
				dataPurposePrefix: "i"
			}
		}
	}
};