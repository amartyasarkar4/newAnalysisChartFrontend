"use client";
import React, { useState } from "react";
import DisscussionMain from "./disscussionMain";

import Drawer from "../drawer";
import Image from "next/image";
import Modal from "../drawer/Modal";

const MainPage = () => {
  const [openedDrawer, setOpenedDrawer] = useState(true);

  const [activeDisscuss, seTactiveDisscuss] = useState(true);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {openedDrawer ? null : (
        <button
          onClick={() => setOpenedDrawer(!openedDrawer)}
          className="bg-slate-700 text-slate-50"
          style={{
            position: "fixed",
            zIndex: 399,
            //   rotate: "90deg",
            left: "0px",
            top: "300px",
            height: "120px",
            // width: "22px",
          }}
        >
          <Image
            src="/Arrowforward.svg"
            alt="openModal"
            width={500}
            height={500}
            style={{
              width: "26px",
              height: "26px",
            }}
          />
        </button>
      )}

      {openedDrawer ? (
        <div className="block md:hidden">
          {/* <h3>Hello Drawer</h3> */}
          <Drawer closeDrawer={() => setOpenedDrawer(!openedDrawer)} />
        </div>
      ) : null}

      <div className="flex relative flex-row ">
        {openedDrawer ? (
          <div
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              zIndex: 9999,
            }}
            className="hidden bg-cyan-400 md:block"
          >
            <Modal
              closeModal={() => setOpenedDrawer(!openedDrawer)}
              fordesktop={true}
            />
            {/* <h3>hjgjh</h3> */}
          </div>
        ) : null}

        <div
          className="ml-0 md:ml-60 px-1 py-1 sm:px-5 sm:py-5"
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <DisscussionMain />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
