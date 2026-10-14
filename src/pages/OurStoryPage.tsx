import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/shared/SectionHeader';
import { AnimatedReveal } from '../components/shared/AnimatedReveal';
import { ImageReveal } from '../components/shared/ImageReveal';
import { JourneyTimeline } from '../components/home/JourneyTimeline';
import { teamMembers } from '../data/teamData';
import { Heart, Compass, Eye, ArrowRight, UserCheck, Sun, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const OurStoryPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About ANBU Foundation — Inception & Guiding Principles';
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Grand Editorial Story Hero */}
      <section 
        style={{ 
          position: 'relative', 
          backgroundColor: '#1E0E08',
          color: '#FFF8F0',
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(4.5rem, 8vw, 6.5rem)',
          overflow: 'hidden' 
        }}
      >
        {/* Ambient Warm Golden Radial Glows & Subtle Star Grid */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '1200px',
            height: '100%',
            background: 'radial-gradient(circle at 50% 20%, rgba(244, 90, 36, 0.3) 0%, rgba(255, 152, 97, 0.09) 45%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255, 208, 155, 0.08) 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            opacity: 0.5,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Top Pill Badge with Spring Entrance */}
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 208, 155, 0.12)',
              border: '1px solid rgba(255, 208, 155, 0.32)',
              backdropFilter: 'blur(10px)',
              padding: '0.45rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-golden-peach)',
              marginBottom: '1.35rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
            }}
          >
            <Sparkles size={14} color="var(--color-sunset-orange)" />
            <span>Inception & Guiding Principles</span>
          </motion.div>

          {/* Script Eyebrow with Graceful Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
                color: 'var(--color-golden-peach)',
                letterSpacing: '0.04em',
                lineHeight: 1.2,
                display: 'block',
                marginBottom: '0.35rem'
              }}
            >
              The Living Journey of
            </span>
          </motion.div>

          {/* Grand Headline with BNR Staggered Letter Reveal */}
          <div style={{ marginBottom: '1.25rem', overflow: 'hidden' }}>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.045,
                    delayChildren: 0.25
                  }
                }
              }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: 0,
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                display: 'inline-flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.35em'
              }}
            >
              {'ANBU Foundation'.split(' ').map((word, wIdx) => (
                <span key={wIdx} style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
                  {Array.from(word).map((char, cIdx) => (
                    <motion.span
                      key={cIdx}
                      variants={{
                        hidden: { opacity: 0, y: 44, rotateX: 45 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                        }
                      }}
                      style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFE0C2 50%, #FFB68D 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>

            {/* BNR Expanding Accent Underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 68, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: '3px',
                backgroundColor: 'var(--color-sunset-orange)',
                borderRadius: '3px',
                margin: '1rem auto 0 auto',
                boxShadow: '0 0 16px rgba(244, 90, 36, 0.6)'
              }}
            />
          </div>

          {/* Subtitle with Fade-in Mask */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
              color: 'rgba(255, 248, 240, 0.88)',
              maxWidth: '780px',
              margin: '0 auto 2.75rem auto',
              lineHeight: 1.7,
              fontWeight: 400
            }}
          >
            “Anbu” is the ancient Tamil and universal concept of boundless, unconditional love. Inherited from visionary parents, our foundation has grown from a single bud into a sanctuary of human dignity, empowering over 10,000 scholars and transforming lives across our Nation.
          </motion.p>

          {/* 4 Interactive Milestone Ribbon Cards with Staggered 3D Tilt */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              maxWidth: '1000px',
              margin: '0 auto',
              perspective: '1000px'
            }}
          >
            {[
              { year: '2008', title: 'First Bud of Service', desc: 'Inception inherited from parents' },
              { year: '10,000+', title: 'First-Gen Scholars', desc: 'Degrees conferred via Sathyabama' },
              { year: '3 Pillars', title: 'Living Philosophy', desc: 'Ideation • Planning • Execution' },
              { year: '2016', title: 'Fruitful Expansion', desc: 'Enriching human value across India' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, backgroundColor: 'rgba(255, 255, 255, 0.1)', boxShadow: '0 16px 36px rgba(244, 90, 36, 0.22)' }}
                style={{
                  padding: '1.35rem 1.1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '20px',
                  border: '1.5px solid rgba(255, 208, 155, 0.22)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                  textAlign: 'center',
                  transition: 'background-color 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'default'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.95rem',
                    fontWeight: 800,
                    color: 'var(--color-golden-peach)',
                    lineHeight: 1.1,
                    marginBottom: '0.35rem'
                  }}
                >
                  {stat.year}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                  {stat.title}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255, 244, 229, 0.72)', lineHeight: 1.4 }}>
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section: Inception & Heritage */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <SectionHeader
            scriptEyebrow="The Genesis"
            title="The Inception of Service"
            subtitle="How a family devotion to uplift humanity grew into a nationwide movement of empowerment and love."
            showOrnament={true}
          />

          {/* Editorial Banner with Official Inception Narrative */}
          <AnimatedReveal>
            <div
              className="warm-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid rgba(244, 90, 36, 0.25)',
                boxShadow: '0 20px 50px rgba(43, 22, 15, 0.08)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                marginBottom: '3.5rem'
              }}
            >
              <div style={{ height: '100%', minHeight: '400px', position: 'relative' }}>
                <ImageReveal
                  src="/images/anbu_20_years_celebration.png"
                  alt="ANBU Foundation 20 Years Celebration"
                  minHeight="400px"
                  objectPosition="center 12%"
                  direction="up"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(29, 16, 10, 0.88)',
                    color: 'var(--color-golden-peach)',
                    border: '1px solid rgba(255, 208, 155, 0.35)',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  20 Years of அன்பு
                </div>
              </div>

              <div
                style={{
                  padding: 'clamp(2rem, 5vw, 3.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundColor: 'var(--color-sunset-cream)'
                }}
              >
                <span className="badge-tag" style={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>
                  The Inception & Heritage
                </span>

                <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', marginBottom: '1.15rem', color: 'var(--color-sunset-dark)', fontFamily: 'var(--font-serif)', lineHeight: 1.25 }}>
                  A Garden of Happiness with the Fragrance of Success
                </h3>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.8, fontSize: '1.02rem' }}>
                  The inception of this idea to serve all is inherited from parents, 2008 had witnessed the first bud in and now it is a garden of happiness with the fragrance of success. The time to share the fruits to all has been arrived in this year of 2016, so the foundation is determined to extend its branches to all directions of enriching human value, where our service is atmost needed.
                </p>

                <div
                  style={{
                    padding: '1.15rem 1.35rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    borderLeft: '4px solid var(--color-sunset-orange)',
                    boxShadow: '0 4px 16px rgba(43, 22, 15, 0.05)',
                    marginBottom: '0.5rem'
                  }}
                >
                  <p style={{ color: 'var(--color-sunset-dark)', margin: 0, lineHeight: 1.7, fontSize: '0.98rem', fontStyle: 'italic' }}>
                    “School adoption, Village adoption and many such programs are an embodiment of selflessness and has the objectives as longevity, freedom and peace. We welcome you to this home of love — <strong>Anbu</strong>.”
                  </p>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Guiding Sunrise Maxim Callout */}
          <AnimatedReveal delay={0.15}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #2B160F 0%, #3D1C12 50%, #5E2614 100%)',
                color: '#FFF8F0',
                padding: 'clamp(2rem, 4.5vw, 3.25rem)',
                boxShadow: '0 16px 40px rgba(43, 22, 15, 0.22)',
                border: '1.5px solid rgba(255, 208, 155, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                marginBottom: '3.5rem'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 208, 155, 0.15)',
                  border: '1px solid rgba(255, 208, 155, 0.35)',
                  padding: '0.4rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--color-golden-peach)',
                  marginBottom: '1.25rem'
                }}
              >
                <Sun size={15} color="var(--color-golden-peach)" />
                <span>The Guiding Sunrise Maxim</span>
              </div>

              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 2.3vw, 1.7rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  maxWidth: '850px',
                  color: '#FFFFFF',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                “To experience the sunrise we should turn towards rising sun. To experience the impact of service to people in complete sense, we should interact and interlace with their lives.”
              </blockquote>

              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-golden-peach)', letterSpacing: '0.04em' }}>
                — The Philosophical Compass of ANBU Foundation
              </p>
            </div>
          </AnimatedReveal>

          {/* 3 Principles of Our Foundation */}
          <div style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--color-sunset-orange)',
                  fontSize: '1.15rem',
                  display: 'block',
                  marginBottom: '0.25rem'
                }}
              >
                — Core Operating Pillars —
              </span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: 'var(--color-sunset-dark)', fontFamily: 'var(--font-serif)' }}>
                Principles of Our Foundation
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem'
              }}
            >
              {/* Principle 1: Integrity in Ideation */}
              <div
                className="warm-card"
                style={{
                  padding: '2.25rem 1.75rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1.5px solid rgba(244, 90, 36, 0.22)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  boxShadow: '0 10px 30px rgba(43, 22, 15, 0.06)'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(244, 90, 36, 0.1)',
                    color: 'var(--color-sunset-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <Sparkles size={24} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-sunset-dark)', marginBottom: '0.6rem' }}>
                  Integrity in Ideation
                </h4>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  Every initiative originates from pure, selfless intention inherited from ancestral values—conceived to serve humanity with transparency, ethics, and untainted compassion.
                </p>
              </div>

              {/* Principle 2: Introspection in Planning */}
              <div
                className="warm-card"
                style={{
                  padding: '2.25rem 1.75rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1.5px solid rgba(244, 90, 36, 0.22)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  boxShadow: '0 10px 30px rgba(43, 22, 15, 0.06)'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(244, 90, 36, 0.1)',
                    color: 'var(--color-sunset-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <Compass size={24} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-sunset-dark)', marginBottom: '0.6rem' }}>
                  Introspection in Planning
                </h4>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  Reflecting deeply on community realities before initiating projects. Meticulous planning ensures long-term sustenance, freedom, and peaceful longevity for every beneficiary.
                </p>
              </div>

              {/* Principle 3: Involvement in Execution */}
              <div
                className="warm-card"
                style={{
                  padding: '2.25rem 1.75rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1.5px solid rgba(244, 90, 36, 0.22)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  boxShadow: '0 10px 30px rgba(43, 22, 15, 0.06)'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(244, 90, 36, 0.1)',
                    color: 'var(--color-sunset-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <Heart size={24} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-sunset-dark)', marginBottom: '0.6rem' }}>
                  Involvement in Execution
                </h4>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  True impact is experienced when we interlace with the lives of the people. Our leaders and volunteers walk on the ground, sharing joy and lifting lives hand in hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders' Message: "Welcome to the home of Love" - Anbu! */}
      <section 
        id="founders-message"
        className="section-padding" 
        style={{ 
          position: 'relative',
          backgroundColor: '#FFFBF5',
          borderTop: '1px solid rgba(244, 90, 36, 0.15)',
          borderBottom: '1px solid rgba(244, 90, 36, 0.15)',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <SectionHeader
            scriptEyebrow="Founders' Address"
            title="“Welcome to the Home of Love” — Anbu!"
            subtitle="A personal address from our founders on the philosophy of empathy, nation-building, and answering the unanswered."
            showOrnament={true}
          />

          <AnimatedReveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(2rem, 5vw, 4rem)',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                border: '1.5px solid rgba(255, 208, 155, 0.45)',
                boxShadow: '0 20px 50px rgba(43, 22, 15, 0.08)'
              }}
            >
              {/* Left Column: Founders Portrait with Framed Aesthetic */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '380px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '3px solid rgba(255, 208, 155, 0.6)',
                    boxShadow: '0 16px 40px rgba(43, 22, 15, 0.16)'
                  }}
                >
                  <img
                    src="/images/founders_home_of_love.png"
                    alt="Dr. Marie Johnson & Dr. Mariazeena Johnson — Founders of ANBU Foundation"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '1rem',
                      background: 'linear-gradient(to top, rgba(29, 16, 10, 0.88) 0%, transparent 100%)',
                      color: '#FFFFFF',
                      textAlign: 'center'
                    }}
                  >
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                      Founders • ANBU Foundation
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: The Narrative & Signatures */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p style={{ fontSize: '1.04rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
                  Most intrinsic feeling of Life is being Human. Humanity is not an act; it is the way of living. The cause of suffering in people has many reasons but the effect is unique and it is painful. Struggle for Education, Struggle for Survival and Struggle to Empower Self and Nation.
                </p>

                <p style={{ fontSize: '1.04rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
                  Anbu Foundation was started to bring back the happiness to the lives of people who are striving to live the life to the fullest. ANBU is committed to serve the Nation with a phenomenon of <strong>“Answering the Unanswered”</strong> by means of well-established structure.
                </p>

                <p style={{ fontSize: '1.04rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
                  Our agenda of service is imbibed with share love to all. The framework of the foundation is an aforethought to strengthen the lives of fellow citizens and thereby lifting the spirit of living, which is vital to the development of our Nation. We welcome you to this home of love — <strong>Anbu</strong>.
                </p>

                {/* Founder Signatures Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1.25rem',
                    marginTop: '1.25rem',
                    paddingTop: '1.5rem',
                    borderTop: '1.5px solid rgba(244, 90, 36, 0.16)'
                  }}
                >
                  {/* Founder 1: Dr. Marie Johnson */}
                  <div
                    style={{
                      padding: '1.25rem',
                      backgroundColor: 'var(--color-sunset-cream)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 208, 155, 0.5)'
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--color-sunset-dark)',
                        marginBottom: '0.25rem'
                      }}
                    >
                      Dr. Marie Johnson
                    </h4>
                    <p style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-sunset-orange)', marginBottom: '0.2rem' }}>
                      Founder, Anbu Foundation
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                      President, Sathyabama Institute of Science and Technology
                    </p>
                  </div>

                  {/* Founder 2: Dr. Mariazeena Johnson */}
                  <div
                    style={{
                      padding: '1.25rem',
                      backgroundColor: 'var(--color-sunset-cream)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 208, 155, 0.5)'
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--color-sunset-dark)',
                        marginBottom: '0.25rem'
                      }}
                    >
                      Dr. Mariazeena Johnson
                    </h4>
                    <p style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-sunset-orange)', marginBottom: '0.2rem' }}>
                      Founder, Anbu Foundation
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                      Chancellor, Sathyabama Institute of Science and Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Mission, Vision, and Core Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface-warm)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}
          >
            {/* Mission */}
            <div className="warm-card" style={{ padding: '2.5rem 2rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(244, 90, 36, 0.1)',
                  color: 'var(--color-sunset-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <Compass size={26} />
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.85rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
                To empower underserved children, isolated seniors, and vulnerable families by creating accessible, community-powered learning pods, preventative healthcare circles, and sustainable green neighborhoods.
              </p>
            </div>

            {/* Vision */}
            <div className="warm-card" style={{ padding: '2.5rem 2rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255, 152, 97, 0.2)',
                  color: 'var(--color-sunset-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <Eye size={26} />
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.85rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
                A world where every human being experiences the warmth of unconditional support, every child discovers their inner brilliance, and no elder walks alone into the evening of their years.
              </p>
            </div>

            {/* Values */}
            <div className="warm-card" style={{ padding: '2.5rem 2rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255, 208, 155, 0.3)',
                  color: '#8C4724',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <Heart size={26} />
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.85rem' }}>Our Values</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
                Integrity, Radical Compassion, Grassroots Agency, Financial Transparency, and Environmental Reverence. We measure success by the quiet dignity restored to human lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Journey Timeline */}
      <JourneyTimeline />

      {/* Leadership & Advisory Governance (Placeholders with clear regulatory notice) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface-warm)' }}>
        <div className="container">
          {/* Leadership & Founders Showcase */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              marginBottom: '3.5rem'
            }}
          >
            {/* Founders Leadership Portrait */}
            <div
              className="warm-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-surface)',
                border: '1.5px solid rgba(244, 90, 36, 0.25)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '360px', overflow: 'hidden' }}>
                <ImageReveal
                  src="/images/founders_leadership.png"
                  alt="Founders & Executive Trustees of ANBU Foundation"
                  minHeight="360px"
                  objectPosition="top center"
                  direction="up"
                />
              </div>
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className="badge-tag" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
                  Founding Trusteeship
                </span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--color-sunset-dark)' }}>
                  Visionary Leadership & Guidance
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Guided by the values of selfless public service, our founders have steered ANBU Foundation across two decades, establishing university scholarships for over 10,000 students and nurturing grassroots mutual-aid chapters.
                </p>
              </div>
            </div>

            {/* Founder Gratitude */}
            <div
              className="warm-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-surface)',
                border: '1.5px solid rgba(244, 90, 36, 0.25)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '360px', overflow: 'hidden' }}>
                <ImageReveal
                  src="/images/founder_gratitude.png"
                  alt="Managing Trustee Vanakkam & Gratitude"
                  minHeight="360px"
                  objectPosition="top center"
                  direction="up"
                />
              </div>
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className="badge-tag" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem', backgroundColor: 'rgba(255, 208, 155, 0.35)' }}>
                  20 Years of ANBU • Vanakkam
                </span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--color-sunset-dark)' }}>
                  “Thank You All for Your Love”
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  “True compassion asks for nothing in return. As we celebrate 20 years, my heart overflows with gratitude for the thousands of young scholars who dared to dream and the benefactors who stood beside them.”
                </p>
              </div>
            </div>

            {/* Thalapathy Vijay Civic Honor */}
            <div
              className="warm-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-surface)',
                border: '1.5px solid rgba(244, 90, 36, 0.25)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '360px', overflow: 'hidden' }}>
                <ImageReveal
                  src="/images/thalapathy_vijay_award.png"
                  alt="Thalapathy Vijay felicitating ANBU Foundation"
                  minHeight="360px"
                  objectPosition="top center"
                  direction="up"
                />
              </div>
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className="badge-tag" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
                  Civic Excellence Award
                </span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--color-sunset-dark)' }}>
                  Honored by Thalapathy Vijay
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  In recognition of sustained grassroots contribution to education, actor and social leader Thalapathy Vijay presented the leadership team with a prestigious golden memento of honor.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem',
              marginBottom: '3.5rem'
            }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="warm-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'var(--bg-surface)'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-sunset-cream)',
                    border: '2px solid rgba(244, 90, 36, 0.25)',
                    color: 'var(--color-sunset-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <UserCheck size={28} />
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--color-sunset-dark)' }}>
                  {member.name}
                </h3>

                <span style={{ fontSize: '0.85rem', color: 'var(--color-sunset-orange)', fontWeight: 700, marginBottom: '0.85rem' }}>
                  {member.role}
                </span>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Action Link to Programs */}
          <div style={{ textAlign: 'center' }}>
            <Link to="/programs" className="btn btn-primary btn-lg">
              <span>Explore Our Grassroots Programs</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
