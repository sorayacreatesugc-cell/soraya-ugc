export interface ServicePackage {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface PortfolioItem {
  id: number;
  type: 'video' | 'image';
  src: string;
  caption: string;
  category?: string;
  link?: string;
}

export interface AIStrategyResult {
  hook: string;
  visual: string;
  whyItWorks: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}