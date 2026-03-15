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
            <a href="#" class="nav-link">${this.link2}</a>
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
              <a href="#" class="menu-link">${this.link2}</a>
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

    class Login {
      constructor(title, email, password, btn, forgot, register, eyeIcon) {
        this.title = title;
        this.email = email;
        this.password = password;
        this.btn = btn;
        this.forgot = forgot;
        this.register = register;
        this.eyeIcon = eyeIcon;
      }

      render() {
        const login = document.querySelector(".container-login");
        login.innerHTML = `
        <h2>${this.title}</h2>
        <form class="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter Your Email" /
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="text" id="password" placeholder="Enter Your Password" />
            <i class="${this.eyeIcon}" id="eye-icon"></i>
          </div>
          <button type="submit" id="form-btn">${this.btn}</button>
          <div class="form-links">
            <a href="#">${this.forgot}</a>
            <a href="../register.html">${this.register}</a>
          </div>
        </form>
      `;

        const form = document.querySelector(".login-form");
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          if (!email || !password) {
            alert("Please fill in all fields");
            return;
          } else {
            alert("Succsesful Login");
            const loaderWrapper = document.getElementById("loader-wrapper");
            loaderWrapper.classList.add("active-loader");

            setTimeout(() => {
              loaderWrapper.classList.remove("active-loader");
              const userInfo = {
                userEmail: email,
                userPassword: password,
              };
              console.log(userInfo);
            }, 300);
          }

          form.reset();
        });

        const eyeIcon = document.getElementById("eye-icon");
        eyeIcon.addEventListener("click", () => {
          const password = document.getElementById("password");
          if (password.type === "password") {
            password.type = "text";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
          } else {
            password.type = "password";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
          }
        });

        return login;
      }
    }

    const loginData = data[6];
    const login = new Login(
      loginData.loginTitle,
      loginData.loginEmail,
      loginData.loginPassword,
      loginData.loginBtn,
      loginData.loginForgot,
      loginData.loginRegister,
      loginData.eyeIcon,
    );
    login.render();
  })
  .catch((err) => console.log("Xato:", err));
