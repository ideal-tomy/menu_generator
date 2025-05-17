import React from 'react';
import { useMenuStore } from '../store/menuStore';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const MenuForm = () => {
  const { formData, updateFormData, generateSuggestions, isLoading, error } = useMenuStore();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await generateSuggestions(3);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white rounded-lg shadow-md border border-primary/20">
      <div className="space-y-5">
        <div>
          <Label htmlFor="season" className="text-base font-medium mb-1 block text-gray-700">季節を選択</Label>
          <Select
            value={formData.season}
            onValueChange={(value) => updateFormData({ season: value as any })}
            disabled={isLoading}
          >
            <SelectTrigger id="season" className="w-full bg-white border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20">
              <SelectValue placeholder="季節を選択" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
              <SelectItem value="spring" className="hover:bg-spring-light py-2.5 px-4 cursor-pointer">春</SelectItem>
              <SelectItem value="summer" className="hover:bg-summer-light py-2.5 px-4 cursor-pointer">夏</SelectItem>
              <SelectItem value="autumn" className="hover:bg-autumn-light py-2.5 px-4 cursor-pointer">秋</SelectItem>
              <SelectItem value="winter" className="hover:bg-winter-light py-2.5 px-4 cursor-pointer">冬</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="concept" className="text-base font-medium mb-1 block text-gray-700">メニューコンセプト</Label>
          <Input
            id="concept"
            placeholder="例: さっぱり、健康志向、がっつり..."
            value={formData.concept}
            onChange={(e) => updateFormData({ concept: e.target.value })}
            disabled={isLoading}
            required
            className="border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        
        <div>
          <Label htmlFor="ingredients" className="text-base font-medium mb-1 block text-gray-700">使用したい食材（任意）</Label>
          <Input
            id="ingredients"
            placeholder="例: トマト、バジル、鶏肉..."
            value={formData.ingredients || ''}
            onChange={(e) => updateFormData({ ingredients: e.target.value })}
            disabled={isLoading}
            className="border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      
      {error && <div className="text-red-500 text-sm font-medium mt-2">{error}</div>}
      
      <Button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md shadow-md hover:shadow-lg transition-all"
        disabled={isLoading || !formData.concept || !formData.season}
      >
        {isLoading ? 'メニュー生成中...' : 'メニューを提案する'}
      </Button>
    </form>
  );
};

export default MenuForm;
