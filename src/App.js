import './App.css';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>markdown previewer</h1>
      </header>
      <main className='main'>
        <textarea className='area' name="area-markdown" id="area-markdown" cols="30" rows="10"></textarea>
        <section className='previewer'>
          <h2 className='previewer__title'>Previewer</h2>
          <p>previewing markdown</p>
        </section>
      </main>

    </div>
  );
}

export default App;
