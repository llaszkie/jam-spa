export function App() {
  return (
    <section className="h-screen overflow-hidden bg-green-900">
      <header className="m-0.5 flex bg-slate-600">
        <div className="flex-auto p-5 text-left text-xl text-emerald-200">
          StarWars-o-Pedia
        </div>
      </header>
      <nav></nav>
      <div className="flex h-screen">
        <aside className="mx-0.5 flex basis-1/4 bg-slate-300 bg-gradient-to-t from-slate-400 to-slate-50">
          <ul>
            <li className="p-5">
              <a
                href="li"
                className="text-blue-500 underline hover:text-blue-900"
              >
                Li-1qwe 123 1 3e 13
              </a>
            </li>
            <li className="p-5">
              <a
                href="li"
                className="text-blue-500 underline hover:text-blue-900"
              >
                Li-2adcv SD sdASDasdcfmasd.,fams. c,as.,asc.,ascm.ascm.
              </a>
            </li>
          </ul>
        </aside>
        <main className="basis-3/4 bg-slate-200">
          <article>
            <h3 className="p-5 text-center text-lg uppercase text-blue-900">
              www
            </h3>
            <p className="p-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </article>
        </main>
      </div>
      <footer></footer>
    </section>
  );
}

export default App;
