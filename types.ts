
export interface DiagramBlock {
  id: number;
  label: string;
  animationClass: string;
}

export interface Activity {
  id: number;
  title: string;
  navLabel: string;
  problemStatement: string;
  diagram: DiagramBlock[];
  explanation: {
    source: string;
    conversion: string;
    output: string;
    relevance: string;
  };
}