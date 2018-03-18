(function(){

	// Inicializar Firebase
	  var config = {
	    apiKey: "AIzaSyCJbzQ4bQeXFBqNhZfikapR7byyHSVg7C4",
	    authDomain: "fir-webautentificacion.firebaseapp.com",
	    databaseURL: "https://fir-webautentificacion.firebaseio.com",
	    projectId: "fir-webautentificacion",
	    storageBucket: "",
	    messagingSenderId: "176692262088"
	  };
	  firebase.initializeApp(config);

	  //Obtener los elementos de index.html por su id=""
	  const txtEmail    = document.getElementById('txtEmail');
	  const txtPassword = document.getElementById('txtPassword');
	  const btnLogin    = document.getElementById('btnLogin');
	  const btnSignUp   = document.getElementById('btnSignUp');
	  const btnLogout   = document.getElementById('btnLogout');

	  //Añadir Evento al botòn (Login)
	  btnLogin.addEventListener('click',e =>{
	  	//Obtener el Email y la password
	  	const email = txtEmail.value;
	  	const pass  = txtPassword.value;
	  	const auth  = firebase.auth();
	  	//Sign in
	  	const promise = auth.signInWithEmailAndPassword(email,pass);
	  	promise.catch(e => console.log(e.message));
	  });

	  //Añadir Evento al botòn (SignUp)
	  btnSignUp.addEventListener('click',e =>{
	  	//Obtener el Email y la password
	  	//TODO:Comprobar que el email sea real
	  	const email = txtEmail.value;
	  	const pass  = txtPassword.value;
	  	const auth  = firebase.auth();
	  	//Sign in
	  	const promise = auth.createUserWithEmailAndPassword(email,pass);
	  	promise.catch(e => console.log(e.message));
	  });

	  //Cerrar Sesion del Usuario
	  btnLogout.addEventListener('click',e=>{
	  	firebase.auth().signOut();
	  });

	  //Añadir un Listener en tiempo real
	  firebase.auth().onAuthStateChanged(firebaseUser=>{
	  	if (firebaseUser) {
	  		console.log(firebaseUser);
	  		btnLogout.classList.remove('hide');
	  	}else{
	  		console.log('no logueado');
	  		btnLogout.classList.add('hide');
	  	}
	  });
 }());