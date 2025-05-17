export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface MenuFormData {
  season: Season;
  concept: string;
  ingredients?: string;
}

export interface MenuSuggestion {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  reason: string;
  season: Season;
}
