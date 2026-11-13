
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

import {
  ArrowRight,
  Menu,
  X,
  Trophy,
  Shield,
  Target,
  Zap,
  ChevronDown,
  Phone,
  MapPin
} from 'lucide-react';

import {
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa';

// Components
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Gallery from './components/Gallery';
import CustomCursor from './components/CustomCursor';
import MouseSpotlight from './components/MouseSpotlight';
import TiltCard from './components/TiltCard';
import ParallaxBackground from './components/ParallaxBackground';
import FloatingParticles from './components/FloatingParticles';
import RevealText from './components/RevealText';
import AchievementCounters from './components/AchievementCounters';
import BeltProgression from './components/BeltProgression';
import TrainingSchedule from './components/TrainingSchedule';
import './App.css';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import WhatsAppEnquiry from './components/WhatsAppEnquiry';
import FloatingActions from './components/FloatingActions';
// =====================================
// PROGRAM DATA
// =====================================

const programs = [
  {
    number: '01',
    title: 'KIDS KARATE',
    age: 'AGES 5–12',
    description:
      'Build confidence, discipline, focus and physical fitness through structured karate training.',
    icon: Shield
  },
  {
    number: '02',
    title: 'ADULT KARATE',
    age: 'AGES 13+',
    description:
      'Develop strength, flexibility, technique and mental toughness with expert guidance.',
    icon: Target
  },
  {
    number: '03',
    title: 'SELF DEFENCE',
    age: 'ALL LEVELS',
    description:
      'Learn practical self-defence techniques and develop awareness and confidence.',
    icon: Zap
  }
];

// =====================================
// STATISTICS
// =====================================

const stats = [
  { number: '10+', label: 'YEARS OF EXPERIENCE' },
  { number: '500+', label: 'STUDENTS TRAINED' },
  { number: '50+', label: 'CHAMPIONSHIPS' },
  { number: '100%', label: 'COMMITMENT' }
];

// =====================================
// ANIMATION SETTINGS
// =====================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

// =====================================
// NAVIGATION
// =====================================

const navigation = [
  'Home',
  'About',
  'Programs',
  'Achievements',
  'Gallery',
  'Contact'
];

// =====================================
// MAIN APP
// =====================================

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Loading screen state
  const [isLoading, setIsLoading] = useState(true);

  const closeMenu = () => setMenuOpen(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {/* =================================
          LOADING SCREEN
      ================================= */}

      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      <div
        className={`website ${
          isLoading ? 'site-loading' : 'site-loaded'
        }`}
      >

        {/* =================================
            INTERACTIVE EFFECTS
        ================================= */}

        <CustomCursor />
        <MouseSpotlight />
        <ScrollProgress />
        <FloatingParticles />
        <AchievementCounters />
<BeltProgression />
<TrainingSchedule />
<Instructors />
<Testimonials />
<WhatsAppEnquiry />
<FloatingActions />
        {/* =================================
            NAVIGATION
        ================================= */}

        <header className="navbar">

          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
          >
            <div className="brand-symbol">
              <span>A</span>
            </div>

            <div className="brand-name">
              <strong>ACHIEVERS</strong>
              <small>KARATE ACADEMY</small>
            </div>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav
            className={
              menuOpen ? 'nav-links active' : 'nav-links'
            }
          >
            {navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">
            JOIN THE ACADEMY
            <ArrowRight size={16} />
          </a>

        </header>

        <main>

          {/* =================================
              HERO SECTION
          ================================= */}

          <section className="hero" id="home">

            <ParallaxBackground className="hero-image" />
            <div className="hero-overlay"></div>
            <div className="hero-grid"></div>

            <div className="hero-content">

              <motion.div
                className="hero-tag"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="red-dot"></span>
                DISCIPLINE. STRENGTH. HONOUR.
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                TRAIN HARD.
                <br />
                <span>FIGHT STRONG.</span>
                <br />
                LIVE WITH HONOUR.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                More than martial arts. A journey of discipline,
                confidence and self-discovery. Build your strength
                with Achievers Karate Academy.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a href="#programs" className="btn-primary">
                  EXPLORE PROGRAMS
                  <ArrowRight size={18} />
                </a>

                <a href="#about" className="btn-outline">
                  DISCOVER OUR STORY
                </a>
              </motion.div>

              <motion.div
                className="hero-bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span>01 / 04</span>

                <div className="hero-progress">
                  <div></div>
                </div>

                <span>THE JOURNEY STARTS HERE</span>
              </motion.div>

            </div>

            <div className="hero-side-text">
              MARTIAL ARTS · SELF DEFENCE · FITNESS
            </div>

            <a href="#about" className="scroll-indicator">
              <span>SCROLL TO EXPLORE</span>
              <ChevronDown size={18} />
            </a>

          </section>

          {/* =================================
              INTRO STRIP
          ================================= */}

          <section className="intro-strip">

            <div>
              <span className="intro-line"></span>
              <p>THE WAY OF THE WARRIOR</p>
            </div>

            <h2>
              STRONG BODY.
              <span> STRONGER MIND.</span>
            </h2>

            <Trophy className="intro-icon" size={35} />

          </section>

          {/* =================================
              ABOUT SECTION
          ================================= */}

          <section
            className="about section-padding"
            id="about"
          >

            <div className="about-image-wrap">

              <div className="about-image"></div>

              <div className="experience-card">
                <strong>10+</strong>
                <span>
                  YEARS OF
                  <br />
                  EXPERIENCE
                </span>
              </div>

              <div className="image-caption">
                DISCIPLINE IS THE FOUNDATION OF SUCCESS.
              </div>

            </div>

            <motion.div
              className="about-content"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <span className="section-label">
                01 — ABOUT THE ACADEMY
              </span>

              <h2>
                BUILDING
                <br />
                <span>CHAMPIONS</span>
                <br />
                BEYOND THE MAT.
              </h2>

              <p>
                At Achievers Karate Academy, we believe that karate
                is not just about fighting. It is about building
                character, developing discipline and creating
                confident individuals.
              </p>

              <p>
                Whether you are a beginner or an aspiring
                competitor, our training environment helps you
                discover your true potential.
              </p>

              <div className="about-features">

                <div>
                  <Shield size={21} />
                  <span>DISCIPLINE</span>
                </div>

                <div>
                  <Target size={21} />
                  <span>FOCUS</span>
                </div>

                <div>
                  <Zap size={21} />
                  <span>STRENGTH</span>
                </div>

              </div>

              <a href="#programs" className="text-link">
                DISCOVER OUR TRAINING
                <ArrowRight size={17} />
              </a>

            </motion.div>

          </section>

          {/* =================================
              STATISTICS
          ================================= */}

          <section
            className="stats-section"
            id="achievements"
          >

            <div className="stats-heading">

              <span className="section-label">
                02 — OUR JOURNEY
              </span>

              <h2>
                THE NUMBERS
                <span> SPEAK.</span>
              </h2>

            </div>

            <div className="stats-grid">

              {stats.map((stat, index) => (
                <motion.div
                  className="stat-card"
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12
                  }}
                >
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </motion.div>
              ))}

            </div>

          </section>

          {/* =================================
              TRAINING PROGRAMS
          ================================= */}

          <section
            className="programs section-padding"
            id="programs"
          >

            <div className="section-heading">

              <div>
                <span className="section-label">
                  03 — TRAINING PROGRAMS
                </span>

                <h2>
                  FIND YOUR
                  <span> STRENGTH.</span>
                </h2>
              </div>

              <p>
                Every journey starts with one step.
                Choose your path and begin your transformation.
              </p>

            </div>

            <div className="program-grid">

              {programs.map((program) => {
                const Icon = program.icon;

                return (
                  <TiltCard
                    className="program-card"
                    key={program.number}
                  >

                    <div className="program-top">
                      <span>{program.number}</span>
                      <Icon size={34} />
                    </div>

                    <span className="program-age">
                      {program.age}
                    </span>

                    <h3>{program.title}</h3>

                    <p>{program.description}</p>

                    <a href="#contact">
                      LEARN MORE
                      <ArrowRight size={17} />
                    </a>

                  </TiltCard>
                );
              })}

            </div>

          </section>

          {/* =================================
              CALL TO ACTION
          ================================= */}

          <section className="cta-section">

            <div className="cta-bg"></div>

            <div className="cta-content">

              <span className="section-label">
                YOUR JOURNEY STARTS TODAY
              </span>

             <RevealText>
  <h2>
    DON'T WAIT.
    <br />
    <span>UNLEASH YOUR POTENTIAL.</span>
  </h2>
</RevealText>

              <p>
                Take the first step towards becoming stronger,
                more confident and more disciplined.
              </p>

              <a href="#contact" className="btn-primary">
                START TRAINING NOW
                <ArrowRight size={18} />
              </a>

            </div>

          </section>

          {/* =================================
              GALLERY
          ================================= */}

          <Gallery />

          {/* =================================
              CONTACT
          ================================= */}

          <section
            className="contact-section section-padding"
            id="contact"
          >

            <div>

              <span className="section-label">
                06 — GET IN TOUCH
              </span>

              <h2>
                READY TO
                <span> BEGIN?</span>
              </h2>

              <p>
                Contact Achievers Karate Academy to enquire about
                training programs and available batches.
              </p>

            </div>

            <div className="contact-details">

              <a href="tel:+910000000000">
                <Phone size={21} />
                <span>CONTACT THE ACADEMY</span>
                <ArrowRight size={17} />
              </a>

              <div>
                <MapPin size={21} />
                <span>ACADEMY LOCATION</span>
              </div>

            </div>

          </section>

        </main>

        {/* =================================
            FOOTER
        ================================= */}

        <footer className="footer">

          <a href="#home" className="brand">

            <div className="brand-symbol">
              <span>A</span>
            </div>

            <div className="brand-name">
              <strong>ACHIEVERS</strong>
              <small>KARATE ACADEMY</small>
            </div>

          </a>

          <p>
            DISCIPLINE BUILDS CHAMPIONS.
          </p>

          <div className="social-links">

            <a href="#contact" aria-label="Instagram">
              <FaInstagram size={19} />
            </a>

            <a href="#contact" aria-label="Facebook">
              <FaFacebookF size={19} />
            </a>

          </div>

          <span className="copyright">
            © {new Date().getFullYear()} ACHIEVERS KARATE ACADEMY.
            ALL RIGHTS RESERVED.
          </span>

        </footer>

      </div>
    </>
  );
}

export default App;
