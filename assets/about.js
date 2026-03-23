"use strict";
fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
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
          <div class="hero-text" id="hero-text">
         <h1 class="hero-title">${this.title}</h1>
         <p class="hero-description">${this.description}</p>
        </div>
        </div>
        `;
        return hero;
      }
    }

    const heroData = data[8];
    const hero = new Hero(heroData.title, heroData.description);
    hero.render();

    class TextSection {
      constructor(textName, textDescription) {
        ((this.textName = textName), (this.textDescription = textDescription));
      }

      render() {
        const textSection = document.getElementById("text-section");
        textSection.innerHTML = `
        <div class="text-container">
        <h1>Our Story</h1>
          <div class="text-items">
            <div class="item-text item-text-1">
              <i class="fas fa-star"></i>
              <h3>${this.textName}</h3>
              <p>${this.textDescription}</p>
            </div>
             <div class="item-text item-text-2">
              <i class="fas fa-heart"></i>
              <h3>${this.textName}</h3>
              <p>${this.textDescription}</p>
            </div>
             <div class="item-text item-text-3">
              <i class="fas fa-basketball-ball"></i>
              <h3>${this.textName}</h3>
              <p>${this.textDescription}</p>
            </div>
             <div class="item-text item-text-4">
              <i class="fas fa-lightbulb"></i>
              <h3>${this.textName}</h3>
              <p>${this.textDescription}</p>
            </div>
          </div>
        </div>
        `;
        return textSection;
      }
    }

    const textSectionData = data[9];
    const textSection = new TextSection(
      textSectionData.textName,
      textSectionData.textDescription,
    );
    textSection.render();

    class Card {
      constructor(cardTitle, cardDescription) {
        this.cardTitle = cardTitle;
        this.cardDescription = cardDescription;
      }

      render() {
        const card = document.getElementById("carousel-section");
        card.innerHTML = `
       <div class="carousel-container">
          <div class="carousel">
            <div class="carousel-item">
              <h3>${this.cardTitle}</h3>
              <p>${this.cardDescription}</p>
            </div>
            <div class="carousel-item">
              <h3>${this.cardTitle}</h3>
              <p>${this.cardDescription}</p>
            </div>
            <div class="carousel-item">
              <h3>${this.cardTitle}</h3>
              <p>${this.cardDescription}</p>
            </div>
          </div>
       </div>
        `;

        return card;
      }
    }

    const cardData = data[10];
    const card = new Card(cardData.cardTitle, cardData.cardDescription);
    card.render();

    class SlideMenu {
      constructor(slideIcon, slideTitle, slideDescription) {
        this.slideIcon = slideIcon;
        this.slideTitle = slideTitle;
        this.slideDescription = slideDescription;
      }
      render() {
        const slideSection = document.getElementById("slide-section");
        slideSection.innerHTML = `
          <div class="slide-menu">
           <div class="carousel-track">
               <div class="slide">
                 <div class="slide-content">
                   <i class="${this.slideIcon} slide-icon"></i>
                   <h3>${this.slideTitle}</h3>
                   <p>${this.slideDescription}</p>
                 </div>
               </div>
               <div class="slide">
                 <div class="slide-content">
                   <i class="${this.slideIcon} slide-icon"></i>
                   <h3>${this.slideTitle}</h3>
                   <p>${this.slideDescription}</p>
                 </div>
               </div>
               <div class="slide">
                 <div class="slide-content">
                   <i class="${this.slideIcon} slide-icon"></i>
                   <h3>${this.slideTitle}</h3>
                   <p>${this.slideDescription}</p>
                 </div>
               </div>
               <div class="slide">
                 <div class="slide-content">
                   <i class="${this.slideIcon} slide-icon"></i>
                   <h3>${this.slideTitle}</h3>
                   <p>${this.slideDescription}</p>
                 </div>
               </div>
               <div class="slide">
                 <div class="slide-content">
                   <i class="${this.slideIcon} slide-icon"></i>
                   <h3>${this.slideTitle}</h3>
                   <p>${this.slideDescription}</p>
                 </div>
               </div>
               <div class="slide">
                 <div class="slide-content">
                   <i class="${this.slideIcon} slide-icon"></i>
                   <h3>${this.slideTitle}</h3>
                   <p>${this.slideDescription}</p>
                 </div>
               </div>
               <div class="slide">
                 <div class="slide-content">
                   <i class="${this.slideIcon} slide-icon"></i>
                   <h3>${this.slideTitle}</h3>
                   <p>${this.slideDescription}</p>
                 </div>
               </div>
               <div class="slide">
                 <div class="slide-content">
                   <i class="${this.slideIcon} slide-icon"></i>
                   <h3>${this.slideTitle}</h3>
                   <p>${this.slideDescription}</p>
                 </div>
               </div>
               <div class="slide">
                 <div class="slide-content">
                   <i class="${this.slideIcon} slide-icon"></i>
                   <h3>${this.slideTitle}</h3>
                   <p>${this.slideDescription}</p>
                 </div>
               </div>
           </div>
        `;

        const track = document.querySelector(".carousel-track");

        let currentCount = 0;
        const slideWidth = 400;
        const originalSlides = 8;

        function nextSlide() {
          currentCount++;
          if (currentCount >= originalSlides) {
            track.style.transition = "none";
            currentCount = 0;
            track.style.transform = `translateX(0px)`;

            setTimeout(() => {
              track.style.transition = "transform 0.5s ease-in-out";
              currentCount = 1;
              track.style.transform = `translateX(-${currentCount * slideWidth}px)`;
            }, 50);
          } else {
            track.style.transform = `translateX(-${currentCount * slideWidth}px)`;
          }
        }

        setInterval(nextSlide, 2000);

        return slideSection;
      }
    }

    const slideMenuData = data[11];
    const slideMenu = new SlideMenu(
      slideMenuData.slideIcon,
      slideMenuData.slideTitle,
      slideMenuData.slideDescription,
    );
    slideMenu.render();

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
