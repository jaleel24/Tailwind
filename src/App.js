import "./App.css";

import pic from "./jaleel.jpg";

function App() {
  return (
    <div>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src={pic} alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div>
          <img
            class="block mx-auto h-24 w-24 sm:mx-0 sm:shrink-0"
            rounded-full
            src={pic}
            alt="ChitChat Logo"
          />
        </div>
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">Erin Lindford</p>
            <p class="text-slate-500 font-medium">Product Engineer</p>
          </div>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold bg-slate-400 rounded hover:text-slate-100 focus:ring-2">more info</button>
      </div>
    </div>
  );
}

export default App;
