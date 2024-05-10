import Cards from './components/Cards';
function App() {
  const colours=["yellow","green","red","white","black","pink","yellow","green","red","white","black","pink","orange","orange","violet","violet"];

  const greycolour=[];
  greyassign();
  function greyassign(){
    while(greycolour.length<colours.length){
      greycolour.push("#C8E571");
    }
  }

  
  return (
    <div className="maincontainer">
      <Cards colours={colours} greycolour={greycolour} className="w-full h-full"></Cards>
    </div>
  );
}

export default App;
