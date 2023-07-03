import { useState } from 'react';
import './App.css';

function App() {
  // const defaultValueArea = '# `Prévisualisateur - Believemy`\n### Oh ! De la magie !\nEn réalité, pas vraiment : ceci s\'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !\n\n### Cas d\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n[Believemy](https://believemy.com)';
  const [valueArea, setValueArea] = useState("");

  const handleChange = (e) => {
    setValueArea(e.target.value);
  };

  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>markdown previewer</h1>
      </header>
      <main className='main'>
        <textarea 
          className='area' 
          name="area-markdown" 
          id="area-markdown" 
          // defaultValue={defaultValueArea}
          value={valueArea}
          onChange={handleChange}
        />
        <code className='previewer'></code>
      </main>

    </div>
  );
}

export default App;
