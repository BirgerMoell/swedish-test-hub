import { Button } from "@/components/ui/button";
import Auth from "@/components/Auth";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-yellow to-soft-blue">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-swedish-blue">
              Swedish National Tests Platform
            </h1>
            <p className="text-lg text-gray-700">
              A comprehensive platform for creating and administering Swedish National Tests.
              Streamline your testing process with our intuitive tools and features.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/lovable-uploads/ee6d0892-3389-4cc6-803d-822571525677.png"
              alt="Swedish educational building"
              className="w-full h-auto object-cover"
            />
          </div>
          <Button 
            onClick={() => navigate("/math-test")}
            className="bg-swedish-blue hover:bg-swedish-blue/90"
          >
            Try Math Test
          </Button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Auth />
        </div>
      </div>
    </div>
  );
}

export default Index;
