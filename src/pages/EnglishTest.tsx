
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is the past tense of 'speak'?",
    answer: "spoke"
  },
  {
    id: 2,
    question: "Choose the correct word: 'Their/There/They're going to the movies.'",
    answer: "they're"
  },
  {
    id: 3,
    question: "What is the opposite (antonym) of 'generous'?",
    answer: "stingy"
  },
  {
    id: 4,
    question: "Complete the idiom: 'It's raining cats and _____'",
    answer: "dogs"
  },
  {
    id: 5,
    question: "Which word is a synonym for 'beautiful'?",
    answer: "gorgeous"
  }
];

const EnglishTest = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getScore = () => {
    return Object.entries(answers).reduce((score, [questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      return score + (question?.answer.toLowerCase() === answer.toLowerCase() ? 1 : 0);
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
            <h1 className="text-3xl font-bold text-swedish-blue">8th Grade English Test</h1>
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
                    <div className={`text-sm ${answers[question.id]?.toLowerCase() === question.answer.toLowerCase() ? 'text-green-600' : 'text-red-600'}`}>
                      {answers[question.id]?.toLowerCase() === question.answer.toLowerCase() ? 
                        "Correct!" : 
                        `Incorrect. The correct answer is: ${question.answer}`}
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

export default EnglishTest;
