import Image from "next/image";
import React from "react";

const FooterDrawer = () => {
  return (
    <div className="font-semibold">
      <div className="flex mb-2 ml-2">
        <Image
          src="/add-user.svg"
          alt="addfriend"
          width={500}
          height={500}
          style={{
            width: "14px",
            height: "14px",
            marginRight: "4px",
          }}
        />
        <p>Invite teammates</p>
      </div>
      <div className="flex mb-2 ml-2">
        <Image
          src="/help-circle.svg"
          alt="help-circle"
          width={500}
          height={500}
          style={{
            width: "14px",
            height: "14px",
            marginRight: "4px",
          }}
        />
        <p>Help and first steps</p>
      </div>
      <div
        className="flex justify-between w-52 h-6 items-center rounded border bg-zinc-100"
        style={{
          fontSize: "10px",
          fontWeight: "bolder",
          marginBottom: "30px",
        }}
      >
        <div className="flex ml-2">
          <div className="flex px-1 py-0 mr-1 bg-slate-50 rounded items-center justify-center">
            <p className=" text-slate-950 ">{7}</p>
          </div>
          <p style={{ paddingTop: "2px" }}>days left on trial</p>
        </div>

        <div className="flex px-1 py-0 mr-1 bg-zinc-950 rounded items-center justify-center">
          <p className=" text-slate-50 ">Add billing</p>
        </div>
      </div>
    </div>
  );
};

export default FooterDrawer;
