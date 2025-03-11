
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Solve for x: 3x + 7 = 22",
    answer: "5"
  },
  {
    id: 2,
    question: "What is the area of a circle with radius 6 cm? (Use π = 3.14)",
    answer: "113.04"
  },
  {
    id: 3,
    question: "Simplify: -4(-3 + 2)",
    answer: "4"
  },
  {
    id: 4,
    question: "What is 25% of 80?",
    answer: "20"
  },
  {
    id: 5,
    question: "If a rectangle has a length of 12 cm and a width of 5 cm, what is its perimeter?",
    answer: "34"
  }
];

const MathTest = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getScore = () => {
    return Object.entries(answers).reduce((score, [questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      return score + (question?.answer === answer ? 1 : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-yellow to-soft-blue p-8">
      <div className="container mx-auto space-y-8 animate-fadeIn">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-3xl font-bold text-swedish-blue">8th Grade Math Test</h1>
          </div>
        </div>
        
        <div className="space-y-6">
          {questions.map((question) => (
            <Card key={question.id} className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">{question.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Enter your answer"
                    value={answers[question.id] || ""}
                    onChange={(e) => 
                      setAnswers(prev => ({
                        ...prev,
                        [question.id]: e.target.value
                      }))
                    }
                    disabled={showResults}
                  />
                  {showResults && (
                    <div className={`text-sm ${answers[question.id] === question.answer ? 'text-green-600' : 'text-red-600'}`}>
                      {answers[question.id] === question.answer ? 
                        "Correct!" : 
                        `Incorrect. The correct answer is ${question.answer}`}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showResults ? (
          <Button 
            onClick={handleSubmit}
            className="bg-swedish-blue hover:bg-swedish-blue/90 w-full"
          >
            Submit Test
          </Button>
        ) : (
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Your score: {getScore()} out of {questions.length}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MathTest;
