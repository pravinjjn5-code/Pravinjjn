// Calculate Words Per Minute (WPM)
export const calculateWPM = (correctCharacters, timeInSeconds) => {
  if (timeInSeconds === 0) return 0;
  const minutes = timeInSeconds / 60;
  const words = correctCharacters / 5; // Standard: 5 characters = 1 word
  return Math.round(words / minutes);
};

// Calculate Accuracy Percentage
export const calculateAccuracy = (correctCharacters, totalTypedCharacters) => {
  if (totalTypedCharacters === 0) return 100;
  return Math.round((correctCharacters / totalTypedCharacters) * 100);
};

// Compare typed text with target text character by character
export const compareText = (targetText, typedText) => {
  const result = [];
  const maxLength = Math.max(targetText.length, typedText.length);

  for (let i = 0; i < maxLength; i++) {
    if (i >= targetText.length) {
      result.push({ char: typedText[i], status: 'extra' });
    } else if (i >= typedText.length) {
      result.push({ char: targetText[i], status: 'pending' });
    } else if (targetText[i] === typedText[i]) {
      result.push({ char: typedText[i], status: 'correct' });
    } else {
      result.push({ char: targetText[i], status: 'incorrect', typed: typedText[i] });
    }
  }

  return result;
};

// Count correct characters
export const countCorrectCharacters = (targetText, typedText) => {
  let correct = 0;
  const minLength = Math.min(targetText.length, typedText.length);

  for (let i = 0; i < minLength; i++) {
    if (targetText[i] === typedText[i]) {
      correct++;
    }
  }

  return correct;
};

// Format time as MM:SS
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
