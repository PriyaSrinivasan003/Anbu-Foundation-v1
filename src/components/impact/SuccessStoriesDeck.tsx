import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { ChevronLeft, ChevronRight, Award, Quote, Sparkles } from 'lucide-react';

export interface SuccessStoryItem {
  id: string;
  name: string;
  role: string;
  image: string;
  quote?: string;
  story: string;
  achievement: string;
  year: string;
  isFeaturedCenter?: boolean;
}

export const successStoriesData: SuccessStoryItem[] = [
  {
    id: 'story-1',
    name: 'Sabareeswari K.',
    role: 'FIRST-GEN SCHOLAR',
    image: '/images/sucess story1.png',
    achievement: 'Full Scholarship • MAATRAM Foundation Partnership',
    year: 'Higher Education Scholar',
    story: 'I lost my parents suddenly. I was very weak emotionally; I have lost my confidence and question marks everywhere in my life from basic necessities to continuing my education. In that situation, I came to know about this scholarship scheme provided by Anbu foundation through MAATRAM. Now, I am able to study without any trouble. Regained my confidence and faith about my future and career. My humble thanks to ANBU.'
  },
  {
    id: 'story-2',
    name: 'Hemalatha P.',
    role: 'GUARDIAN & ADOPTIVE MOTHER',
    image: '/images/sucess story2.png',
    achievement: 'Family Support • MAATRAM Foundation Partnership',
    year: 'Guardian Voice',
    isFeaturedCenter: true,
    story: 'I have adopted Sabareeswari.K after her parents demise, with faith in god that I will be able to raise her well. Due to my financial instability, I had a tough time and was not in a position to give her good education. After she got the scholarship from this foundation, I was relieved and thanked GOD for showing me a path. I am very happy now and many thanks to ANBU and MAATRAM.'
  },
  {
    id: 'story-3',
    name: 'Dhivya V.',
    role: 'ECE SCHOLAR',
    image: '/images/sucess story3.png',
    achievement: 'Sathyabama University • AGARAM Foundation Support',
    year: 'Electronics & Communication Engineering',
    story: 'I am Dhivya studying in ECE, the course which I dreamt to do. Anbu Foundation has given lot of confidence to my aspiration. I have understood that their intention is not only to help students financially with the scholarship but more importantly to see them winning always. In the University, we are also offered with part-time jobs which we can do without disturbing our studies. Now my communication skills improved a lot and also economic status. My life got completely changed after joining in Sathyabama University. This is because of the wonderful support given by ANBU and AGARAM.'
  },
  {
    id: 'story-4',
    name: 'Saumya Sam George',
    role: 'HEALTHCARE HARDSHIP SCHOLAR',
    image: '/images/sucess story4.png',
    achievement: 'Full Tuition Grant • Sathyabama University',
    year: 'Engineering Scholar',
    story: 'I have joined in Sathyabama University by availing the Anbu Scholarship. When I was looking for continuing my studies after +2, the financial background of my family was not good as we spent lot of money for the treatment of my mother (third grade ductal carcinoma patient). So, I had no hopes for continuing my studies. Then I found a ladder for success in my life through this scholarship and my family got a great relief and happiness. I am very happy and my family too as I am in the safest place. Thanks too Anbu Foundation.'
  },
  {
    id: 'story-5',
    name: 'Manju V.',
    role: 'VILLAGE TRAILBLAZER & ROLE MODEL',
    image: '/images/sucess story5.png',
    achievement: 'First Girl from Village to Attend City University',
    year: 'Sathyabama University Graduate',
    story: 'In my village allowing girls to continue education outside the village is not allowed. But my success and the progress shown by me is now giving hope for all the girls and parents in the village to change their opinion about City education. They got inspired by seeing me. Now the situations are slowly changing, girls from village are coming out for studies. I am happy that I became the role model for my family as well as to my village. This is possible because of the scholarship; I have received in the right time and got seat in right institution, our Sathyabama University.'
  },
  {
    id: 'story-6',
    name: 'Sathish V.M.',
    role: 'TAMIL MEDIUM TO GLOBAL COMMUNICATOR',
    image: '/images/sucess story6.png',
    achievement: 'English Fluency & Tech Leadership Skills',
    year: 'Sathyabama University Scholar',
    story: 'When i was enter into this university I had only good qualification of my schooling with no financial background, I am basically tamil medium. When i was joined to this SATHYABAMA UNIVERSITY, I found my qualities and talents and where we have to use them, now i can easily speak with all guys only through communicate with english, this all things i learnt from my university and my professors. Thanks to Anbu Foundation for giving me the opportunity to study this university.'
  },
  {
    id: 'story-7',
    name: 'Kapil Kumar',
    role: 'COGNIZANT SOFTWARE ENGINEER',
    image: '/images/sucess story7.png',
    achievement: 'Campus Placed at Cognizant • Delhi to Chennai Scholar',
    year: 'B.E. Engineering Graduate',
    story: 'Anbu has supported me from my first day of college till my last . It has turned my life because i have never thought that i will do engineering by seeing my parents financial condition. But today by its support i am standing on my legs after getting placed in cognizant. I am very thankful to the foundation that they have made our life beautiful. i am proud to be a student of Sathyabama University. it has made my career so bright and prosperous. from first day till last we have given opportunity to participate in any events conducted by sathyabama without any charges that made us to learn so many things. eventhough my family is from delhi i didnt feel that i am far from my family because Anbu has given that care and love like our parents give..once again i want to say thanks to Anbu Foundation for changing my life.'
  },
  {
    id: 'story-8',
    name: 'Sneha M.',
    role: 'COGNIZANT & CAPGEMINI DUAL PLACEMENT',
    image: '/images/sucess story8.png',
    achievement: 'Placed in Cognizant & Capgemini • Merit Scholar',
    year: 'Sathyabama University Graduate',
    story: 'I am honored to be one of the recipients of the Scholarship Provided by Sathyabama. Thanks to the generous support of the management. Growing up in a less privileged community has not only offered financial and academic challenges, but has also helped me realize the value of college education. My undergraduate career at Sathyabama university started off with a first-rate start. The periodical placement preparation, the infrastructure and the environment has helped mould me better. I am privileged to have been placed in 2 leading organizations namely, Cognizant and Capgemini. I thank the management and every staff who has helped me achieve my goals.'
  }
];

