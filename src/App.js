import { useState } from 'react';
import './App.css';
import { marked } from 'marked';
import { mangle } from 'marked-mangle';

function App() {
  const defaultValueArea = '# Prévisualisateur de markdown\n### Oh ! De la magie !\nEn réalité, pas vraiment : ceci s\'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !\n\n### Cas d\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n* [GitHub Simon Honoré](https://github.com/Simon-Honore)';
  const [valueArea, setValueArea] = useState(defaultValueArea);

  const handleChange = (e) => {
    setValueArea(e.target.value);
  };

  // marked
  marked.use(mangle());
  marked.use({
    headerIds: false
  });

  const markdownPreview = marked.parse(valueArea);

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
        <code className='previewer' dangerouslySetInnerHTML={{__html: markdownPreview}} ></code>
      </main>

    </div>
  );
}

export default App;
