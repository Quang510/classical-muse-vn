import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const questions = [
  {
    question: 'Ai là "cha đẻ của kinh tế học cổ điển"?',
    options: ["David Ricardo", "Adam Smith", "John Stuart Mill", "Karl Marx"],
    correct: 1,
  },
  {
    question: '"Bàn tay vô hình" là khái niệm của ai?',
    options: ["Karl Marx", "David Ricardo", "Adam Smith", "John Keynes"],
    correct: 2,
  },
  {
    question: "David Ricardo nổi tiếng với học thuyết nào?",
    options: [
      "Học thuyết giá trị thặng dư",
      "Học thuyết lợi thế so sánh",
      "Học thuyết bàn tay vô hình",
      "Học thuyết cầu có hiệu quả",
    ],
    correct: 1,
  },
  {
    question: "Ai kế thừa và phê phán trường phái cổ điển?",
    options: ["John Stuart Mill", "David Ricardo", "Karl Marx", "Alfred Marshall"],
    correct: 2,
  },
];

export const Quiz = () => {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (!showResults) {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = optionIndex;
      setAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setShowResults(false);
  };

  const score = answers.filter(
    (answer, index) => answer === questions[index].correct
  ).length;

  return (
    <div className="space-y-6">
      {questions.map((q, qIndex) => (
        <Card key={qIndex} className="border-accent/20">
          <CardContent className="p-6 space-y-4">
            <h4 className="font-serif text-lg text-primary">
              {qIndex + 1}. {q.question}
            </h4>
            <div className="space-y-2">
              {q.options.map((option, oIndex) => {
                const isSelected = answers[qIndex] === oIndex;
                const isCorrect = oIndex === q.correct;
                const showFeedback = showResults && isSelected;

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleAnswer(qIndex, oIndex)}
                    disabled={showResults}
                    className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                      showFeedback
                        ? isCorrect
                          ? "border-teal bg-teal/10"
                          : "border-destructive bg-destructive/10"
                        : isSelected
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50 hover:bg-secondary/50"
                    } ${showResults ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{option}</span>
                      {showFeedback && (
                        <>
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-teal" />
                          ) : (
                            <XCircle className="w-5 h-5 text-destructive" />
                          )}
                        </>
                      )}
                      {showResults && !isSelected && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-teal" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="text-center sm:text-left">
          {showResults && (
            <p className="text-lg font-medium">
              Điểm số: <span className="text-accent font-serif text-2xl">{score}</span>/{questions.length}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          {!showResults ? (
            <Button
              onClick={handleSubmit}
              disabled={answers.some((a) => a === null)}
              className="bg-accent hover:bg-accent/90"
            >
              Chấm điểm
            </Button>
          ) : (
            <Button onClick={handleReset} variant="outline">
              Làm lại
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
