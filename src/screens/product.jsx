import React from "react";
import { connect } from "react-redux";
import { Button, Navbar } from "../components";
import { MdChevronLeft } from "react-icons/md";

export const Product = ({ part }) => {
  return (
    <div className="relative flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden">
      <Navbar
        classNames="!px-0"
        leading={<div></div>}
        actions={[
          <Button
            icon={
              <MdChevronLeft
                size="2rem"
                color="#cccccc"
                className="!text-textColor"
              />
            }
            events={{ onSubmit: () => setFilterToggle(false) }}
          />,
        ]}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);