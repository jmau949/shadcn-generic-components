import { Button } from "./components/ui/button";
function App() {
  return (
    <div className="p-6 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-4">
      <Button className="bg-amber-400" variant="destructive">
        Destructive
      </Button>
      <div>
        <div className="text-xl font-medium text-black">Tailwind Test</div>
        <p className="text-gray-500">
          This is a sample div using Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default App;
