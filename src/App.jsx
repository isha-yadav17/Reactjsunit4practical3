
import {
  HashRouter,
  MemoryRouter,
  StaticRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Home() {
  return (
    <h2 className="text-xl font-extrabold text-white bg-gradient-to-r from-emerald-600 to-green-500 p-5 rounded-xl border-2 border-green-300 shadow-lg">
      🏠 Welcome to Home Page
    </h2>
  );
}

function About() {
  return (
    <h2 className="text-xl font-extrabold text-white bg-gradient-to-r from-blue-600 to-cyan-500 p-5 rounded-xl border-2 border-cyan-300 shadow-lg">
      💎 This is About Page
    </h2>
  );
}

function Pages() {
  return (
    <div>
      <nav className="flex flex-wrap gap-3 mb-6">
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-6 py-3 rounded-xl border-2 border-orange-300 shadow-lg transition"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="bg-pink-600 hover:bg-pink-700 text-white font-extrabold px-6 py-3 rounded-xl border-2 border-pink-300 shadow-lg transition"
        >
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function HashExample() {
  return (
    <div className="bg-white rounded-2xl border-4 border-orange-400 p-6 shadow-xl hover:shadow-orange-300/40 transition">
      <h2 className="text-2xl font-black text-orange-600 mb-5 border-b-4 border-orange-400 pb-3">
        01. HashRouter
      </h2>

      <HashRouter>
        <Pages />
      </HashRouter>

      <p className="mt-5 bg-orange-100 text-orange-800 border-2 border-orange-300 p-4 rounded-xl font-bold">
        URL uses the # symbol.
      </p>
    </div>
  );
}

function MemoryExample() {
  return (
    <div className="bg-white rounded-2xl border-4 border-purple-400 p-6 shadow-xl hover:shadow-purple-300/40 transition">
      <h2 className="text-2xl font-black text-purple-700 mb-5 border-b-4 border-purple-400 pb-3">
        02. MemoryRouter
      </h2>

      <MemoryRouter initialEntries={["/"]}>
        <Pages />
      </MemoryRouter>

      <p className="mt-5 bg-purple-100 text-purple-800 border-2 border-purple-300 p-4 rounded-xl font-bold">
        Navigation is stored in memory.
      </p>
    </div>
  );
}

function StaticExample() {
  return (
    <div className="bg-white rounded-2xl border-4 border-cyan-400 p-6 shadow-xl hover:shadow-cyan-300/40 transition">
      <h2 className="text-2xl font-black text-cyan-700 mb-5 border-b-4 border-cyan-400 pb-3">
        03. StaticRouter
      </h2>

      <StaticRouter location="/about">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </StaticRouter>

      <p className="mt-5 bg-cyan-100 text-cyan-900 border-2 border-cyan-300 p-4 rounded-xl font-bold">
        Displays a fixed route.
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 bg-white/10 border-2 border-white/20 rounded-3xl p-8 shadow-2xl">
          <p className="text-yellow-300 font-black uppercase tracking-widest mb-4">
            React Practical • 03
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-white">
            Router <span className="text-yellow-300">Types</span>
          </h1>

          <div className="w-32 h-2 bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-purple-100 text-lg font-semibold mt-5">
            Explore HashRouter, MemoryRouter and StaticRouter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <HashExample />
          <MemoryExample />
          <StaticExample />
        </div>

        <footer className="text-center mt-12 bg-black/20 border border-white/20 rounded-xl p-5 text-white font-bold">
          ✨ React Router Types — Learn • Explore • Build ✨
        </footer>
      </div>
    </div>
  );
}

export default App;
