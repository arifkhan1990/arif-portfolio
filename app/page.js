import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSecton';
import CPHistorySection from '@/components/CPHistorySection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectSection';

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CPHistorySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
