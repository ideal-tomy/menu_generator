import { useMenuStore } from './store/menuStore';
import MenuForm from './components/MenuForm';
import MenuCard from './components/MenuCard';
import LoadingState from './components/LoadingState';
import { Toaster } from './components/ui/toaster';

function App() {
  const { suggestions, isLoading } = useMenuStore();

  return (
    <div className="min-h-screen bg-primary-light/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
          <h1 className="text-4xl font-bold text-primary bg-yellow-100 p-2">季節のメニュー提案</h1>
          <p className="mt-4 text-lg text-gray-600">
            季節やコンセプトに合わせた新しいメニューのアイデアを提案します
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <MenuForm />
          </div>

          <div className="lg:col-span-8">
            {isLoading ? (
              <LoadingState />
            ) : suggestions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {suggestions.map((menu) => (
                  <MenuCard key={menu.id} menu={menu} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-lg shadow-sm text-center text-gray-500">
                条件を入力して「メニューを提案する」ボタンを押してください
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App
