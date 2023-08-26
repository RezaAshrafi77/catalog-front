import { MdChevronLeft, MdOutlineLocationOn } from "react-icons/md";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TbPhoneCall, TbBrandInstagram, TbInfoCircle } from "react-icons/tb";
import { Navbar, Button, Image } from "~/components";

export const About = ({ template }) => {
  const navigation = useNavigate();
  return (
    <div className="flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden px-[8vw] ">
      <Navbar
        classNames="!pt-8 text-white !px-0"
        leading={<div></div>}
        actions={[
          <Button
            icon={<MdChevronLeft size={"11vw"} />}
            events={{ onSubmit: () => navigation(-1) }}
            className="text-white"
          />,
        ]}
      />
      <h1 className="text-3xl font-bold text-indigo-200">
        {template?.about?.title}
      </h1>
      <ul className="flex flex-col w-full divide-y divide-white divide-opacity-20 my-[2vh]">
        {template?.about?.description ? (
          <li className="flex items-center gap-4 py-6">
            <TbInfoCircle size="2rem" color="#DFC10B" />
            <a
              href={`tel::${template?.cellNumber || "09360467907"}`}
              className="text-base !text-info-2-dark"
            >
              {template?.about?.description}
            </a>
          </li>
        ) : null}
        {template?.about?.cellphone ? (
          <li className="flex items-center gap-4 py-6">
            <TbPhoneCall size="2rem" color="#2A88F7" />
            <a
              href={`tel::${template?.cellNumber || "09360467907"}`}
              className="text-base !text-info-2-dark"
            >
              {template?.about?.cellphone}
            </a>
          </li>
        ) : null}
        {template?.about?.instagram ? (
          <li className="flex items-center gap-4 py-6">
            <TbBrandInstagram size="2rem" color="#F70068" />
            <a
              href={"https://instagram.com/" + template?.instagramID}
              target="_blank"
              className="text-base !text-info-2-dark"
            >
              {template?.about?.instagram}
            </a>
          </li>
        ) : null}
        <li className="flex items-center gap-4 py-6">
          <MdOutlineLocationOn size="2rem" color="red" />
          {template?.about?.address ? (
            <p className="text-base text-white flex-1 leading-6">
              {template?.about?.address}
            </p>
          ) : null}
        </li>
      </ul>
      {template?.about?.location || true ? (
        <a
          href="https://www.google.com/maps/@35.843,50.967,20z"
          target="_blank"
        >
          <Image
            src="https://api.neshan.org/v2/static?key=service.JK66CWU8gRCNgGhWAEuTM82fanbBPxBJgpfrp1Lk&type=standard-day&zoom=16&center=35.81885847755913,50.82371167275139&width=100&height=100&marker=red"
            classNames={"w-full h-[80vw] rounded-3xl"}
          />
        </a>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
