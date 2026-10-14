import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroSection } from '../components/home/IntroSection';
import { ProgramExplorer } from '../components/home/ProgramExplorer';
import { FeaturedStory } from '../components/home/FeaturedStory';
import { ImpactPreview } from '../components/home/ImpactPreview';
import { JourneyTimeline } from '../components/home/JourneyTimeline';
import { CommunityGallery } from '../components/home/CommunityGallery';
import { VolunteerBanner } from '../components/home/VolunteerBanner';
import { LatestUpdates } from '../components/home/LatestUpdates';
import { FinalCTA } from '../components/home/FinalCTA';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'ANBU Foundation — Together, We Make a Difference';
  }, []);

  return (
    <main id="main-content">
      {/* 1. Cinematic Sunset Hero Section */}
      <HeroSection />

      {/* 2. Introduction to ANBU Foundation */}
      <IntroSection />

      {/* 3. Animated Program Explorer */}
      <ProgramExplorer />

      {/* 4. Featured Human-Interest Story */}
      <FeaturedStory />

      {/* 5. Interactive Impact Preview */}
      <ImpactPreview />

      {/* 6. Project Journey Timeline */}
      <JourneyTimeline />

      {/* 7. Community Gallery */}
      <CommunityGallery />

      {/* 8. Volunteer and Donation Section */}
      <VolunteerBanner />

      {/* 9. Latest Updates or Events */}
      <LatestUpdates />

      {/* 10. Final Call to Action */}
      <FinalCTA />
    </main>
  );
};
