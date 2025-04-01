import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <footer className="w-full py-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ResumeHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;