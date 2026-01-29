export interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
}

export interface ValueItem {
  id: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}