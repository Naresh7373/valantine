function login() {
      let u = document.getElementById("username").value;
      let p = document.getElementById("password").value;

      if (u === "gayu" && p === "gayu@01082004") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "profile.html";
      } else {
        alert("Wrong username or password");
      }
    }