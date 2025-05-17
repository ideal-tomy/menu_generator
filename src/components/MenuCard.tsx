import { useState } from 'react';
import type { MenuSuggestion } from '../lib/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

interface MenuCardProps {
  menu: MenuSuggestion;
}

const MenuCard = ({ menu }: MenuCardProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const handleCopy = () => {
    const content = `\u30e1\u30cb\u30e5\u30fc\u540d: ${menu.name}\n\n\u8aac\u660e: ${menu.description}\n\n\u98df\u6750: ${menu.ingredients.join(', ')}\n\n\u63d0\u6848\u7406\u7531: ${menu.reason}`;
    
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      toast({
        title: '\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f',
        description: '\u30e1\u30cb\u30e5\u30fc\u60c5\u5831\u3092\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f',
      });
      
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('\u30b3\u30d4\u30fc\u306b\u5931\u6557\u3057\u307e\u3057\u305f', err);
      toast({
        title: '\u30a8\u30e9\u30fc',
        description: '\u30b3\u30d4\u30fc\u306b\u5931\u6557\u3057\u307e\u3057\u305f',
        variant: 'destructive',
      });
    });
  };
  
  // 季節ごとのより魅力的なスタイル定義
  const seasonConfig = {
    spring: {
      style: 'border-spring bg-spring-light/70 border-l-8',
      icon: '🌸',
      title: 'text-pink-700'
    },
    summer: {
      style: 'border-summer bg-summer-light/70 border-l-8',
      icon: '☀️',
      title: 'text-blue-700'
    },
    autumn: {
      style: 'border-autumn bg-autumn-light/70 border-l-8',
      icon: '🍁',
      title: 'text-orange-700'
    },
    winter: {
      style: 'border-winter bg-winter-light/70 border-l-8',
      icon: '❄️',
      title: 'text-green-700'
    }
  }[menu.season];
  
  return (
    <Card className={`w-full max-w-md ${seasonConfig.style} relative shadow-md hover:shadow-lg transition-shadow duration-300`}>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-3 right-3 bg-white/80 hover:bg-white shadow-sm rounded-full p-2 h-8 w-8 flex items-center justify-center"
        onClick={handleCopy}
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-600">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
          </svg>
        )}
      </Button>
      
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <span className="mr-2 text-xl">{seasonConfig.icon}</span>
          <CardTitle className={`${seasonConfig.title} text-xl`}>{menu.name}</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-5">
        <div className="bg-white/60 p-3 rounded-md">
          <h4 className="font-medium text-primary mb-1 flex items-center">
            <span className="mr-1">📝</span> 説明
          </h4>
          <p className="text-gray-700">{menu.description}</p>
        </div>
        
        <div className="bg-white/60 p-3 rounded-md">
          <h4 className="font-medium text-primary mb-1 flex items-center">
            <span className="mr-1">🍲</span> 食材
          </h4>
          <ul className="pl-5 list-disc text-gray-700">
            {menu.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white/60 p-3 rounded-md">
          <h4 className="font-medium text-primary mb-1 flex items-center">
            <span className="mr-1">💡</span> 提案理由
          </h4>
          <p className="text-gray-700">{menu.reason}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
