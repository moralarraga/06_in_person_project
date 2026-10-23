// Week 8 starter: React State & Interactive Components
// TODO: Break down your week 7 monolithic component into separate components
// Each component should manage its own state as appropriate

import './App.css'
import Navbar from './components/Navbar';

function App() {
  const handleFilterClick = (e) => {
    console.log('filter:', e.currentTarget.dataset.filter);
  };

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


      {
        <section id="projects" className="section">
          <div className="container">
              <h2>Featured Projects</h2>
              <div className="filter-buttons">
                  <button onClick={handleFilterClick} className="filter-btn active" data-filter="all">All Projects</button>
                  <button onClick={handleFilterClick} className="filter-btn" data-filter="frontend">Frontend</button>
                  <button onClick={handleFilterClick} className="filter-btn" data-filter="fullstack">Full-Stack</button>
                  <button onClick={handleFilterClick} className="filter-btn" data-filter="design">Design</button>
                  <button onClick={handleFilterClick} className="filter-btn" data-filter="webapp">Web App</button>
              </div>

              <div className="projects-grid">
                  <div className="project-card featured" data-category="fullstack">
                      <div className="project-image">
                          <img src="https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App" alt="E-Commerce Platform" />
                          <div className="project-overlay">
                              <div className="project-links">
                                  <a href="#" className="project-link">
                                      <span>🔗</span> Live Demo
                                  </a>
                                  <a href="#" className="project-link">
                                      <span>💻</span> Code
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="project-content">
                          <div className="project-header">
                              <h3 className="project-title">E-Commerce Platform</h3>
                              <span className="project-category">Full-Stack</span>
                          </div>
                          <p className="project-description">A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.</p>
                          <div className="project-tags">
                              <span className="project-tag">React</span>
                              <span className="project-tag">Node.js</span>
                              <span className="project-tag">MongoDB</span>
                              <span className="project-tag">Stripe</span>
                          </div>
                      </div>
                  </div>

                  <div className="project-card" data-category="frontend">
                      <div className="project-image">
                          <img src="https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App" alt="Weather Dashboard" />
                          <div className="project-overlay">
                              <div className="project-links">
                                  <a href="#" className="project-link">
                                      <span>🔗</span> Live Demo
                                  </a>
                                  <a href="#" className="project-link">
                                      <span>💻</span> Code
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="project-content">
                          <div className="project-header">
                              <h3 className="project-title">Weather Dashboard</h3>
                              <span className="project-category">Frontend</span>
                          </div>
                          <p className="project-description">Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.</p>
                          <div className="project-tags">
                              <span className="project-tag">JavaScript</span>
                              <span className="project-tag">CSS3</span>
                              <span className="project-tag">API</span>
                          </div>
                      </div>
                  </div>

                  <div className="project-card" data-category="webapp">
                      <div className="project-image">
                          <img src="https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager" alt="Task Management App" />
                          <div className="project-overlay">
                              <div className="project-links">
                                  <a href="#" className="project-link">
                                      <span>🔗</span> Live Demo
                                  </a>
                                  <a href="#" className="project-link">
                                      <span>💻</span> Code
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="project-content">
                          <div className="project-header">
                              <h3 className="project-title">Task Management App</h3>
                              <span className="project-category">Web App</span>
                          </div>
                          <p className="project-description">Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.</p>
                          <div className="project-tags">
                              <span className="project-tag">React</span>
                              <span className="project-tag">TypeScript</span>
                              <span className="project-tag">Firebase</span>
                          </div>
                      </div>
                  </div>

                  <div className="project-card" data-category="design">
                      <div className="project-image">
                          <img src="https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site" alt="Portfolio Website" />
                          <div className="project-overlay">
                              <div className="project-links">
                                  <a href="#" className="project-link">
                                      <span>🔗</span> Live Demo
                                  </a>
                                  <a href="#" className="project-link">
                                      <span>💻</span> Code
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="project-content">
                          <div className="project-header">
                              <h3 className="project-title">Creative Portfolio</h3>
                              <span className="project-category">Design</span>
                          </div>
                          <p className="project-description">Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.</p>
                          <div className="project-tags">
                              <span className="project-tag">HTML5</span>
                              <span className="project-tag">CSS3</span>
                              <span className="project-tag">GSAP</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      }


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
