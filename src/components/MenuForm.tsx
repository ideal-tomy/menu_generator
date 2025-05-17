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
    <form onSubmit={handleSubmit} className="space-y-8 p-10 bg-white rounded-xl shadow-lg border border-primary/20">
      <div className="space-y-7">
        <div className="mb-8">
          <Label htmlFor="season" className="text-xl font-medium mb-3 block text-gray-700">季節を選択</Label>
          <Select
            value={formData.season}
            onValueChange={(value) => updateFormData({ season: value as any })}
            disabled={isLoading}
          >
            <SelectTrigger id="season" className="w-full h-14 text-lg bg-white border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20">
              <SelectValue placeholder="季節を選択" />
            </SelectTrigger>
            <SelectContent position="popper" className="bg-white border-2 border-gray-200 shadow-xl z-[100] w-full min-w-[250px]">
              <div className="p-1">
                <SelectItem value="spring" className="hover:bg-spring-light py-3 px-5 text-lg cursor-pointer rounded-md my-1">春</SelectItem>
                <SelectItem value="summer" className="hover:bg-summer-light py-3 px-5 text-lg cursor-pointer rounded-md my-1">夏</SelectItem>
                <SelectItem value="autumn" className="hover:bg-autumn-light py-3 px-5 text-lg cursor-pointer rounded-md my-1">秋</SelectItem>
                <SelectItem value="winter" className="hover:bg-winter-light py-3 px-5 text-lg cursor-pointer rounded-md my-1">冬</SelectItem>
              </div>
            </SelectContent>
          </Select>
        </div>
        
        <div className="mb-8">
          <Label htmlFor="concept" className="text-xl font-medium mb-3 block text-gray-700">メニューコンセプト</Label>
          <Input
            id="concept"
            placeholder="例: さっぱり、がっつり、健康志向"
            className="h-14 text-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
            value={formData.concept}
            onChange={(e) => updateFormData({ concept: e.target.value })}
            disabled={isLoading}
            required
          />
        </div>
        
        <div className="mb-8">
          <Label htmlFor="ingredients" className="text-xl font-medium mb-3 block text-gray-700">使用したい食材（任意）</Label>
          <Input
            id="ingredients"
            placeholder="例: トマト、バジル、鶏肉など"
            value={formData.ingredients || ''}
            onChange={(e) => updateFormData({ ingredients: e.target.value })}
            disabled={isLoading}
            className="h-14 text-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      
      {error && <div className="text-red-500 text-sm font-medium mt-2">{error}</div>}
      
      <Button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-5 rounded-lg shadow-lg hover:shadow-xl transition-all mt-4"
        disabled={isLoading || !formData.concept || !formData.season}
      >
        {isLoading ? 'メニュー生成中...' : 'メニューを提案する'}
      </Button>
    </form>
  );
};

export default MenuForm;
