import Image from "next/image";
import Link from "next/link";

const Hotel = () => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-72 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww"
          }
          alt="Hotel"
          width={200}
          height={200}
          className="h-large-box mr-3"
          style={{
            width: "200px",
          }}
        />
        <div className="grid grid-rows-3 gap-3">
          <Image
            src={
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww"
            }
            alt="Hotel"
            width={200}
            height={200}
            className=" mr-3"
            style={{
              width: "55px",
            }}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww"
            }
            alt="Hotel"
            width={200}
            height={200}
            className=" mr-3"
            style={{
              width: "55px",
            }}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww"
            }
            alt="Hotel"
            width={200}
            height={200}
            className=" mr-3"
            style={{
              width: "55px",
            }}
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww"
            }
            alt="Hotel"
            width={200}
            height={200}
            className=" mr-3"
            style={{
              width: "55px",
            }}
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl line-clamp-1 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
            commodi.
          </h2>
          <p className="text-justify my-5 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            perspiciatis, libero quidem hic corporis id eos voluptatem natus
            nihil minima?
          </p>
          <p className="text-2xl my-5">
            <span className="font-bold text-md">facilities :- </span>
            <span className="text-lg">
              Free wifi , Pet care , Swimming Pool , Beaches , Resort
            </span>
          </p>
          <div className="flex items-end gap-2">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
              {" "}
              Price : 4500
            </button>
            <Link href={"/hotels/2"} className="text-xl font-bold text-red-600">
              see Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
