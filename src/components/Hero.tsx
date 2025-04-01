
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { toast } from 'sonner';
const Hero = () => {
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();
    const handleClick = () => {
        if (isSignedIn) {
            navigate('/builder');
        } else {
            toast.error('Please sign in to continue');
        }
    }
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 py-16 lg:py-24 max-w-7xl mx-auto">
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Create standout resumes that get you hired
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Build professional resumes in minutes with our easy-to-use builder. 
          Stand out from the crowd and land your dream job.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
          onClick={handleClick}
           size="lg" className="bg-resume-blue hover:bg-resume-darkBlue text-white text-lg font-medium transition-all">
           Get Started - It's Free
          </Button>
        
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg h-80 md:h-96 lg:h-[500px] overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <div className="bg-resume-lightGray w-4/5 h-5/6 rounded-lg shadow-md flex flex-col">
            <div className="h-1/5 border-b border-gray-200 p-4">
              <div className="w-1/2 h-6 bg-white rounded-md"></div>
            </div>
            <div className="flex flex-1">
              <div className="w-1/3 p-4 border-r border-gray-200">
                <div className="h-12 w-12 bg-resume-lightBlue rounded-full mb-4"></div>
                <div className="h-4 w-full bg-white rounded-md mb-3"></div>
                <div className="h-4 w-3/4 bg-white rounded-md mb-6"></div>
                <div className="h-4 w-full bg-white rounded-md mb-2"></div>
                <div className="h-4 w-full bg-white rounded-md mb-2"></div>
                <div className="h-4 w-2/3 bg-white rounded-md"></div>
              </div>
              <div className="w-2/3 p-4">
                <div className="h-5 w-3/4 bg-white rounded-md mb-4"></div>
                <div className="h-4 w-full bg-white rounded-md mb-2"></div>
                <div className="h-4 w-full bg-white rounded-md mb-2"></div>
                <div className="h-4 w-full bg-white rounded-md mb-4"></div>
                <div className="h-5 w-1/2 bg-white rounded-md mb-4"></div>
                <div className="h-4 w-full bg-white rounded-md mb-2"></div>
                <div className="h-4 w-5/6 bg-white rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;