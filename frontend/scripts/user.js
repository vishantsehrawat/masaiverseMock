// urls 

let deployedUrl ="https://masaiversejsonserver2.onrender.com/users"
let localUrl = "http://localhost:3000/users"



//catching all the elements

let form = document.getElementById("form")


//sending the post request to store the user data


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value
  let age = document.getElementById("age").value
  let place = document.getElementById("place").value
  let batch = document.getElementById("batch").value
  let profession = document.getElementById("profession").value
  let data = {
    name, age, place, batch, profession
  }
  console.log("🚀 ~ file: user.js:23 ~ form.addEventListener ~ data:", data)

  submitUserData(data);


})
async function submitUserData(data) {
  try {
    const response = await fetch(deployedUrl, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
    alert("successfully registered")
  } catch (error) {
    console.error("Error:", error);
  }
}
