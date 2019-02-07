import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1.  Stop the form from submitting
    event.preventDefault();
    // 2.  Get the text from the input
    const storeName = this.myInput.current.value;
    console.log(storeName);
    // 3.  Change the page to /store/whatever-they-want
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    // console.log(this);
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store </button>
      </form>
    );
  }
}

export default StorePicker;
