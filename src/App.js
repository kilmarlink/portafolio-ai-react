import "./styles.css";
import React from "react";

function Header() {
  return (
    <header>
      <h1>Mi Portafolio de Desarrollo Web</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#sobre-mi">Sobre mi</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

function About() {
  return (
    <section id="sobre-mi">
      <h2>Sobre mi</h2>
      <p>
        Soy un desarrollador web con experiencia en HTML, CSS y JavaScript. Me
        apasiona crear soluciones en línea que sean fáciles de usar y atractivas
        para el usuario.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="proyectos">
      <h2>Mis Proyectos</h2>
      <ul>
        <li>Proyecto 1</li>
        <li>Proyecto 2</li>
        <li>Proyecto 3</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

function Footer() {
  return <footer>&copy; 2023 Kilmar Link</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
