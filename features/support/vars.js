module.exports = {
	//web application page&popup list
	pageList: {
		// home page 
		home: {
			// deciding is page or popup
			isPopup: false,
			// used for pages
			url: "https://www.udemy.com/",
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
		// feature page
		featured: {
			// deciding is page or popup
			isPopup: false,
			url: "https://www.udemy.com/courses/",
			class: "",
			// used for page loaded
			validationElement: {
				dataPurpose: "instructor-dropdown",
				dataPurposePrefix: "a"
			}
		}
	}
};