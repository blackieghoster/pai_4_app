## React + Tailwind + Express

Teraz zobaczymy jak utworzyć aplikację łączącą zarówno frontend i backend.

```mermaid
flowchart TD
 App(Hello App\nReact) -- Rest --> API(API\nexpressjs)
```

1. Utwórz repozytorium `pai_4_app` na githubie, będziemy tam umieszczać naszą aplikację:

   ```bash

   # wroc do katalogu domowego
   cd

   # workspace
   cd workspace

   # clone!
   git clone https://... /pai_4_app.git
   cd pai_4_app
   ```

2. Zanim przejdziemy dalej, omówmy jak będzie wyglądało nasze repozytorium:

   ```
   |- client/
   |   \- ... # react app
   \- server/
       \- ... # express app
   ```

3. Wygenerujmy kod dla react app:

   ```bash
   npx create-react-app client

   # podążając za wskazówkami
   ```

   ```bash
   # sprawdzmy czy wszystko dziala
   cd client
   npm start
   ```

4. Wróćmy do głównego katalogu naszego projektu:

   ```bash
   cd ..
   ```

5. Skorzystamy z generatora do utworzenia szkieletu naszej aplikacji:

   ```bash
   npx express-generator server

   # podążając za wskazówkami
   npm install
   ```

6. Zmień funkcję `get` w routerze zdefiniowanym w `routes/index.js` na:

   ```javascript
   // ... powyżej będą importy
   router.get('/api', function(req, res, next) {
     res.setHeader('Content-Type', 'application/json');
     res.status(200)

     res.json({
       'name': 'Natalia',
       'msg': 'hello!'
     });
   });

   // poniżej eksport
   ```

   Możesz również wykasować `views/index.jade`, nie będzie nam potrzebny.

7. Przetestuj czy działa:

   ```bash
   PORT=3001 npm start
   ```

   ```bash
   curl '127.0.0.1:3001/api'

    # wynik
    {"name": "Natalia"... }
   ```

8. Teraz naszym zadaniem, będzie zaimplementowanie komunikacji między aplikacją reacta, a serwerem.

9. Aby każdy z requestów z frontendu szedł do naszego backendu:

    ```json
    // client/package.json

    "proxy": "http://localhost:3001",
    ```

10. Wystartujmy kod clienta w osobnej zakładce w terminalu:


    ```bash
    cd ../client
    npm start
    ```

11. Pobierzmy wiadomość hello world z backendu:

    ```js
    import React, { useState, useEffect } from 'react';
    import logo from './logo.svg';
    import './App.css';
 
    function App() {
      const [data, setData] = useState(null);
 
      useEffect(() => {
        fetch("/api")
          .then((res) => res.json())
          .then((data) => setData(data.msg));
      }, []);
 
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{data}</p>
          </header>
        </div>
      );
    }
    export default App;
    ```
   <!-- https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/ -->

12. Dodaj [Tailwindcss](https://tailwindcss.com/docs/guides/create-react-app) do klienta.

## Następne kroki

- Javascript -> Typescript: ([express & TS](https://blog.logrocket.com/how-to-set-up-node-typescript-express/));
- [VITE](https://vitejs.dev).
