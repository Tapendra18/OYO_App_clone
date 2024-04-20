"use client";

const Header2 = () => {
  const List = [
    {
      name: "Banglore",
    },
    {
      name: "Delhi",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Jaipur",
    },
    {
      name: "Ahmdabad",
    },
  ];

  return (
    <div className="flex px-10 bg-gray-100 justify-between">
      {List?.map((e) => {
        return <span key={e?.name}>{e?.name}</span>;
      })}
    </div>
  );
};

export default Header2;
