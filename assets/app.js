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

    class Hero {
      constructor(title, description, btnText, btnLink) {
        this.title = title;
        this.description = description;
        this.btnText = btnText;
        this.btnLink = btnLink;
      }

      render() {
        const hero = document.querySelector(".hero");
        hero.innerHTML = `
        <div class="hero-content">
          <div class="hero-text">
         <h1>${this.title}</h1>
         <p>${this.description}</p>
        </div>
      <div class="btns">
     <a href="#" class="btn btn1">${this.btnText}</a>
     <a href="#" class="btn btn2">${this.btnLink}</a>
     </div>
        </div>
        `;
        return hero;
      }
    }

    const heroData = data[1];
    const hero = new Hero(
      heroData.title,
      heroData.description,
      heroData.btnText,
      heroData.btnLink,
    );
    hero.render();

    class Columns {
      constructor(mainTitle, descriptions, title, icon1, icon2, icon3, icon4) {
        this.mainTitle = mainTitle;
        this.descriptions = descriptions;
        this.title = title;
        this.icon1 = icon1;
        this.icon2 = icon2;
        this.icon3 = icon3;
        this.icon4 = icon4;
      }

      render() {
        const columns = document.querySelector(".columns");
        columns.innerHTML = `
          <div class="columns-content">
            <div class="columns-text">
              <h2>${this.mainTitle}</h2>
              <p>${this.descriptions}</p>
            </div>
            <div class="columns-icons">
            <div class="description-block">
              <h2>${this.title}</h2>
            </div>
            <div class="column-item">
            <i class="${this.icon1}"></i>
            <h4>Bootstrap-powered</h4>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="column-item">
            <i class="${this.icon2}"></i>
            <h4>Bootstrap-powered</h4>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="column-item">
            <i class="${this.icon3}"></i>
            <h4>Bootstrap-powered</h4>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="column-item">
            <i class="${this.icon4}"></i>
            <h4>Bootstrap-powered</h4>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        `;
        return columns;
      }
    }

    const columnMenu = data[2];
    const column = new Columns(
      columnMenu.mainTitle,
      columnMenu.descriptions,
      columnMenu.title,
      columnMenu.icon1,
      columnMenu.icon2,
      columnMenu.icon3,
      columnMenu.icon4,
    );
    column.render();

    class questions {
      constructor(
        title,
        descriptionOne,
        descriptionTwo,
        descriptionThree,
        descriptionFour,
      ) {
        this.title = title;
        this.descriptionOne = descriptionOne;
        this.descriptionTwo = descriptionTwo;
        this.descriptionThree = descriptionThree;
        this.descriptionFour = descriptionFour;
      }

      render() {
        const questions = document.querySelector(".questions");
        questions.innerHTML = `
          <div class="question-container">
            <h1>${this.title}</h1>
            <div class="questions-column">
              <div class="question-item">
                <h2>${this.descriptionOne}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
              <div class="question-item">
                <h2>${this.descriptionTwo}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
              <div class="question-item">
                <h2>${this.descriptionThree}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
              <div class="question-item">
                <h2>${this.descriptionFour}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>
          </div>
        `;
        return questions;
      }
    }

    const questionsData = data[3];
    const BlockQuestions = new questions(
      questionsData.title,
      questionsData.descriptionOne,
      questionsData.descriptionTwo,
      questionsData.descriptionThree,
      questionsData.descriptionFour,
    );
    BlockQuestions.render();

    class More {
      constructor(text, btn) {
        this.text = text;
        this.btn = btn;
      }

      render() {
        const more = document.querySelector(".more");
        more.innerHTML = `
          <div class="more-content">
            <p class="more-text">${this.text}</p>
            <button class="more-btn">${this.btn}</button>
          </div>
        `;
        return more;
      }
    }

    const moreData = data[4];
    const more = new More(moreData.text, moreData.btn);
    more.render();

    class Footer {
      constructor(
        contactTitle,
        phone,
        email,
        address,
        followTitle,
        twitter,
        google,
        rss,
        facebook,
        widgetTitle,
        widgetText1,
        widgetText2,
      ) {
        this.contactTitle = contactTitle;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.followTitle = followTitle;
        this.twitter = twitter;
        this.google = google;
        this.rss = rss;
        this.facebook = facebook;
        this.widgetTitle = widgetTitle;
        this.widgetText1 = widgetText1;
        this.widgetText2 = widgetText2;
      }

      render() {
        const footer = document.querySelector(".footer");
        footer.innerHTML = `
          <div class="footer-content">
            <div class="footer-column">
              <h3>${this.contactTitle}</h3>
              <p><i class="fa-solid fa-phone"></i> ${this.phone}</p>
              <p><i class="fa-solid fa-envelope"></i> ${this.email}</p>
              <p><i class="fa-solid fa-location-dot"></i> ${this.address}</p>
            </div>
            <div class="footer-column">
              <h3>${this.followTitle}</h3>
              <div class="social-links">
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-google-plus"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
              </div>
            </div>
            <div class="footer-column">
              <h3>${this.widgetTitle}</h3>
              <p>${this.widgetText1}</p>
              <p>${this.widgetText2}</p>
            </div>
          </div>
        `;
        return footer;
      }
    }

    const footerData = data[5];
    const footer = new Footer(
      footerData.contactTitle,
      footerData.phone,
      footerData.email,
      footerData.address,
      footerData.followTitle,
      footerData.twitter,
      footerData.google,
      footerData.rss,
      footerData.facebook,
      footerData.widgetTitle,
      footerData.widgetText1,
      footerData.widgetText2,
    );
    footer.render();
  })

  .catch((err) => console.log("Xato:", err));
