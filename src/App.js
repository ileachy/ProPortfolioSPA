import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header class="navbar">
        <h1 class="logo">The Ian Index</h1>
        <input type="checkbox" class="nav-toggle" id="nav-toggle" />
        <nav class="nav-items">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contact Me</a>
            </li>
          </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
          <span></span>
        </label>
      </header>
      <main class="content">
        <section id="about">
          <div class="parts">
            <h2>About me!</h2>
            <div class="part-info">
              <p>
                Hi, My name is Ian Leach and I am a 26 year old coding student
                from Ohio. I am very excited to learn about full-stack
                development, ethical hacking and even game development as well
                in the future.
              </p>
            </div>
          </div>
        </section>
        <section id="projects">
          <div class="parts">
            <h2>Projects!</h2>
            <div class="part-info">
              <div class="part-img">
                <div class="img-title">
                  <a href="https://ileachy.github.io/Job-hunter/">
                    Job Hunter job search
                  </a>
                </div>
                <div class="img">
                  <img src="./assets/images/TheJobHunterFinal.png" alt="" />
                </div>
              </div>
              <div class="part-img">
                <div class="img-title">
                  <a src="" href="https://arcane-reef-45830.herokuapp.com/">
                    Sweet Sports Stuff ecommerce
                  </a>
                </div>
                <div class="img">
                  <img src="./assets/images/sweetSportsStuff.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contacts">
        <div class="footer-content">
          <h2 class="section-title">Contact me!</h2>
        </div>
      </footer>
    </>
  );
}

export default App;
