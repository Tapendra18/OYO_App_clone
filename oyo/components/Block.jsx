import Image from "next/image";

const Block = ({ title, para, svg }) => {
  return (
    <div className="border-r border-gray-300 w-60 h-full flex items-center px-3">
      <div style={{ paddingRight: "10px" }}>{svg}</div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p
          data-tooltip-target="tooltip-top"
          data-tooltip-placement="top"
          className="text-gray-400 text-sm line-clamp-1"
        >
          {para}
        </p>
      </div>
    </div>
  );
};

export default Block;
