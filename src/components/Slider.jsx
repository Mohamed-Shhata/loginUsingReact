import React from "react";

function Slider(props) {
  const { count } = props;
  return (
    <div className="alert alert-secondary m-3 p-3">
      <h1>Hello from slider compnent</h1>
      <h2 className="text-danger">Count from sibling is:{count} </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ab
        recusandae. Minima commodi, mollitia delectus blanditiis, esse nisi
        optio tempora quidem ut, quis omnis quo tenetur nam. Illum blanditiis
        enim fuga laborum nihil alias aut amet quidem dolorem pariatur soluta
        ipsa non, voluptas animi dolor repudiandae nobis, voluptate maiores.
        Corrupti consequuntur quam tenetur itaque accusantium qui nihil iure,
        dolor labore laboriosam magni error nam vero necessitatibus! Quasi optio
        perspiciatis veritatis laboriosam asperiores, odit atque cum ab rem
        suscipit molestias fugiat ipsam minima laborum ratione doloremque
        voluptate aliquam blanditiis debitis incidunt saepe soluta commodi
        dignissimos fuga. Voluptatum ea veniam optio dicta itaque culpa magni at
        unde, in, assumenda quia corrupti repellendus molestiae modi mollitia
        architecto et exercitationem voluptatem ab aliquid? Porro voluptate iste
        est delectus nam qui atque quibusdam voluptas quia at magnam quis
        officiis accusantium nobis, possimus sunt eos laborum dolor quam
        facilis! Ex sapiente reprehenderit excepturi incidunt, in veritatis?
      </p>
    </div>
  );
}

export default Slider;
