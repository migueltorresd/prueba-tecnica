/**
 * se crea funcion carga para enviar formulario con los datos del usuario 
 * para la base de datos en mongo
 */
const username= document.getElementById('username')
const password= document.getElementById('password')
const button= document.getElementById('button')
button.addEventListener("click", (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data)
})
   

 function carga(ea) {
    ea.preventDefault();
  
    const datos = {
     
      usuario: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
  
    fetch(
     // "http://localhost:3000/api/v1/contacts/new/contact",
      "http://localhost:3000/user",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      }
    )
      .then((res) => res.json())
      .then((datos) => {
        console.log(datos)
      });
  }
Footer
