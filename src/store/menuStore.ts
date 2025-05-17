import { create } from 'zustand';
import type { MenuFormData, MenuSuggestion } from '../lib/types';
import { generateMenuSuggestions } from '../lib/api';

interface MenuState {
  formData: MenuFormData;
  suggestions: MenuSuggestion[];
  isLoading: boolean;
  error: string | null;
  updateFormData: (data: Partial<MenuFormData>) => void;
  generateSuggestions: (count?: number) => Promise<void>;
  resetSuggestions: () => void;
}

export const useMenuStore = create<MenuState>((set, get) => ({
  formData: {
    season: 'spring',
    concept: '',
    ingredients: '',
  },
  suggestions: [],
  isLoading: false,
  error: null,
  
  updateFormData: (data) => set({
    formData: { ...get().formData, ...data },
    error: null,
  }),
  
  generateSuggestions: async (count = 3) => {
    const { formData } = get();
    
    // バリデーション
    if (!formData.season || !formData.concept) {
      set({ error: '季節とコンセプトは必須項目です' });
      return;
    }
    
    set({ isLoading: true, error: null });
    
    try {
      const suggestions = await generateMenuSuggestions(formData, count);
      set({ suggestions, isLoading: false });
    } catch (error) {
      console.error(error);
      set({
        error: error instanceof Error ? error.message : 'u30e1u30cbu30e5u30fcu306eu751fu6210u4e2du306bu30a8u30e9u30fcu304cu767au751fu3057u307eu3057u305f',
        isLoading: false,
      });
    }
  },
  
  resetSuggestions: () => set({ suggestions: [], error: null }),
}));
