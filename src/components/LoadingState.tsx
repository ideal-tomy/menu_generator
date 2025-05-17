const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      <p className="mt-4 text-sm text-gray-500">メニューを生成中です...</p>
    </div>
  );
};

export default LoadingState;
