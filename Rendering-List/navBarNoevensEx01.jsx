// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar({ menuitems }) {
  const { Button } = ReactBootstrap;
  const updatedList = menuitems.filter((listItems, index) => {
    return <li 


    key={index.toString()}>{listItems}</li>;
  }); 
  const evens = menuitems.filter(function(x)) {
    if (x % 2 === 0){
      return x;
    }
  }
  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);

