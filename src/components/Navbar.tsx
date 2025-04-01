import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { FileText } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-10 flex items-center justify-between bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <FileText className="h-6 w-6 text-resume-blue" />
        <span className="text-xl font-bold text-gray-800">ResumeHub</span>
      </div>
      
      <div className="flex items-center space-x-3">
        <SignedOut>

        <Button variant="outline" className="text-resume-blue border-resume-blue hover:bg-resume-blue hover:text-white transition-all">
          <SignInButton>
            Log In
          </SignInButton>
        </Button>
        <Button className="bg-resume-blue hover:bg-resume-darkBlue text-white transition-all">
          <SignUpButton >
            Sign Up
          </SignUpButton>
        </Button>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;