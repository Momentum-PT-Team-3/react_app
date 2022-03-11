import Todo from './components/Todo'


function App() {
  //only jsx content returned by the function will render
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='learn' /> 
      <Todo text='master' /> 
      <Todo text='explore' /> 

    </div>
  ); //jsx code- html code within js file
}

export default App;
