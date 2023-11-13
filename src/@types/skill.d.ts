enum Skill {
  LANGUAGE = 'LANGUAGE',
  FRAMEWORK = 'FRAMEWORK',
  COURSE = 'COURSE',
  CERTIFICATION = 'CERTIFICATION',
  DEGREE = 'DEGREE',
}

interface SkillItem {
  name: string;
  icon: string;
  description: string;
  url: string;
}
