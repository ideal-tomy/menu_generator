import OpenAI from 'openai';
import type { MenuFormData, MenuSuggestion } from './types';
import { generatePrompt } from './prompts';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // クライアントサイドでの使用（本番環境では推奨されません）
});

export async function generateMenuSuggestions(
  formData: MenuFormData,
  count: number = 3
): Promise<MenuSuggestion[]> {
  try {
    const prompt = generatePrompt(formData, count);
    
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: prompt.system },
        { role: 'user', content: prompt.user }
      ],
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;
    if (!content) throw new Error('APIからの応答が空です');

    return JSON.parse(content) as MenuSuggestion[];
  } catch (error) {
    console.error('メニュー生成エラー:', error);
    throw new Error('メニューの生成中にエラーが発生しました。もう一度お試しください。');
  }
}
