export const lessons = {
  beginner: [
    {
      id: 1,
      title: "Home Row Keys",
      text: "aaa sss ddd fff jjj kkk lll",
      difficulty: "beginner"
    },
    {
      id: 2,
      title: "Basic Words",
      text: "the quick brown fox jumps over the lazy dog",
      difficulty: "beginner"
    },
    {
      id: 3,
      title: "Simple Sentences",
      text: "I love to type fast. Practice makes perfect. Keep typing every day.",
      difficulty: "beginner"
    }
  ],
  intermediate: [
    {
      id: 4,
      title: "Common Phrases",
      text: "The early bird catches the worm. Time flies when you're having fun. Actions speak louder than words.",
      difficulty: "intermediate"
    },
    {
      id: 5,
      title: "Numbers and Letters",
      text: "In 2024, there are 365 days. Practice typing 123 456 789 times daily for best results.",
      difficulty: "intermediate"
    },
    {
      id: 6,
      title: "Mixed Content",
      text: "Programming languages like JavaScript, Python, and Java are popular. Version 3.14 was released yesterday.",
      difficulty: "intermediate"
    }
  ],
  advanced: [
    {
      id: 7,
      title: "Complex Sentences",
      text: "The quick brown fox jumps over the lazy dog while the sun sets beautifully over the horizon, painting the sky with vibrant colors.",
      difficulty: "advanced"
    },
    {
      id: 8,
      title: "Technical Text",
      text: "React Native allows developers to build mobile applications using JavaScript and React. Components render native UI elements for iOS and Android platforms.",
      difficulty: "advanced"
    },
    {
      id: 9,
      title: "Special Characters",
      text: "function calculateSum(a, b) { return a + b; } // This is a comment. Email: test@example.com",
      difficulty: "advanced"
    }
  ]
};

export const getDifficultyLessons = (difficulty) => {
  return lessons[difficulty] || lessons.beginner;
};

export const getAllLessons = () => {
  return [...lessons.beginner, ...lessons.intermediate, ...lessons.advanced];
};
