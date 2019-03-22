import React from "react";

class AddLilliansColoring extends React.Component {
  imageRef = React.createRef();
  nameRef = React.createRef();

  createToy = event => {
    event.preventDefault();

    const toyAnimal = {
      image: this.imageRef.current.value
    };
    this.props.addColoringPages(toyAnimal);
    //refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="coloring-edit" onSubmit={this.createToy}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="name of Your Kid"
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Email a Photo of Your Kids Coloring Page"
        />
        <button type="submit">+ Add Your Kids Coloring Page</button>
      </form>
    );
  }
}
export default AddLilliansColoring;

// nameRef = React.createRef();
// imageRef = React.createRef();

// createToy = event => {
//   event.preventDefault();
//   const toy = {
//     name: this.nameRef.current.value,
//     image: this.imageRef.current.value
//   };
//   // this.props.addToyAnimal(toy);
// };
// ----Z
// <input
// name="name"
// ref={this.nameRef}
// type="text"
// placeholder="Name of Your Kids Fav Toy Animal"
// />
// <input
// name="image"
// ref={this.imageRef}
// type="text"
// placeholder="Photo of Your Kids fav toy animal"
// />
// <button type="submit">
// + Add Your Kids Fav Toy Animal Name and Photo
// </button>

// nameRef = React.createRef();
// imageRef = React.createRef();

// createToy = event => {
//   event.preventDefault();
//   const toy = {
//     name: this.nameRef.current.value,
//     image: this.imageRef.current.value
//   };
//   this.props.addToyAnimal(toy);
// };

// <input
//           name="name"
//           ref={this.nameRef}
//           type="text"
//           placeholder="Toy Animal Name"
//         />
//         <input
//           name="image"
//           ref={this.imageRef}
//           type="text"
//           placeholder="Toy Animal Image"
//         />
//         <button type="submit">+ Add Toy Animal 🐻</button>
//       </form>
// import React from "react";

// class AddKidsToyNameForm extends React.Component {
//   nameRef = React.createRef();
//   imageRef = React.createRef();

//   createKidsName = event => {
//     // 1.  stop the form from submitting
//     event.preventDefault();
//     console.log(this.nameRef.current.value);

//     const toyAnimal = {
//       name: this.nameRef.current.value,
//       image: this.imageRef.current.value
//     };
//     // this.props.addToyAnimal(toyAnimal);
//     // refresh the form
//     event.currentTarget.reset();
//   };

//   render() {
//     return (
//       <form className="fish-edit" onSubmit={this.createKidsName}>
//         <input
//           name="name"
//           ref={this.nameRef}
//           type="text"
//           placeholder="Name of Your Kids Fav Toy Animal"
//         />
//         <input
//           name="image"
//           ref={this.imageRef}
//           type="text"
//           placeholder="Photo of Your Kids fav toy animal"
//         />
//         <button type="submit">+ Add Your Kids Fav Toy Animal Name</button>
//       </form>
//     );
//   }
// }

// export default AddKidsToyNameForm;

// // What if I do it all on the pagr?

// // story todays obstacle , wait with it
// // it works now
