
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const MathTest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-yellow to-soft-blue p-8">
      <div className="container mx-auto space-y-8 animate-fadeIn">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-swedish-blue">Math Test Administration</h1>
          <Button className="bg-swedish-blue hover:bg-swedish-blue/90">
            <Plus className="mr-2 h-4 w-4" /> Create New Test
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((test) => (
            <Card key={test} className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Mathematics Test {test}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Created: {new Date().toLocaleDateString()}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline">Edit</Button>
                    <Button variant="outline">Preview</Button>
                    <Button variant="outline" className="text-red-600">Delete</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MathTest;
