// Week 8 starter: React State & Interactive Components
// TODO: Break down your week 7 monolithic component into separate components
// Each component should manage its own state as appropriate

import './App.css'
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="portfolio">
      <h1>Week 8: React State & Interactive Components</h1>
      <p>Follow the README instructions to build your component-based portfolio!</p>

      {/* TODO: Import and add components here:
          -done <Navbar />
          -done <Hero />
          -done <About />
          -done <Skills />
          - <Projects />
          - <Contact />
          - <Footer />
      */}


      
      <Navbar />

      
      {
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Lilia Mora</h1>
                <p className="hero-subtitle">Frontend Developer & UI Designer</p>
                <p className="hero-tagline">Creating beautiful, responsive web experiences with modern technologies</p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                </div>
            </div>
        </section>
      }


      {
        <section id="about" className="section">
              <div className="container">
                  <h2>About Me</h2>
                  <div className="about-grid">
                      <div className="about-text">
                          <p>I am passionate about the technical aspects of networking and I enjoy a creative approach to problem solving.</p>
                          <div className="about-details">
                              <div className="detail-item">
                                  <span className="detail-icon">📍</span>
                                  <span>San Mateo, CA</span>
                              </div>
                              <div className="detail-item">
                                  <span className="detail-icon">✉️</span>
                                  <a href="mailto:mora.larraga@gmail.com">mora.larraga@gmail.com</a>
                              </div>
                              <div className="detail-item">
                                  <span className="detail-icon">📱</span>
                                  <span>(650) 200-8165</span>
                              </div>
                          </div>
                      </div>
                      <div className="about-availability">
                          <h3>Currently Available For:</h3>
                          <div className="availability-tags">
                              <span className="tag tag-available">Freelance</span>
                              <span className="tag tag-available">Full-Time</span>
                              <span className="tag tag-available">Remote</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      }


      {
        <section id="skills" className="section section-alt">
          <div className="container">
              <h2>Skills & Technologies</h2>
              <div className="skills-grid">
                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">⚛️</span>
                          <h3 className="skill-name">React</h3>
                      </div>
                      <div className="skill-category">Frontend Framework</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{ "--skill-level": "90" }}></div>
                      </div>
                      <span className="skill-percentage">90%</span>
                  </div>

                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🎨</span>
                          <h3 className="skill-name">CSS3</h3>
                      </div>
                      <div className="skill-category">Styling</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{"--skill-level": "95%"}}></div>
                      </div>
                      <span className="skill-percentage">95%</span>
                  </div>

                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">📱</span>
                          <h3 className="skill-name">Responsive Design</h3>
                      </div>
                      <div className="skill-category">Design</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{"--skill-level": "88%"}}></div>
                      </div>
                      <span className="skill-percentage">88%</span>
                  </div>

                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🚀</span>
                          <h3 className="skill-name">JavaScript</h3>
                      </div>
                      <div className="skill-category">Programming</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{"--skill-level": "85%"}}></div>
                      </div>
                      <span className="skill-percentage">85%</span>
                  </div>

                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🎯</span>
                          <h3 className="skill-name">Figma</h3>
                      </div>
                      <div className="skill-category">Design Tools</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{"--skill-level": "80%"}}></div>
                      </div>
                      <span className="skill-percentage">80%</span>
                  </div>

                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🌐</span>
                          <h3 className="skill-name">Node.js</h3>
                      </div>
                      <div className="skill-category">Backend</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{"--skill-level": "75%"}}></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                  </div>
              </div>
          </div>
        </section>
      }

      <Projects />

      {
        <section id="contact" className="section section-alt">
          <div className="container">
              <h2>Get In Touch</h2>
              <div className="contact-content">
                  <p>I'm always interested in hearing about new opportunities and projects. Feel free to reach out!</p>
                  <form id="contact-form" className="contact-form">
                      <div className="form-grid">
                          <div className="form-group">
                              <label htmlFor="name">Name *</label>
                              <input type="text" id="name" name="name" required />
                              
                          </div>

                          <div className="form-group">
                              <label htmlFor="email">Email *</label>
                              <input type="email" id="email" name="email" required />
                              
                          </div>

                          <div className="form-group form-group-full">
                              <label htmlFor="subject">Subject</label>
                              <input type="text" id="subject" name="subject" />
                          </div>

                          <div className="form-group form-group-full">
                              <label htmlFor="message">Message *</label>
                              <textarea id="message" name="message" rows="5" required></textarea>
                              
                          </div>

                          <div className="form-group form-group-full">
                              <button type="submit" className="btn btn-primary">Send Message</button>
                          </div>
                      </div>
                    
                  </form>
              </div>
          </div>
      </section>
      }


      {
        <footer className="footer">
          <div className="container">
              <div className="footer-content">
                  <p>&copy; 2026 Lilia Mora. All rights reserved.</p>
                  <div className="social-links">
                      <a href="#" className="social-link">GitHub</a>
                      <a href="#" className="social-link">LinkedIn</a>
                      <a href="#" className="social-link">Twitter</a>
                      <a href="#" className="social-link">Dribbble</a>
                  </div>
              </div>
          </div>
      </footer>
      }

    </div>
  )
}

export default App
