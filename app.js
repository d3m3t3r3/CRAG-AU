// Reemplaza los valores con la configuración de tu proyecto de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAgeqyyB2jOXH8iBYzLc0xtfPssYKNN0c8",
  authDomain: "crag-db-4ebb3.firebaseapp.com",
  databaseURL: "https://crag-db-4ebb3-default-rtdb.firebaseio.com",
  projectId: "crag-db-4ebb3",
  storageBucket: "crag-db-4ebb3.appspot.com",
  messagingSenderId: "703314300243",
  appId: "1:703314300243:web:5d849f85e55d9643bb65a6",
  measurementId: "G-X7SJG6VF88"
};

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

// Inicializa el proveedor de autenticación de Google
const provider = new firebase.auth.GoogleAuthProvider();

// Función para iniciar sesión con Google
function signInWithGoogle() {
  auth.signInWithPopup(provider).then((result) => {
    console.log("Función signInWithGoogle llamada");
    console.log("Inició sesión correctamente:", result.user.displayName);
    document.getElementById("signInBtn").style.display = "none";
    document.getElementById("signOutBtn").style.display = "block";
  }).catch((error) => {
    console.error("Error al iniciar sesión:", error.message);
  });
}

// Función para cerrar sesión
function signOut() {
  // ...
}

// Observador de estado de autenticación
auth.onAuthStateChanged((user) => {
  // ...
});

// Vincula el evento 'click' al botón de inicio de sesión
document.getElementById("signInBtn").addEventListener("click", signInWithGoogle);