import './App.css';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>markdown previewer</h1>
      </header>
      <main className='main'>
        <textarea className='area' name="area-markdown" id="area-markdown" cols="30" rows="10">
				# Prévisualisateur - Believemy
				### Oh ! De la magie !
				En réalité, pas vraiment : ceci s'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !
				### Cas d'utilisation
				- *italique* 
				- **gras**
				- `monospace`
				- ~~barré~~
				- # h1
				- ## h2
				- ### h3
				- #### etc
				[Believemy](https://believemy.com)
        </textarea>
        <code className='previewer'></code>
      </main>

    </div>
  );
}

export default App;
