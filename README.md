# 季節のメニュー提案アプリ（Seasonal Menu Generator）

飲食店オーナーや料理開発者向けに、季節に合わせたメニューの提案を行うアプリケーションです。季節、コンセプト、食材などの条件を入力すると、GPT-4oを使用して魅力的なメニュー提案を生成します。

## 機能

- **季節選択**: 春・夏・秋・冬の季節を選択
- **コンセプト入力**: 「さっぱり」「がっつり」「健康志向」などのメニューの方向性を指定
- **食材指定**: 使用したい食材を指定（任意）
- **メニュー提案**: 条件に基づいたAI生成メニュー（名前、説明、食材、提案理由）
- **コピー機能**: 提案結果を簡単にコピーできる機能

## 技術スタック

- **フロントエンド**: React + TypeScript + Vite
- **UIライブラリ**: カスタムUIコンポーネント（shadcn/uiのアプローチを参考）
- **スタイル**: TailwindCSS
- **状態管理**: Zustand
- **AI連携**: OpenAI API (GPT-4o)

## インストールと使用方法

### 必要条件

- Node.js (v20.x 以上推奨)
- OpenAI APIキー

### セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/ideal-tomy/menu_generator.git
cd menu_generator

# 依存関係のインストール
npm install

# .envファイルの作成とOpenAI APIキーの設定
echo "VITE_OPENAI_API_KEY=your_api_key_here" > .env

# 開発サーバーの起動
npm run dev
```

### ビルド

```bash
npm run build
```

## 開発予定の機能

- 画像生成機能
- レシピ詳細情報の表示
- 地域性を考慮したメニュー提案
- 複数の提案結果の保存と管理

## ライセンス

MIT

## 詳細情報

より詳しい情報は [docs/](./docs/) ディレクトリのドキュメントを参照してください。
