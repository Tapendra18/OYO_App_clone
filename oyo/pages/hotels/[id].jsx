import Image from "next/image";

const SingleHotel = () => {
  return (
    <div className="m-5">
      <Image
        src={
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww"
        }
        alt="hotel"
        width={2000}
        height={2000}
        className="w-7/12 h-large-box my-5 mx-auto"
        style={{
          height: "400px",
        }}
      />
      <div className="w-7/12 mx-auto">
        <h3 className="text-3xl font-bold ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          officiis.
        </h3>
        <p className="text-xl my-5 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, eveniet
          fugiat! Ducimus asperiores dolor nihil facilis commodi eligendi!
          Tenetur iusto recusandae voluptates dolorum in eius, nostrum ratione
          optio distinctio. Maiores, accusamus quis? Numquam quas sunt fugiat
          dolorem ex, pariatur nam modi quis doloribus tempora expedita ratione
          dolor illum. Molestias, voluptatibus.
        </p>
        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
          {" "}
          Price : 4500
        </button>
        <p className="text-3xl font-bold my-5">facilities :</p>
        <ul className="flex text-xl justify-between my-5">
          <li>Swimming Pool</li>
          <li>Dogs</li>
          <li>garden</li>
          <li>Loundry</li>
          <li>Cricket</li>
        </ul>
        <button className="w-60 h-14 rounded-lg bg-red-400 text-lg">
          {" "}
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleHotel;
