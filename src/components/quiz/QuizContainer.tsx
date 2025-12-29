import { useState } from 'react';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';
import { quizQuestions, calculateResults, QuizAnswer } from './quizData';

const QuizContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calculateResults> | null>(null);

  const totalSteps = quizQuestions.length;
  const progress = ((currentStep) / totalSteps) * 100;
  const isComplete = currentStep >= totalSteps;

  const handleAnswer = (questionId: string, value: string | string[]) => {
    const newAnswers = answers.filter(a => a.questionId !== questionId);
    newAnswers.push({ questionId, value });
    setAnswers(newAnswers);
  };

  const getCurrentAnswer = () => {
    if (currentStep >= totalSteps) return undefined;
    const question = quizQuestions[currentStep];
    return answers.find(a => a.questionId === question.id)?.value;
  };

  const canProceed = () => {
    if (currentStep >= totalSteps) return false;
    const question = quizQuestions[currentStep];
    const answer = answers.find(a => a.questionId === question.id);
    return answer !== undefined;
  };

  const handleNext = async () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else if (currentStep === totalSteps - 1) {
      setIsCalculating(true);
      // Simulate calculation
      await new Promise(resolve => setTimeout(resolve, 1500));
      const calculatedResults = calculateResults(answers);
      setResults(calculatedResults);
      setIsCalculating(false);
      setCurrentStep(totalSteps);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResults(null);
  };

  if (isCalculating) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Finding Your Perfect Match</h3>
        <p className="text-muted-foreground">Analyzing your preferences against our database...</p>
      </div>
    );
  }

  if (isComplete && results) {
    return <QuizResults results={results} onRestart={handleRestart} />;
  }

  const currentQuestion = quizQuestions[currentStep];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {currentStep + 1} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-foreground">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="animate-fade-in">
        <QuizQuestion
          question={currentQuestion}
          value={getCurrentAnswer()}
          onChange={(value) => handleAnswer(currentQuestion.id, value)}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
          className={cn(currentStep === 0 && 'invisible')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!canProceed()}
        >
          {currentStep === totalSteps - 1 ? 'See Results' : 'Next'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default QuizContainer;
