// Combined question bank — assembled from all q_p*.js files
const QUESTION_BANK = {
  part5: {
    easy:   [...PART5_EASY,   ...PART5_EASY2],
    medium: [...PART5_MEDIUM, ...PART5_MEDIUM2],
    hard:   [...PART5_HARD,   ...PART5_HARD2]
  },
  part6: {
    easy:   [...PART6_EASY,   ...PART6B_EASY],
    medium: [...PART6_MEDIUM, ...PART6B_MEDIUM],
    hard:   [...PART6_HARD,   ...PART6B_HARD]
  },
  part7: {
    easy:   [...PART7_EASY,   ...PART7B_EASY],
    medium: [...PART7_MEDIUM, ...PART7B_MEDIUM],
    hard:   [...PART7_HARD,   ...PART7B_HARD]
  }
};

const DIFFICULTY_LABELS = {
  easy:   { label: "初級 (Beginner)",      color: "#27ae60", targetScore: "400–600",  description: "基礎文法與常用商業詞彙" },
  medium: { label: "中級 (Intermediate)", color: "#f39c12", targetScore: "600–750",  description: "商務英文與進階文法" },
  hard:   { label: "高級 (Advanced)",      color: "#e74c3c", targetScore: "750–900+", description: "精準用字、法律/財務英文" }
};

const PART_LABELS = {
  part5: { label: "Part 5", name: "文法選填 (Incomplete Sentences)", icon: "✏️",  description: "單句填空，測驗文法與詞彙" },
  part6: { label: "Part 6", name: "段落選填 (Text Completion)",       icon: "📝", description: "段落填空，測驗閱讀與語境理解" },
  part7: { label: "Part 7", name: "閱讀理解 (Reading Comprehension)",  icon: "📖", description: "單篇/雙篇/三篇閱讀，測驗理解能力" }
};
