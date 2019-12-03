import React, {Component} from 'react';
import image from '../img/bike.png';
import {ItemCard} from "./ItemCard";
import {Footer} from "./Footer";
import {Nav} from "./Nav";
import {Jumbtron} from "./Jumbtron";
import {AddItem} from "./AddItem";

class App extends Component {
  state = {
    name: "",
    price: "",
    items: [
      {
        id: 1,
        name: "pulsar 220",
        price: "95000"
      },
      {
        id: 2,
        name: "yamaha r15",
        price: "165000"
      },
      {
        id: 3,
        name: "bullet",
        price: "150000"
      },
      {
        id: 4,
        name: "pulsar 135",
        price: "85000"
      }
    ]
  };

  /**
   * Handle input changes in the AddItem component.
   * @param event
   */
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  /**
   * Add an item to state.
   * @param event
   */
  addItem = event => {
    event.preventDefault();
    const {name, price} = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? (itemsInState[itemsArrayLength - 1].id + 1) : 1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign({}, {
          id,
          name,
          price
        })
      ],
      name: "",
      price: ""
    })
  };

  /**
   * Toggle the isEditing property of an item when the Edit button
   * within ItemCard is clicked.
   * @param index
   */
  toggleItemEditing = index => {
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            isEditing: !item.isEditing
          }
        }
        return item;
      })
    });
  };

  /**
   * Update the Name and/or Price of an item.
   * @param event
   * @param index
   */
  handleItemUpdate = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            [name]: value
          }
        }
        return item;
      })
    });
  };
  deleteItem = index => {
    items1: this.state.items.splice(index,1)
    this.setState({
      items: this.state.items
    });
  };

  render() {
    const {name, price} = this.state;
    return <div>
      <Nav/>

      <Jumbtron/>

      <div className="container pt-4">

        <AddItem
            name={name}
            price={price}
            updateItem={this.handleInputChange}
            onSubmit={this.addItem}
        />

        <h1 className="display-4 my-4 text-center text-muted">Items</h1>

        <div className="row">
          {
            this.state.items.map((item, index) =>
                <ItemCard
                    key={item.id}
                    index={index}
                    image={image}
                    item={item}
                    toggleEditing={() => this.toggleItemEditing(index)}
                    onChange={this.handleItemUpdate}
                    onDelete={() =>this.deleteItem(index)}
                />
            )
          }
        </div>

        <hr/>
        <Footer/>
      </div>
    </div>;
  }
}

export default App;
