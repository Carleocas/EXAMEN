
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import {getFirestore,collection,addDoc,query,getDocs} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBE4WV-vxGTDqxOI3ckujzBJ-5rK3E3iNE",
    authDomain: "bdtics-7a92e.firebaseapp.com",
    projectId: "bdtics-7a92e",
    storageBucket: "bdtics-7a92e.appspot.com",
    messagingSenderId: "187744087098",
    appId: "1:187744087098:web:793a8131b1ea62c3699903"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db =getFirestore(app);

  let botonenviar=document.getElementById("Btnenviar");
  let btnconsulta=document.getElementById("btnConsulta");
 const list=document.querySelector("ul");

  botonenviar.addEventListener("click",guardar);
  btnconsulta.addEventListener("click",Consultar);


  async function guardar()
  {
    let nombre=document.getElementById("nombre").value;
    let correo=document.getElementById("correo").value;
    let asunto=document.getElementById("asunto").value;
    let mensaje=document.getElementById("mensaje").value;

    const docRef=await addDoc(collection(db,"sugerencias"),{
      nombre:nombre,
      correo:correo,
      asunto:asunto,
      mensaje:mensaje

    });

    alert("Almacenado correctamente");
    document.getElementById("nombre").value="";
    document.getElementById("correo").value="";
    document.getElementById("asunto").value="";
    document.getElementById("mensaje").value="";
  }

  async function Consultar()
  {
    const consulta=query(collection(db,"sugerencias"));
    const query_consulta=await getDocs(consulta);

    query_consulta.forEach((doc)=>
    {
        console.log(doc.id, " =>", doc.data());
        console.log(doc.data().nombre);
        console.log(doc.data().correo);
        console.log(doc.data().asunto);
        console.log(doc.data().mensaje);

        let html =`
            <div>${doc.data().nombre} </div>
            <div>${doc.data().correo} </div>
            <div>${doc.data().asunto} </div>
            <div>${doc.data().mensaje} </div>
        
        `;
         list.innerHTML +=html;

     });
  }


