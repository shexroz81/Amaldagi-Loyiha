fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    // Show loader on page load
    const loaderWrapper = document.getElementById("loader-wrapper");
    loaderWrapper.classList.add("active-loader");

    // Hide loader after content loads
    setTimeout(() => {
      loaderWrapper.classList.remove("active-loader");
    }, 500);

    class Navbar {
      constructor(
        logo,
        src,
        link1,
        link2,
        link3,
        link4,
        link5,
        link6,
        barIcon,
        xBtn,
      ) {
        this.logo = logo;
        this.link1 = link1;
        this.link2 = link2;
        this.link3 = link3;
        this.link4 = link4;
        this.link5 = link5;
        this.link6 = link6;
        this.src = src;
        this.barIcon = barIcon;
        this.xBtn = xBtn;
      }

      render() {
        const navbar = document.querySelector(".navbar");
        navbar.innerHTML = `
          <div class="logo">
            <img src="${this.src}" alt="">
          </div>
          <nav class="nav-links">
            <a href="../index.html" class="nav-link">${this.link1}</a>
            <a href="../about.html" class="nav-link">${this.link2}</a>
            <a href="#" class="nav-link">${this.link3}</a>
            <a href="#" class="nav-link">${this.link4}</a>
            <a href="#" class="nav-link">${this.link5}</a>
            <a href="./sign.html" class="nav-link last-link">${this.link6}</a>
          </nav>
          <i class="${this.barIcon}" id="bar-icon"></i>
          <div class="menu-container" id="menu-container">
            <div class="menu-header">
              <h3>Menu</h3>
              <i class="${this.xBtn}" id="close-icon"></i>
            </div>
            <nav class="menu-links">
              <a href="../index.html" class="menu-link">${this.link1}</a>
              <a href="../about.html" class="menu-link">${this.link2}</a>
              <a href="#" class="menu-link">${this.link3}</a>
              <a href="#" class="menu-link">${this.link4}</a>
              <a href="#" class="menu-link">${this.link5}</a>
              <a href="./sign.html" class="menu-link last-link">${this.link6}</a>
            </nav>
          </div>
        `;

        const barIcon = document.getElementById("bar-icon");
        const closeIcon = document.getElementById("close-icon");
        const menuContainer = document.getElementById("menu-container");

        barIcon.addEventListener("click", () => {
          menuContainer.style.display = "block";
        });

        closeIcon.addEventListener("click", () => {
          menuContainer.style.display = "none";
        });

        return navbar;
      }
    }

    const navbarData = data[0];
    const navbar = new Navbar(
      navbarData.logo,
      navbarData.logoImg,
      navbarData.link1,
      navbarData.link2,
      navbarData.link3,
      navbarData.link4,
      navbarData.link5,
      navbarData.link6,
      navbarData.barIcon,
      navbarData.xBtn,
    );
    navbar.render();

    class Register {
      constructor(
        registerTitle,
        registerBtn,
        newEmail,
        newPassword,
        newUsername,
        registerLogin,
        eyeIcon,
        registerText,
        registerInfo,
        modalIcon,
      ) {
        this.registerTitle = registerTitle;
        this.btn = registerBtn;
        this.newEmail = newEmail;
        this.newPassword = newPassword;
        this.newUsername = newUsername;
        this.registerLogin = registerLogin;
        this.eyeIcon = eyeIcon;
        this.registerText = registerText;
        this.registerInfo = registerInfo;
        this.modalIcon = modalIcon;
      }

      render() {
        const register = document.querySelector("#register-section");
        register.innerHTML = `
        <div class="register-container">
          <h1>${this.registerTitle}</h1>
          <form class="register-form">
            <div class="form-groups">
              <label for="email">${this.newEmail}</label>
              <input type="email" id="email" placeholder="Email">
            </div>
            <div class="form-groups">
              <label for="password">${this.newPassword}</label>
              <input type="password" id="password" placeholder="Password">
              <i class="${this.eyeIcon}" id="eye-icon"></i>
              <label for="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm Password">
            </div>
            <div class="form-groups">
              <label for="username">${this.newUsername}</label>
              <input type="text" id="username" placeholder="Username">
            </div>
            <button type="submit">${this.registerLogin}</button>
            <div class="register-info">
              <a href="./sign.html">${this.registerText}</a>
              <p>${this.registerInfo}<span><i class="${this.modalIcon}"></i></span></p>
            </div>
          </form>
        </div>
        `;

        // Form submit event listener
        const form = document.querySelector(".register-form");
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const confirmPassword =
            document.getElementById("confirm-password").value;
          const username = document.getElementById("username").value;

          if (!email || !password || !username || !confirmPassword) {
            alert("Please fill in all fields");
            return;
          } else if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
          } else {
            const userInfo = {
              userEmail: email,
              userPassword: password,
              userName: username,
            };
            console.log(userInfo);
            alert("Registration successful");
          }

          form.reset();
        });

        const eyeIcon = document.getElementById("eye-icon");
        eyeIcon.addEventListener("click", () => {
          const password = document.getElementById("password");
          if (password.type === "password") {
            password.type = "text";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye-slash");
          } else {
            password.type = "password";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
          }
        });

        return register;
      }
    }

    const registerData = data[7];
    const registers = new Register(
      registerData.registerTitle,
      registerData.registerBtn,
      registerData.newEmail,
      registerData.newPassword,
      registerData.newUsername,
      registerData.registerLogin,
      registerData.eyeIcon,
      registerData.registerText,
      registerData.registerInfo,
      registerData.modalIcon,
    );
    registers.render();
  })
  .catch((err) => console.log("Xato:", err));
