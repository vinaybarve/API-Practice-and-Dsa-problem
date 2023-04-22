const Login = async () => {
  event.preventDefault();
  let obj = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  await fetch(`https://reqres.in/api/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.token) {
        alert(`login Sucessful, token=${res.token}`);
        window.location.href = "./admin/admin.html";
      } else {
        alert("Worng Credential");
      }
    })
    .catch((err) => console.log(err));
};
