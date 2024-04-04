import Image from "next/image";
import React from "react";
import DrawerItems from "./DrawerItems";
import FooterDrawer from "./FooterDrawer";

const Modal = (props: { closeModal: any; fordesktop: Boolean }) => {
  const userName = "User";
  return (
    <div
      className="bg-gray-50 text-slate-950 font-seminbold px-4 py-2 text-xs"
      style={{
        zIndex: 9999,
        position: props.fordesktop ? "static" : "fixed",
        top: 0,
        left: 0,
        width: "240px",
        height: "100%",
      }}
    >
      <div
        className="flex h-full flex-col justify-between"
        style={{
          minHeight: "700px",
        }}
      >
        {/* <button
          onClick={props.closeModal}
          className="bg-slate-600 text-slate-50"
          style={{
            position: "fixed",
            zIndex: 399,
            //   rotate: "90deg",
            left: "240px",
            top: "30%",
            height: "120px",
            // width: "22px",
          }}
        >
          <Image
            src="/Arrowback.svg"
            alt="openModal"
            width={500}
            height={500}
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        </button> */}

        <div>
          {/* <h2 onClick={props.closeModal}>Close Modal</h2> */}

          <div className="flex justify-between items-center py-2 border-b">
            <div className="flex items-center">
              <Image
                src="/idea-bulb.svg"
                alt="logo"
                width={500}
                height={500}
                style={{
                  width: "35px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "12px",
                }}
              />
              <div>
                <h4 className="text-xs font-semibold text-zinc-400">INC</h4>
                <h2 className="text-sm font-semibold">InnovateHub</h2>
              </div>
            </div>

            <div className="text-slate-50 ">
              <Image
                src="/people-8.jpg"
                alt="userImg"
                width={500}
                height={500}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>

          <div className="mt-2" style={{}}>
            <DrawerItems />
          </div>
        </div>

        <div
          className="bg-slate-50"
          style={{
            marginTop: "80px",
          }}
        >
          <FooterDrawer />
        </div>
      </div>
    </div>
  );
};

export default Modal;
