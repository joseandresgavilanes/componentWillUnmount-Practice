import React from "react";
class ComponentOne extends React.Component {
  componentWillUnmount() {
    alert("The component is going to be unmounted");
  }

  render() {
    return <h1>I'm gonna be unmounted</h1>;
  }
}

class App extends React.Component {
  state = { display: true };
  delete = () => {
    this.setState({ display: false });
  };

  render() {
    let comp;
    if (this.state.display) {
      comp = <ComponentOne />;
    }
    return (
      <div>
        {comp}
        <button onClick={this.delete}>Delete the component</button>
      </div>
    );
  }
}

export default App;
