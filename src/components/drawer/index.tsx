import React from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Drawer = (props: { closeDrawer: any }) => {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <div>
        <Backdrop closeModal={props.closeDrawer} />
      </div>
      <div>
        <Modal closeModal={props.closeDrawer} fordesktop={false} />
      </div>
    </div>
  );
};

export default Drawer;
