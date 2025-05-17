import type { MenuFormData } from './types';

export function generatePrompt(formData: MenuFormData, count: number) {
  const { season, concept, ingredients } = formData;
  
  const seasonJapanese = {
    spring: '春',
    summer: '夏',
    autumn: '秋',
    winter: '冬'
  }[season];

  const systemPrompt = `あなたは一流レストランのメニュー開発コンサルタントです。
飲食店向けの季節限定メニューを提案してください。提案内容は以下のJSON形式で返してください。
[
  {
    "id": "一意のID",
    "name": "メニュー名",
    "description": "お客様向けの魅力的な説明文",
    "ingredients": ["主要食材1", "主要食材2", ...],
    "reason": "このメニューを提案する理由や背景",
    "season": "${season}"
  },
  ...
]

必ず有効なJSONとして出力し、余計なマークダウン記法や説明テキストは含めないでください。`;

  const userPrompt = `${seasonJapanese}のメニューを${count}個提案してください。
コンセプト: ${concept}
${ingredients ? `使用したい食材: ${ingredients}` : ''}`;

  return { system: systemPrompt, user: userPrompt };
}
