import { auto } from '@popperjs/core'
import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <body>
        <section id='header'>
          <div class='header container'>
            <div class='nav-bar'>
              <div class='brand'>
                <a href='#hero'>
                  <h1>
                    <span>L</span>AURA<span>S</span>EREDE
                  </h1>
                </a>
              </div>
              <div class='nav-list'>
                <div class='hamburger'>
                  <div class='bar'></div>
                </div>
                <ul>
                  <li>
                    <a href='#hero' data-after='Home'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#services' data-after='Service'>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href='#projects' data-after='Projects'>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href='#about' data-after='About'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='#contact' data-after='Contact'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          id='hero'
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg')",
            backgroundSize: auto,
          }}
        >
          <div class='hero container'>
            <div>
              <h1>
                Hello, <span></span>
              </h1>
              <h1>
                My Name is <span></span>
              </h1>
              <h1>
                Laura. <span></span>
              </h1>
              <h1>
                Scroll down to learn more. <span></span>
              </h1>
              <a href='#' type='button' class='cta'>
                Portfolio
              </a>
            </div>
          </div>
        </section>
        <section id='about'>
          <div class='about container'>
            <div class='col-left'>
              <div class='about-img'>
                <img src='./Laura.jpg' alt='img' />
              </div>
            </div>
            <div class='col-right'>
              <h1 class='section-title'>
                About <span>me</span>
              </h1>
              <h2>Telecommunication and Information Engineer</h2>
              <p>
                I am a 3rd year student in Jomo Kenyatta University of
                Agriculture And Technology
              </p>
              <a href='#' class='cta'>
                Download CV
              </a>
            </div>
          </div>
        </section>
        <section id='services'>
          <div class='services container'>
            <div class='service-top'>
              <h1 class='section-title'>
                Serv<span>i</span>ces
              </h1>
            </div>
            <div class='service-bottom'>
              <div class='service-item'>
                <div class='icon'>
                  <img
                    src='https://img.icons8.com/clouds/100/000000/services.png'
                    alt=''
                  />
                </div>
                <h2>Web Developer</h2>
                <p>
                  I amconversant with HTML,CSS and a little JAVASCRIPT all
                  important programming languages in building a website. I can
                  build you a nice and interactive website such as this.
                </p>
              </div>
              <div class='service-item'>
                <div class='icon'>
                  <img
                    src='https://img.icons8.com/clouds/100/000000/services.png'
                    alt=''
                  />
                </div>
                <h2>cybersecurity</h2>
                <p>
                  I am currently taking a course in cybersecurity which gives me
                  the knowledge to be a penetration tester to ensure there is no
                  risk of a hacker obtaing crutial and sensitive information
                  from your server or even private details about you from your
                  laptop.
                </p>
              </div>
              <div class='service-item'>
                <div class='icon'>
                  <img
                    src='https://img.icons8.com/clouds/100/000000/services.png'
                    alt=''
                  />
                </div>
                <h2>Telecommunication Engineer</h2>
                <p>
                  I configures or designs voice,data, and video communications
                  systems. Your responsibilities in this career include working
                  to install or maintain telephones, networks, telecom
                  equipment, telephony elements,voicemail systems, or
                  conferencing systems.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id='projects'>
          <div class='projects container'>
            <div class='projects-header'>
              <h1 class='section-title'>
                Recent <span>Projects</span>
              </h1>
            </div>
            <div class='All-Projects'>
              <div class='project-items'>
                <div class='project-info'>
                  <h1>Project 1</h1>
                  <h2>Microcontrollers.</h2>
                  <p>
                    Microcontrollers are small computers on a single VLSI
                    intergrated circuit chip.There are different types of
                    micocontrollers each created uniquely for different
                    purposes.I am currently working on the ARDUINO
                    microcontroller which is incorporated in many projects such
                    as detection of dust concentration mostly used in AC
                    systems,measuring and regulating temperature used in the
                    thermostats,water pumping system used in smart farms,door
                    locks automation and many more.I am also farmilizing myself
                    with the Raspberry Pi to enable myself learn more about
                    computing and building hardware projects such as door
                    automation.{' '}
                  </p>
                </div>
                <div class='project-img'>
                  <img src='./arduino.jpg' alt='img' />
                </div>
                <div class='project-items'>
                  <div class='project-info'>
                    <h1>Project 2</h1>
                    <h2>Coding.</h2>
                    <p>
                      I am conversant with a few programming langages such as
                      python which is used hand in hand with cybersecurity and
                      app development ,HTML and CSS which i use to create
                      websites and C which I use in the Arduino projects.I am
                      also currently working on JAVASCRIPT,SQL and C++ to widen
                      my scope in the programming language world and the fast
                      growing development sector.
                    </p>
                  </div>
                  <div class='project-img'>
                    <img src='./istockphoto.jpg' alt='img' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='contact'>
          <div class='contact container'>
            <div>
              <h1 class='section-title'>
                Contact <span>info</span>
              </h1>
            </div>
            <div class='contact-items'>
              <div class='contact-item'>
                <div class='icon'>
                  <img src='./icons8-phone-96.png' />
                </div>
                <div class='contact-info'>
                  <h1>Phone Number</h1>
                  <h2>+25492107175</h2>
                </div>
              </div>
              <div class='contact-item'>
                <div class='icon'>
                  <img
                    src='https://img.icons8.com/pastel-glyph/64/000000/email-sync.png'
                    alt=''
                  />
                </div>
                <div class='contact-info'>
                  <h1>Email Address</h1>
                  <a href='mailto:lauraserede@gmail.com'></a>
                  <h2>lauraserede@gmail.com</h2>
                </div>
              </div>
              <div class='contact-item'>
                <div class='icon'>
                  <img
                    src='https://img.icons8.com/external-glyph-wichaiwi/64/000000/external-address-general-data-protection-regulation-gdpr-glyph-wichaiwi.png'
                    alt=''
                  />
                </div>
                <div class='contact-info'>
                  <h1>Home Address</h1>
                  <h2>Eldoret,Kenya</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='footer'>
          <div class='footer container'>
            <div class='brand'>
              <h1>
                <span>L</span>aura <span>S</span>erede
              </h1>
            </div>
            <h2></h2>
            <div class='social-icon'>
              <div class='social-item'>
                <a href='https://ke.linkedin.com/' target='_blank'>
                  <img
                    src='https://img.icons8.com/nolan/64/linkedin-circled.png'
                    alt=''
                  />
                </a>
              </div>
              <div class='social-item'>
                <a href='https://instagram.com' target='_blank'>
                  <img
                    src='https://img.icons8.com/bubbles/100/000000/instagram-new.png'
                    alt=''
                  />
                </a>
              </div>
              <div class='social-item'>
                <a href='https://twitter.com/i/trends' target='_blank'>
                  <img src='./icons8-twitter-50.png' alt='' />
                </a>
              </div>
              <div class='social-item'>
                <a href='https://behance.net' target='_blank'>
                  <img
                    src='https://img.icons8.com/bubbles/100/000000/behance.png'
                    alt=''
                  />
                </a>
              </div>
            </div>
            <p></p>
          </div>
        </section>
      </body>
    </>
  )
}

export default App
