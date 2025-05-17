import { useMenuStore } from './store/menuStore';
import MenuForm from './components/MenuForm';
import MenuCard from './components/MenuCard';
import LoadingState from './components/LoadingState';
import { Toaster } from './components/ui/toaster';

function App() {
  const { suggestions, isLoading } = useMenuStore();

  return (
    <div className="min-h-screen bg-orange-50 py-16 px-6 sm:px-12 lg:px-16 flex justify-center items-start">
      <div className="w-full max-w-5xl">
        <header className="text-center mb-16 bg-white p-10 rounded-xl shadow-lg border-t-8 border-primary">
          <h1 className="text-5xl font-bold text-primary p-3">季節のメニュー提案</h1>
          <p className="mt-6 text-xl text-gray-700">
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
