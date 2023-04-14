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
  auth.signOut().then(() => {
    console.log("Sesión cerrada correctamente");
    document.getElementById("signInBtn").style.display = "block";
    document.getElementById("signOutBtn").style.display = "none";
  }).catch((error) => {
    console.error("Error al cerrar sesión:", error.message);
  });
}

// Observador de estado de autenticación
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Usuario autenticado:", user.displayName);
    document.getElementById("signInBtn").style.display = "none";
    document.getElementById("signOutBtn").style.display = "block";
  } else {
    console.log("Usuario no autenticado");
    document.getElementById("signInBtn").style.display = "block";
    document.getElementById("signOutBtn").style.display = "none";
  }
});
const searchButton = document.getElementById('search-button'); // Asegúrate de que el botón tenga un id='search-button' en tu archivo HTML
const plateInput = document.getElementById('plate-input'); // Asegúrate de que el campo de entrada tenga un id='plate-input' en tu archivo HTML

searchButton.addEventListener('click', () => {
  const plate = plateInput.value.trim(); // Obtiene el valor ingresado en el campo de entrada de la placa y elimina los espacios en blanco

  if (plate) {
    // Cambia la referencia según la estructura de tu base de datos en Firebase
    const plateRef = firebase.database().ref('motos/' + plate);

    plateRef.once('value', (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const estado = data.estado; // Asume que el campo 'estado' está en la base de datos
        console.log('Estado de la moto:', estado);
        // Muestra el estado de la moto en la página o realiza otras acciones
      } else {
        console.log('La placa no se encuentra en la base de datos');
        // Muestra un mensaje de error en la página o realiza otras acciones
      }
    }).catch((error) => {
      console.error('Error al buscar la placa:', error);
    });
  } else {
    console.log('Por favor, ingrese una placa');
    // Muestra un mensaje de error en la página o realiza otras acciones
  }
});