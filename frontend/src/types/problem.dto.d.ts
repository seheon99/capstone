declare type Problem = {
  id: number;
  title: string;
  descriptions: string;
  accepted: number;
  attempts: number;
};

declare type ProblemListItem = {
  id: number;
  title: string;
  accepted: number;
  attempts: number;
};

declare type ProblemList = ProblemListItem[];
