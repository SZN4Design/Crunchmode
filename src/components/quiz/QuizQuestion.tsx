import { cn } from '@/lib/utils';
import { QuizQuestionData } from './quizData';

interface QuizQuestionProps {
  question: QuizQuestionData;
  value: string | string[] | undefined;
  onChange: (value: string | string[]) => void;
}

const QuizQuestion = ({ question, value, onChange }: QuizQuestionProps) => {
  const handleOptionClick = (optionValue: string) => {
    if (question.multiSelect) {
      const currentValues = (value as string[]) || [];
      if (currentValues.includes(optionValue)) {
        onChange(currentValues.filter(v => v !== optionValue));
      } else {
        onChange([...currentValues, optionValue]);
      }
    } else {
      onChange(optionValue);
    }
  };

  const isSelected = (optionValue: string) => {
    if (question.multiSelect) {
      return ((value as string[]) || []).includes(optionValue);
    }
    return value === optionValue;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-2">{question.title}</h2>
        {question.description && (
          <p className="text-muted-foreground">{question.description}</p>
        )}
        {question.multiSelect && (
          <p className="text-sm text-primary mt-2">Select all that apply</p>
        )}
      </div>

      <div className="grid gap-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            className={cn(
              'w-full p-4 text-left rounded-xl border-2 transition-all duration-200',
              'hover:border-primary/50 hover:bg-primary/5',
              isSelected(option.value)
                ? 'border-primary bg-primary/10'
                : 'border-border bg-card'
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0',
                isSelected(option.value) ? 'border-primary bg-primary' : 'border-muted-foreground/30'
              )}>
                {isSelected(option.value) && (
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                )}
              </div>
              <div>
                <p className="font-medium text-foreground">{option.label}</p>
                {option.description && (
                  <p className="text-sm text-muted-foreground mt-0.5">{option.description}</p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
