import React from "react";

const MySite = () => {


  const data = [
    {
      img: 'https://via.placeholder.com/550x550',
      alt: 'alt text',
      name: 'Product 1'
    },
    {
      img: 'https://via.placeholder.com/550x550',
      alt: 'alt text',
      name: 'Product 2'
    },
    {
      img: 'https://via.placeholder.com/550x550',
      alt: 'alt text',
      name: 'Product 3'
    },
    {
      img: 'https://via.placeholder.com/550x550',
      alt: 'alt text',
      name: 'Product 4'
    },
    // {
    //   img: 'https://via.placeholder.com/550x550',
    //   alt: 'alt text',
    //   name: 'My Site'
    // },
    // {
    //   img: 'https://via.placeholder.com/550x550',
    //   alt: 'alt text',
    //   name: 'My Site'
    // },
    // {
    //   img: 'https://via.placeholder.com/550x550',
    //   alt: 'alt text',
    //   name: 'My Site'
    // },
    // {
    //   img: 'https://via.placeholder.com/550x550',
    //   alt: 'alt text',
    //   name: 'My Site'
    // },
    // {
    //   img: 'https://via.placeholder.com/550x550',
    //   alt: 'alt text',
    //   name: 'My Site'
    // },
    // {
    //   img: 'https://via.placeholder.com/550x550',
    //   alt: 'alt text',
    //   name: 'My Site'
    // },
    // {
    //   img: 'https://via.placeholder.com/550x550',
    //   alt: 'alt text',
    //   name: 'My Site'
    // },
    // {
    //   img: 'https://via.placeholder.com/550x550',
    //   alt: 'alt text',
    //   name: 'My Site'
    // }
  ]

  const ListOfItem = data.map((element, index) => {
    return (
      <div className="column" key={index}>
        <img
          className="thumbnail"
          src={element.img}
          alt={element.alt}
        />
        <h5>{element.name}</h5>
      </div>
    )
  })



  return (
    <>
      <div className="row small-up-2 medium-up-3 large-up-4">
        {/* <div className="column">
          <img
            className="thumbnail"
            src="https://via.placeholder.com/550x550"
            alt="..."
          />
          <h5>My Site</h5>
        </div> */}

        {ListOfItem}

      </div>
    </>
  );
};

export default MySite;
