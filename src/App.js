import './App.css';
import {compose} from 'redux'
import {Main} from './components/Main'
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Links from './components/Links';
import { useTranslation, withTranslation } from 'react-i18next';
function App() {
  const {t, i18n} = useTranslation()
  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
    const dropdown = document.getElementById('dropdown')
    if (dropdown.classList.contains('hidden')){
      dropdown.classList.remove('hidden')
    } else{
      dropdown.classList.add('hidden')
    }
  }

  return (
    <div className="App dark:bg-div min-h-screen">
      <Navbar changeLang={changeLang} t={t}/>
      <Routes>
        <Route path='/' element={<Main t={t}/>}/>
        <Route path='/projects' element={<Projects t={t}/>}/>
        <Route path='/links' element={<Links t={t}/>}/>
      </Routes>
    </div>
  );
}
const enhance = compose(withTranslation())
export default (enhance(App));
