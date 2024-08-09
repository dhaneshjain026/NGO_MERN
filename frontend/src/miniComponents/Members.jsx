import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Akku",
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "Dhanesh",
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "Ram",
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "Revanth",
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Sneha",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Nithin",
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "Vishnu",
    },
  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEMBERS</h2>
            <p>
            Our NGO is driven by a diverse and passionate team, united by a shared goal of creating lasting positive change in our communities. 
            Our members bring unique skills and perspectives from various backgrounds, each playing a crucial role in our mission. 
            Their commitment and collaborative spirit empower us to tackle challenges and make a meaningful impact, 
            forming a strong network dedicated to making a difference.
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;