import React from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { StaggerContainer, StaggerItem } from '../shared/StaggerContainer';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LatestUpdates: React.FC = () => {
  const events = [
    {
      title: 'Community Tree Plantation & Soil Preparation Day',
      type: 'Volunteer Event',
      date: 'Saturday, Nov 14, 2026',
      time: '7:30 AM – 11:30 AM',
      location: 'Riverside Greenway Community Lot',
      description: 'Join local stewards as we prepare soil beds, plant 150 native shade trees, and build rain-catchment trenches.'
    },
    {
      title: 'Weekend Reading Circles Orientation & Mentor Workshop',
      type: 'Mentor Workshop',
      date: 'Sunday, Nov 22, 2026',
      time: '10:00 AM – 1:00 PM',
      location: 'Sunny Vale Youth Center',
      description: 'A collaborative session for new education volunteers exploring phonics, storytelling techniques, and child-safe engagement.'
    },
    {
      title: 'Senior Health Checkup & Dignity Wellness Camp',
      type: 'Health Camp',
      date: 'Saturday, Dec 05, 2026',
      time: '8:30 AM – 2:00 PM',
      location: 'Central Community Town Hall',
      description: 'Free non-invasive screenings for blood pressure, blood glucose, eye wellness, and personalized geriatric counseling.'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface-warm)' }}>
      <div className="container">
        <SectionHeader
          scriptEyebrow="Community Calendar"
          title="Upcoming Gatherings & Field Drives"
          subtitle="Be part of the hands-on momentum. Mark your calendar for upcoming community sessions, workshops, and volunteer orientations."
          showOrnament={true}
        />

        <StaggerContainer
          staggerDelay={0.15}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {events.map((event, idx) => (
            <StaggerItem key={idx}>
              <div
                className="warm-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: 'var(--bg-surface)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="badge-tag">{event.type}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-muted-rose)', fontWeight: 600 }}>
                    Demonstration Event
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-sunset-dark)', lineHeight: 1.3 }}>
                  {event.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    <Calendar size={16} color="var(--color-sunset-orange)" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    <MapPin size={16} color="var(--color-sunset-orange)" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                  {event.description}
                </p>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <Link
                    to="/volunteer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: 'var(--color-sunset-orange)'
                    }}
                  >
                    <span>RSVP / Participate</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
