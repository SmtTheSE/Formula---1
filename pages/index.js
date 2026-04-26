import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>F1 Historical Analysis | The Ultimate Formula 1 Data Experience</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/F1-logo.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      {/* Top Info Bar */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <span className="live-pip"></span>
          <span>F1 2026 SEASON UNDERWAY</span>
          <span className="tb-sep">|</span>
          <span>77 SEASONS · 1,152 GRANDS PRIX · 818 DRIVERS</span>
          <span className="tb-sep">|</span>
          <span>DATA SOURCE: KAGGLE F1 DATASET</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/F1-logo.png" alt="F1 Logo" className="f1-logo-img-small" />
            <span>F1 ANALYTICS</span>
          </div>
          <ul className="nav-links">
            <li><Link href="#hero">Home</Link></li>
            <li><Link href="#stats">Stats</Link></li>
            <li><Link href="#goat">GOAT</Link></li>
            <li><Link href="#eras">Eras</Link></li>
            <li><Link href="#recommendations">Recommendations</Link></li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section with Real F1 Image Slider */}
      <section id="hero" className="hero">
        <div className="hero-slider" id="heroSlider">
          {/* Slide 1: 2024 British GP - Hamilton */}
          <div className="slide active">
            <div className="slide-img" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/4/4e/2024_British_Grand_Prix%2C_Hamilton_%284%29.jpg')" }}></div>
            <div className="slide-overlay"></div>
            <div className="slide-meta">
              <span className="slide-loc"><i className="fas fa-map-marker-alt"></i> Silverstone, England</span>
              <span className="slide-event-name">2024 BRITISH GRAND PRIX</span>
            </div>
          </div>
          {/* Slide 2: 2024 British GP - Verstappen */}
          <div className="slide">
            <div className="slide-img" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/ad/2024_British_Grand_Prix%2C_Verstappen_%281%29.jpg')" }}></div>
            <div className="slide-overlay"></div>
            <div className="slide-meta">
              <span className="slide-loc"><i className="fas fa-map-marker-alt"></i> Silverstone, England</span>
              <span className="slide-event-name">2024 BRITISH GRAND PRIX</span>
            </div>
          </div>
          {/* Slide 3: 2024 British GP - Norris */}
          <div className="slide">
            <div className="slide-img" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/4/46/2024_British_Grand_Prix%2C_Norris_%281%29.jpg')" }}></div>
            <div className="slide-overlay"></div>
            <div className="slide-meta">
              <span className="slide-loc"><i className="fas fa-map-marker-alt"></i> Silverstone, England</span>
              <span className="slide-event-name">2024 BRITISH GRAND PRIX</span>
            </div>
          </div>
          {/* Slide 4: 2024 British GP - Russell */}
          <div className="slide">
            <div className="slide-img" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/6/6d/2024_British_Grand_Prix%2C_Russell_%281%29.jpg')" }}></div>
            <div className="slide-overlay"></div>
            <div className="slide-meta">
              <span className="slide-loc"><i className="fas fa-map-marker-alt"></i> Silverstone, England</span>
              <span className="slide-event-name">2024 BRITISH GRAND PRIX</span>
            </div>
          </div>
          {/* Slide 5: 2024 British GP - Piastri */}
          <div className="slide">
            <div className="slide-img" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/f/f8/2024_British_Grand_Prix%2C_Piastri_%283%29.jpg')" }}></div>
            <div className="slide-overlay"></div>
            <div className="slide-meta">
              <span className="slide-loc"><i className="fas fa-map-marker-alt"></i> Silverstone, England</span>
              <span className="slide-event-name">2024 BRITISH GRAND PRIX</span>
            </div>
          </div>
          {/* Slide 6: 2025 Australian GP - Hamilton Ferrari */}
          <div className="slide">
            <div className="slide-img" style={{ backgroundImage: "url('https://www.racefans.net/wp-content/uploads/2025/03/racefansdotnet-24-03-15-11-21-59-4-M489455.jpg')" }}></div>
            <div className="slide-overlay"></div>
            <div className="slide-meta">
              <span className="slide-loc"><i className="fas fa-map-marker-alt"></i> Melbourne, Australia</span>
              <span className="slide-event-name">2025 AUSTRALIAN GRAND PRIX</span>
            </div>
          </div>
          {/* Slide 2026 FIA Concept Car */}
          <div className="slide">
            <div className="slide-img" style={{ backgroundImage: "url('https://www.racecar-engineering.com/wp-content/uploads/2024/06/2026_car_render_2_9.jpg')" }}></div>
            <div className="slide-overlay"></div>
            <div className="slide-meta">
              <span className="slide-loc"><i className="fas fa-map-marker-alt"></i> FIA Technical Centre</span>
              <span className="slide-event-name">2026 REGULATIONS CONCEPT</span>
            </div>
          </div>

          <button className="slider-arrow prev-arrow" id="prevSlide" aria-label="Previous slide">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="slider-arrow next-arrow" id="nextSlide" aria-label="Next slide">
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="slider-indicators">
            <span className="indicator active" data-slide="0"></span>
            <span className="indicator" data-slide="1"></span>
            <span className="indicator" data-slide="2"></span>
            <span className="indicator" data-slide="3"></span>
            <span className="indicator" data-slide="4"></span>
            <span className="indicator" data-slide="5"></span>
            <span className="indicator" data-slide="6"></span>
          </div>

          <div className="slide-counter">
            <span id="currentSlideNum">01</span><span className="counter-sep"> / </span><span>07</span>
          </div>

          <div className="slider-progress-wrap">
            <div className="slider-progress-bar" id="sliderProgress"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1,152</span>
              <span className="stat-label">Grand Prix</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">818</span>
              <span className="stat-label">Drivers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">205</span>
              <span className="stat-label">Constructors</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section id="stats" className="stats-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">BY THE NUMBERS</span>
            <h2 className="section-title">F1 in Numbers</h2>
            <p className="section-desc">Key statistics from 77 seasons of Formula 1 racing</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="stat-value">105</div>
              <div className="stat-name">Most Wins</div>
              <div className="stat-detail">Lewis Hamilton</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-flag-checkered"></i>
              </div>
              <div className="stat-value">243</div>
              <div className="stat-name">Constructor Wins</div>
              <div className="stat-detail">Scuderia Ferrari</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-value">818</div>
              <div className="stat-name">Unique Drivers</div>
              <div className="stat-detail">Since 1950</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="stat-value">77</div>
              <div className="stat-name">Seasons</div>
              <div className="stat-detail">1950 - 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* GOAT Section */}
      <section id="goat" className="goat-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">GREATEST OF ALL TIME</span>
            <h2 className="section-title">The GOAT Debate</h2>
            <p className="section-desc">Based on composite scoring across wins, win rate, podiums, and career longevity</p>
          </div>
          <div className="goat-podium">
            <div className="podium-item second">
              <div className="podium-rank">2</div>
              <div className="podium-driver">
                <div className="driver-avatar">
                  <img src="https://images.cults3d.com/7_ThIXhzPctiXpcGP-5b5i3QTvE=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/33034631/illustration-file/47127861-9f90-4d65-9aec-e88ff9400691/Schumacher-1.4.png" className="driver-img" alt="Michael Schumacher" />
                </div>
                <div className="driver-info">
                  <h3>Michael Schumacher</h3>
                  <div className="driver-stats">
                    <span className="wins">91 Wins</span>
                    <span className="rate">30.3% Win Rate</span>
                  </div>
                  <div className="goat-score">88.3</div>
                </div>
              </div>
            </div>
            <div className="podium-item first">
              <div className="podium-rank">1</div>
              <div className="podium-driver">
                <div className="driver-avatar champion">
                  <img src="https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/ferrari/lewham01/2026ferrarilewham01right.webp" className="driver-img" alt="Lewis Hamilton" />
                </div>
                <div className="driver-info">
                  <h3>Lewis Hamilton</h3>
                  <div className="driver-stats">
                    <span className="wins">105 Wins</span>
                    <span className="rate">26.9% Win Rate</span>
                  </div>
                  <div className="goat-score">92.5</div>
                </div>
              </div>
            </div>
            <div className="podium-item third">
              <div className="podium-rank">3</div>
              <div className="podium-driver">
                <div className="driver-avatar">
                  <img src="https://www.f1-fansite.com/wp-content/uploads/2026/03/Max-Verstappen-2026-png.webp" className="driver-img" alt="Max Verstappen" />
                </div>
                <div className="driver-info">
                  <h3>Max Verstappen</h3>
                  <div className="driver-stats">
                    <span className="wins">71 Wins</span>
                    <span className="rate">18.7% Win Rate</span>
                  </div>
                  <div className="goat-score">76.2</div>
                </div>
              </div>
            </div>
          </div>
          <div className="goat-list">
            <h3>Top 10 GOAT Contenders</h3>
            <div className="goat-table">
              <div className="goat-row header">
                <span>Rank</span>
                <span>Driver</span>
                <span>Wins</span>
                <span>GOAT Score</span>
              </div>
              <div className="goat-row">
                <span className="rank">4</span>
                <span className="name">Sebastian Vettel</span>
                <span className="wins">53</span>
                <span className="score">71.8</span>
              </div>
              <div className="goat-row">
                <span className="rank">5</span>
                <span className="name">Alain Prost</span>
                <span className="wins">51</span>
                <span className="score">68.4</span>
              </div>
              <div className="goat-row">
                <span className="rank">6</span>
                <span className="name">Ayrton Senna</span>
                <span className="wins">41</span>
                <span className="score">65.9</span>
              </div>
              <div className="goat-row">
                <span className="rank">7</span>
                <span className="name">Fernando Alonso</span>
                <span className="wins">32</span>
                <span className="score">62.1</span>
              </div>
              <div className="goat-row">
                <span className="rank">8</span>
                <span className="name">Nigel Mansell</span>
                <span className="wins">31</span>
                <span className="score">58.7</span>
              </div>
              <div className="goat-row">
                <span className="rank">9</span>
                <span className="name">Jackie Stewart</span>
                <span className="wins">27</span>
                <span className="score">55.3</span>
              </div>
              <div className="goat-row">
                <span className="rank">10</span>
                <span className="name">Niki Lauda</span>
                <span className="wins">25</span>
                <span className="score">52.8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eras Section */}
      <section id="eras" className="eras-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">EVOLUTION OF F1</span>
            <h2 className="section-title">Racing Through the Eras</h2>
            <p className="section-desc">How Formula 1 has evolved from 1950 to today</p>
          </div>
          <div className="eras-timeline">
            <div className="era-card">
              <div className="era-year">1950-1959</div>
              <div className="era-content">
                <h3>Pioneer Era</h3>
                <div className="era-icon"><i className="fas fa-history"></i></div>
                <p>The birth of F1 with front-engine cars and minimal safety</p>
                <div className="era-legend">
                  <span className="legend-name">Legend: Juan Manuel Fangio</span>
                  <span className="legend-achieve">5 Championships</span>
                </div>
              </div>
            </div>
            <div className="era-card">
              <div className="era-year">1960-1969</div>
              <div className="era-content">
                <h3>Golden Era</h3>
                <div className="era-icon"><i className="fas fa-medal"></i></div>
                <p>Rear-engine revolution and British dominance begins</p>
                <div className="era-legend">
                  <span className="legend-name">Legend: Jim Clark</span>
                  <span className="legend-achieve">2 Championships</span>
                </div>
              </div>
            </div>
            <div className="era-card">
              <div className="era-year">1970-1989</div>
              <div className="era-content">
                <h3>Turbo Era</h3>
                <div className="era-icon"><i className="fas fa-bolt"></i></div>
                <p>Ground effect, turbo power, and incredible rivalries</p>
                <div className="era-legend">
                  <span className="legend-name">Legend: Ayrton Senna</span>
                  <span className="legend-achieve">3 Championships</span>
                </div>
              </div>
            </div>
            <div className="era-card">
              <div className="era-year">1990-1999</div>
              <div className="era-content">
                <h3>V10 Era</h3>
                <div className="era-icon"><i className="fas fa-tachometer-alt"></i></div>
                <p>Electronic aids era and Schumacher's rise</p>
                <div className="era-legend">
                  <span className="legend-name">Legend: Michael Schumacher</span>
                  <span className="legend-achieve">First 2 Titles</span>
                </div>
              </div>
            </div>
            <div className="era-card">
              <div className="era-year">2000-2009</div>
              <div className="era-content">
                <h3>V10/V8 Era</h3>
                <div className="era-icon"><i className="fas fa-fire"></i></div>
                <p>Ferrari dominance and the Schumacher era peaks</p>
                <div className="era-legend">
                  <span className="legend-name">Legend: Michael Schumacher</span>
                  <span className="legend-achieve">5 Consecutive</span>
                </div>
              </div>
            </div>
            <div className="era-card">
              <div className="era-year">2010-2013</div>
              <div className="era-content">
                <h3>V8 Era</h3>
                <div className="era-icon"><i className="fas fa-rocket"></i></div>
                <p>Red Bull and Vettel's young dominance</p>
                <div className="era-legend">
                  <span className="legend-name">Legend: Sebastian Vettel</span>
                  <span className="legend-achieve">4 Championships</span>
                </div>
              </div>
            </div>
            <div className="era-card">
              <div className="era-year">2014-2021</div>
              <div className="era-content">
                <h3>Hybrid Era</h3>
                <div className="era-icon"><i className="fas fa-battery-full"></i></div>
                <p>Mercedes dominance and Hamilton's records</p>
                <div className="era-legend">
                  <span className="legend-name">Legend: Lewis Hamilton</span>
                  <span className="legend-achieve">6 Championships</span>
                </div>
              </div>
            </div>
            <div className="era-card">
              <div className="era-year">2022-2025</div>
              <div className="era-content">
                <h3>Ground Effect Era</h3>
                <div className="era-icon"><i className="fas fa-wind"></i></div>
                <p>New regulations, closer racing, Verstappen dominance</p>
                <div className="era-legend">
                  <span className="legend-name">Legend: Max Verstappen</span>
                  <span className="legend-achieve">Back-to-Back</span>
                </div>
              </div>
            </div>
            <div className="era-card active">
              <div className="era-year">2026+</div>
              <div className="era-content">
                <h3>Active Aero Era</h3>
                <div className="era-icon"><i className="fas fa-plane"></i></div>
                <p>Revolutionary active aerodynamics, 50/50 power split, sustainable fuels</p>
                <div className="era-legend">
                  <span className="legend-name">New Power Units</span>
                  <span className="legend-achieve">Active Front & Rear Wings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Recommendations Section */}
      <section id="recommendations" className="recommendations-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FOR THE FANS</span>
            <h2 className="section-title">Must-Watch Historical Races</h2>
            <p className="section-desc">Top 5 races every F1 fan should experience</p>
          </div>
          <div className="recommendations-grid">
            <div className="race-card featured">
              <div className="race-number">01</div>
              <div className="race-content">
                <span className="race-year">1971</span>
                <h3>Italian Grand Prix</h3>
                <p className="race-desc">Closest finish in F1 history - Peter Gethin won by 0.01s in a legendary slipstreaming battle at Monza.</p>
                <div className="race-highlight">
                  <i className="fas fa-info-circle"></i>
                  <span>5 cars crossed within 0.6 seconds</span>
                </div>
                <a className="yt-watch-btn" href="https://www.youtube.com/results?search_query=1971+Italian+Grand+Prix+Monza+Peter+Gethin" target="_blank" rel="noopener">
                  <i className="fab fa-youtube"></i>
                  Watch on YouTube
                </a>
              </div>
            </div>
            <div className="race-card">
              <div className="race-number">02</div>
              <div className="race-content">
                <span className="race-year">1984</span>
                <h3>Monaco Grand Prix</h3>
                <p className="race-desc">Senna's first win - dominated in torrential rain, announcing the arrival of a future legend.</p>
                <div className="race-highlight">
                  <i className="fas fa-star"></i>
                  <span>Senna's breakthrough victory</span>
                </div>
                <a className="yt-watch-btn" href="https://www.youtube.com/results?search_query=1984+Monaco+Grand+Prix+Senna+rain" target="_blank" rel="noopener">
                  <i className="fab fa-youtube"></i>
                  Watch on YouTube
                </a>
              </div>
            </div>
            <div className="race-card">
              <div className="race-number">03</div>
              <div className="race-content">
                <span className="race-year">2008</span>
                <h3>Brazilian Grand Prix</h3>
                <p className="race-desc">Hamilton's first championship on the final corner of the final lap - the most dramatic conclusion ever.</p>
                <div className="race-highlight">
                  <i className="fas fa-trophy"></i>
                  <span>Championship decided in last corner</span>
                </div>
                <a className="yt-watch-btn" href="https://www.youtube.com/results?search_query=2008+Brazilian+Grand+Prix+Hamilton+championship+last+corner" target="_blank" rel="noopener">
                  <i className="fab fa-youtube"></i>
                  Watch on YouTube
                </a>
              </div>
            </div>
            <div className="race-card">
              <div className="race-number">04</div>
              <div className="race-content">
                <span className="race-year">2012</span>
                <h3>Brazilian Grand Prix</h3>
                <p className="race-desc">Vettel's incredible comeback from last to 6th to win the championship in wet conditions.</p>
                <div className="race-highlight">
                  <i className="fas fa-fire"></i>
                  <span>Survived first-lap collision</span>
                </div>
                <a className="yt-watch-btn" href="https://www.youtube.com/results?search_query=2012+Brazilian+Grand+Prix+Vettel+championship+comeback" target="_blank" rel="noopener">
                  <i className="fab fa-youtube"></i>
                  Watch on YouTube
                </a>
              </div>
            </div>
            <div className="race-card">
              <div className="race-number">05</div>
              <div className="race-content">
                <span className="race-year">2021</span>
                <h3>Abu Dhabi Grand Prix</h3>
                <p className="race-desc">The ultimate showdown - Verstappen vs Hamilton with the championship decided on the final lap.</p>
                <div className="race-highlight">
                  <i className="fas fa-crown"></i>
                  <span>Greatest rivalry climax</span>
                </div>
                <a className="yt-watch-btn" href="https://www.youtube.com/results?search_query=2021+Abu+Dhabi+Grand+Prix+Verstappen+Hamilton+final+lap" target="_blank" rel="noopener">
                  <i className="fab fa-youtube"></i>
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Best Seasons to Watch */}
          <div className="seasons-section">
            <h3 className="subsection-title">Best Seasons to Watch</h3>
            <div className="seasons-grid">
              <div className="season-card">
                <div className="season-year">1976</div>
                <div className="season-content">
                  <h4>Hunt vs Lauda</h4>
                  <p>The Rush season - immortalized in film</p>
                  <a className="yt-season-link" href="https://www.youtube.com/results?search_query=1976+F1+season+Hunt+Lauda+championship" target="_blank" rel="noopener">Watch <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
              <div className="season-card">
                <div className="season-year">1988</div>
                <div className="season-content">
                  <h4>Senna vs Prost</h4>
                  <p>McLaren won 16 of 16 races</p>
                  <a className="yt-season-link" href="https://www.youtube.com/results?search_query=1988+F1+season+Senna+Prost+McLaren+MP4%2F4" target="_blank" rel="noopener">Watch <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
              <div className="season-card">
                <div className="season-year">2007</div>
                <div className="season-content">
                  <h4>Rookie Hamilton</h4>
                  <p>Hamilton vs Alonso vs Räikkönen</p>
                  <a className="yt-season-link" href="https://www.youtube.com/results?search_query=2007+F1+season+Hamilton+Alonso+Raikkonen" target="_blank" rel="noopener">Watch <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
              <div className="season-card">
                <div className="season-year">2010</div>
                <div className="season-content">
                  <h4>4-Way Battle</h4>
                  <p>Championship to final race</p>
                  <a className="yt-season-link" href="https://www.youtube.com/results?search_query=2010+F1+season+finale+Abu+Dhabi+four+way+title" target="_blank" rel="noopener">Watch <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
              <div className="season-card">
                <div className="season-year">2021</div>
                <div className="season-content">
                  <h4>Greatest Rivalry</h4>
                  <p>Verstappen vs Hamilton</p>
                  <a className="yt-season-link" href="https://www.youtube.com/results?search_query=2021+F1+season+Verstappen+Hamilton+title+fight" target="_blank" rel="noopener">Watch <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Races to Watch */}
          <div className="seasons-section">
            <h3 className="subsection-title">Latest Races to Watch</h3>
            <div className="seasons-grid">
              <div className="season-card">
                <div className="season-year">2026</div>
                <div className="season-content">
                  <h4>Bahrain GP</h4>
                  <p>First race of the new Active Aero Era</p>
                  <a className="yt-season-link" href="https://www.youtube.com/results?search_query=2026+Bahrain+Grand+Prix+highlights" target="_blank" rel="noopener">Watch <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
              <div className="season-card">
                <div className="season-year">2026</div>
                <div className="season-content">
                  <h4>Australian GP</h4>
                  <p>Verstappen's masterclass in Melbourne</p>
                  <a className="yt-season-link" href="https://www.youtube.com/results?search_query=2026+Australian+Grand+Prix+highlights" target="_blank" rel="noopener">Watch <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
              <div className="season-card">
                <div className="season-year">2025</div>
                <div className="season-content">
                  <h4>Abu Dhabi GP</h4>
                  <p>The epic multi-team title decider</p>
                  <a className="yt-season-link" href="https://www.youtube.com/results?search_query=2025+Abu+Dhabi+Grand+Prix+highlights" target="_blank" rel="noopener">Watch <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
              <div className="season-card">
                <div className="season-year">2025</div>
                <div className="season-content">
                  <h4>Italian GP</h4>
                  <p>Hamilton's first Monza win in red</p>
                  <a className="yt-season-link" href="https://www.youtube.com/results?search_query=2025+Italian+Grand+Prix+highlights" target="_blank" rel="noopener">Watch <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
              <div className="season-card">
                <div className="season-year">2024</div>
                <div className="season-content">
                  <h4>British GP</h4>
                  <p>Hamilton's emotional home win</p>
                  <a className="yt-season-link" href="https://www.youtube.com/results?search_query=2024+British+Grand+Prix+highlights" target="_blank" rel="noopener">Watch <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Rising Stars */}
          <div className="rising-stars">
            <h3 className="subsection-title">Rising Stars to Watch</h3>
            <div className="stars-grid">
              <div className="star-card">
                <div className="star-image">
                  <img src="https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/mclaren/lannor01/2026mclarenlannor01right.webp" className="driver-img" alt="Lando Norris" />
                </div>
                <div className="star-info">
                  <span className="star-name">Lando Norris</span>
                  <span className="star-team">McLaren</span>
                </div>
              </div>
              <div className="star-card">
                <div className="star-image">
                  <img src="https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/mclaren/oscpia01/2026mclarenoscpia01right.webp" className="driver-img" alt="Oscar Piastri" />
                </div>
                <div className="star-info">
                  <span className="star-name">Oscar Piastri</span>
                  <span className="star-team">McLaren</span>
                </div>
              </div>
              <div className="star-card">
                <div className="star-image">
                  <img src="https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/mercedes/georus01/2026mercedesgeorus01right.webp" className="driver-img" alt="George Russell" />
                </div>
                <div className="star-info">
                  <span className="star-name">George Russell</span>
                  <span className="star-team">Mercedes</span>
                </div>
              </div>
              <div className="star-card">
                <div className="star-image">
                  <img src="https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/ferrari/chalec01/2026ferrarichalec01right.webp" className="driver-img" alt="Charles Leclerc" />
                </div>
                <div className="star-info">
                  <span className="star-name">Charles Leclerc</span>
                  <span className="star-team">Ferrari</span>
                </div>
              </div>
              <div className="star-card">
                <div className="star-image">
                  <img src="https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/racingbulls/lialaw01/2026racingbullslialaw01right.webp" className="driver-img" alt="Liam Lawson" />
                </div>
                <div className="star-info">
                  <span className="star-name">Liam Lawson</span>
                  <span className="star-team">Racing Bulls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <img src="/F1-logo.png" alt="F1 Logo" className="f1-logo-img-small" />
                <span>F1 ANALYTICS</span>
              </div>
              <p>Exploring 77 years of Formula 1 excellence through data and insights.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="#stats">Statistics</Link></li>
                <li><Link href="#goat">GOAT Analysis</Link></li>
                <li><Link href="#eras">Eras</Link></li>
                <li><Link href="#recommendations">Recommendations</Link></li>
              </ul>
            </div>
            <div className="footer-data">
              <h4>Data Source</h4>
              <p>F1 Historical Results Dataset</p>
              <p>77 Seasons (1950-2026)</p>
              <p>25,939 Race Entries</p>
            </div>
          </div>
          <div className="footer-author">
            <h4>About the Creator</h4>
            <p>Created by Sitt Min Thar - Principal Data Scientist & Kaggle Expert</p>
            <p>Additional contributions by a Software Engineering Student & F1 Enthusiast. As a passionate follower of Formula 1, aiming to deliver informative and insightful analytics that benefit both the technical community and the F1 fandom.</p>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 F1 Historical Analysis. Data-driven insights for racing fans.</p>
          </div>
        </div>
      </footer>

      <Script src="/scripts/script.js" strategy="lazyOnload" />
    </div>
  );
}