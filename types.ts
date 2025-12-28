
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}
