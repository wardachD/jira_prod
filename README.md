# Klon JIRA - Projekt na Uniwersytet

## Opis projektu

Projekt ten jest frontendowym klonem popularnego narzędzia do zarządzania projektami JIRA, stworzonym jako część kursu na uniwersytecie. Aplikacja pozwala na zarządzanie projektami, zespołami oraz zadaniami w sposób zbliżony do oryginalnego oprogramowania JIRA. 

Strona demo projektu jest dostępna pod adresem: 
- [Demo](https://jira-prod.vercel.app/) - Strona główna
- [login](https://jira-prod.vercel.app/login) - Strona logowania do aplikacji.
- [pulpit](https://jira-prod.vercel.app/pulpit) - Główny pulpit.
- [pulpit/default](https://jira-prod.vercel.app/pulpit/default/) - Domyślny widok pulpitu.
- [projekty](https://jira-prod.vercel.app/projekty) - Strona wyświetlająca listę wszystkich projektów.
- [projekty/przegladaj](https://jira-prod.vercel.app/projekty/przegladaj) - Widok przeglądania projektów.
- [projekty/ProjectView#](https://jira-prod.vercel.app/projekty/ProjectView#) - Szczegółowy widok wybranego projektu.
- [zespoly](https://jira-prod.vercel.app/zespoly) - Strona zarządzania zespołami.


## Wymagania

Aby uruchomić projekt lokalnie, należy zainstalować poniższe zależności przy użyciu npm:

```bash
npm install react-router-dom react-bootstrap bootstrap react-toggle multiselect-react-dropdown @mui/x-data-grid @mui/material @emotion/react @emotion/styled react-bootstrap-icons --save
```

## Uruchamianie aplikacji

### Sklonuj repozytorium na swój lokalny komputer:

```bash
git clone https://github.com/wardachD/jira_prod.git
```

### Przejdź do katalogu projektu:

```bashx
cd your-repo-name
```

### Zainstaluj zależności:

```bash
npm install
```

### Uruchom aplikację:

```bash
npm start
```

### Aplikacja będzie dostępnaa pod adresem http://localhost:3000.

