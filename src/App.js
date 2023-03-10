import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';

const filters = ['all', 'active', 'completed'];
function App() {

  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
     <Header 
      filters={filters} 
      filter={filter} 
      // onFilterChange={(filter) => setFilter(filter)}/>
      onFilterChange={setFilter}/>
     <TodoList filter={filter}/>
    </>
  );
}

export default App;