export const SuccessStoriesDeck: React.FC = () => {
  // Currently displayed 5-card fan window
  const [startIndex, setStartIndex] = useState<number>(0);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  // Take 5 items for the fan based on startIndex
  const visibleStories = Array.from({ length: 5 }, (_, i) => {
    const idx = (startIndex + i) % successStoriesData.length;
    return successStoriesData[idx];
  });

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % successStoriesData.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + successStoriesData.length) % successStoriesData.length);
  };

  // 5 Fan Slot Configurations with generous spacing and subtle arc
  // Indices: 0: far left, 1: mid left, 2: center (hero/highlight), 3: mid right, 4: far right
  const fanSlots = [
    { x: -430, y: 24, rotate: -7,   zIndex: 1 },
    { x: -215, y: 8,  rotate: -3.5, zIndex: 2 },
    { x: 0,    y: -14, rotate: 0,    zIndex: 5 }, // Center card elevated and focal
    { x: 215,  y: 8,  rotate: 3.5,  zIndex: 2 },
    { x: 430,  y: 24, rotate: 7,    zIndex: 1 }
  ];

  const currentCenterIndex = (startIndex + 2) % successStoriesData.length;

  const activeStoryDetail = successStoriesData.find(
    (s) => s.id === (activeCardId || hoveredCardId || visibleStories[2]?.id)
  );

  return (
    <section 
      id="success-stories"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'clamp(4.5rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4.5rem, 8vw, 7rem)',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background golden glow & botanical grain */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 208, 155, 0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header with BNR Parisienne style eyebrow & diamond ornament */}
        <SectionHeader
          scriptEyebrow="Lives Transformed"
          title="Success Stories"
          subtitle="Behind every number is a life forever changed. Explore the personal journeys of scholarship recipients, empowered elders, and community changemakers."
          showOrnament={true}
        />

        {/* Carousel / Cycle Navigation Bar with Clean Indicators */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.85rem',
            marginBottom: '3rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem'
            }}
          >
            <button
              onClick={handlePrev}
              aria-label="Previous stories"
              className="btn-circular"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1.5px solid rgba(244, 90, 36, 0.25)',
                backgroundColor: '#FFFFFF',
                color: 'var(--color-sunset-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(43, 22, 15, 0.08)',
                transition: 'all 0.2s ease'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Interactive Dot Indicators */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '9999px',
                boxShadow: '0 2px 8px rgba(43, 22, 15, 0.05)',
                border: '1px solid rgba(255, 208, 155, 0.4)'
              }}
            >
              {successStoriesData.map((s, idx) => {
                const isSelected = idx === currentCenterIndex;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setStartIndex((idx - 2 + successStoriesData.length) % successStoriesData.length);
                      setActiveCardId(s.id);
                    }}
                    aria-label={`Go to ${s.name}'s story`}
                    style={{
                      height: '8px',
                      width: isSelected ? '26px' : '8px',
                      borderRadius: '9999px',
                      backgroundColor: isSelected
                        ? 'var(--color-sunset-orange)'
                        : 'rgba(244, 90, 36, 0.25)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                );
              })}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next stories"
              className="btn-circular"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1.5px solid rgba(244, 90, 36, 0.25)',
                backgroundColor: '#FFFFFF',
                color: 'var(--color-sunset-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(43, 22, 15, 0.08)',
                transition: 'all 0.2s ease'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <span
            style={{
              fontSize: '0.84rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              letterSpacing: '0.02em'
            }}
          >
            Story {currentCenterIndex + 1} of {successStoriesData.length} in Focus • Click any card or dot to spotlight
          </span>
        </div>

        {/* DESKTOP FANNED CARD DECK (Screens >= 992px) */}
        <div
          className="desktop-fan-container"
          style={{
            position: 'relative',
            height: '490px',
            maxWidth: '1200px',
            margin: '0 auto 2.5rem auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {visibleStories.map((story, slotIndex) => {
            const slot = fanSlots[slotIndex];
            const isHovered = hoveredCardId === story.id;
            const isCenterSlot = slotIndex === 2;
            const isDarkCard = isCenterSlot; // Center card gets the focal dark green / dark sunset treatment

            return (
              <motion.div
                key={`${story.id}-${slotIndex}`}
                initial={{
                  x: 0,
                  y: 50,
                  rotate: 0,
                  opacity: 0,
                  scale: 0.9
                }}
                animate={{
                  x: slot.x,
                  y: isHovered ? slot.y - 18 : slot.y,
                  rotate: isHovered ? 0 : slot.rotate,
                  opacity: 1,
                  scale: isHovered ? 1.04 : 1,
                  zIndex: isHovered ? 12 : slot.zIndex
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                  mass: 0.8
                }}
                onMouseEnter={() => setHoveredCardId(story.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => setActiveCardId(story.id)}
                style={{
                  position: 'absolute',
                  width: '210px',
                  height: '415px',
                  borderRadius: '24px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  userSelect: 'none',
                  backgroundColor: isDarkCard ? '#1D2A1F' : '#FFFFFF',
                  color: isDarkCard ? '#FFF8F0' : 'var(--color-sunset-dark)',
                  border: isDarkCard 
                    ? '1.8px solid #FFD09B' 
                    : '1.5px solid rgba(255, 208, 155, 0.45)',
                  boxShadow: isHovered
                    ? '0 24px 50px -8px rgba(244, 90, 36, 0.28), 0 8px 18px rgba(0,0,0,0.1)'
                    : isDarkCard
                      ? '0 22px 48px -10px rgba(26, 46, 26, 0.48)'
                      : '0 16px 36px -12px rgba(43, 22, 15, 0.16)'
                }}
              >
                {/* Photo Header Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '140px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: isDarkCard ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 208, 155, 0.2)',
                    flexShrink: 0
                  }}
                >
                  <motion.img
                    src={story.image}
                    alt={story.name}
                    animate={{ scale: isHovered ? 1.06 : 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                  />
                  {isDarkCard && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(255, 208, 155, 0.95)',
                        color: '#1D2A1F',
                        borderRadius: '9999px',
                        padding: '3px 8px',
                        fontSize: '0.62rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                      }}
                    >
                      <Sparkles size={10} />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Role Label */}
                <p
                  title={story.role}
                  style={{
                    marginTop: '0.8rem',
                    marginBottom: '0.2rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: 1.25,
                    color: isDarkCard ? '#FFD09B' : 'var(--color-sunset-orange)'
                  }}
                >
                  {story.role}
                </p>

                {/* Person's Name */}
                <h3
                  title={story.name}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.22rem',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: '0.4rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    color: isDarkCard ? '#FFFFFF' : 'var(--color-sunset-dark)'
                  }}
                >
                  {story.name}
                </h3>

                {/* Story Paragraph */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.76rem',
                    lineHeight: 1.55,
                    color: isDarkCard ? 'rgba(255, 248, 240, 0.85)' : 'var(--text-secondary)',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {story.story}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE & TABLET HORIZONTAL SWIPE CAROUSEL (Screens < 992px) */}
        <div className="mobile-stories-grid">
          <div
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              gap: '1.25rem',
              padding: '1rem 0.5rem 2rem 0.5rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {successStoriesData.map((story) => (
              <div
                key={`mobile-${story.id}`}
                style={{
                  flex: '0 0 260px',
                  scrollSnapAlign: 'center',
                  borderRadius: '24px',
                  padding: '1.15rem',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid rgba(255, 208, 155, 0.45)',
                  boxShadow: '0 15px 35px -10px rgba(43, 22, 15, 0.12)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '170px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '0.85rem'
                  }}
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <p
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-sunset-orange)'
                  }}
                >
                  {story.role}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    margin: '0.2rem 0 0.5rem 0'
                  }}
                >
                  {story.name}
                </h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {story.story}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expanded Story Spotlight Card below */}
        {activeStoryDetail && (
          <motion.div
            key={activeStoryDetail.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              maxWidth: '820px',
              margin: '3rem auto 0 auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(1.5rem, 3vw, 2.2rem)',
              border: '1px solid rgba(255, 208, 155, 0.4)',
              boxShadow: '0 16px 40px rgba(43, 22, 15, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Quote size={24} color="var(--color-sunset-orange)" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-sunset-orange)' }}>
                  {activeStoryDetail.role}
                </span>
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'rgba(255, 244, 229, 0.7)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-sunset-dark)'
                }}
              >
                <Award size={14} color="var(--color-sunset-orange)" />
                <span>{activeStoryDetail.achievement}</span>
              </div>
            </div>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--color-sunset-dark)', fontStyle: 'italic' }}>
              "{activeStoryDetail.story}"
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(244, 90, 36, 0.12)', paddingTop: '0.8rem' }}>
              <span style={{ fontWeight: 700, fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-sunset-dark)' }}>
                {activeStoryDetail.name}
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {activeStoryDetail.year}
              </span>
            </div>
          </motion.div>
        )}
      </div>

      <style>{`
        .desktop-fan-container {
          display: none;
        }
        .mobile-stories-grid {
          display: block;
        }
        @media (min-width: 992px) {
          .desktop-fan-container {
            display: flex !important;
          }
          .mobile-stories-grid {
            display: none !important;
          }
        }
        .btn-circular:hover {
          background-color: var(--color-sunset-orange) !important;
          color: #FFFFFF !important;
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
};
