import { MdChevronLeft, MdOutlineLocationOn } from "react-icons/md";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  TbPhoneCall,
  TbBrandInstagram,
  TbInfoCircle,
  TbBrandTelegram,
} from "react-icons/tb";
import { Navbar, Button, Image } from "~/components";
import { baseUrl } from "../config";

export const About = ({ template }) => {
  const navigation = useNavigate();
  const location = template?.about?.location?.split(",");
  return (
    <div className="flex flex-1 flex-col max-w-full max-h-full h-full overflow-hidden">
      <Navbar
        leading={<div></div>}
        actions={[
          <Button
            icon={<MdChevronLeft size={"11vw"} />}
            events={{ onSubmit: () => navigation(-1) }}
            className="text-white"
          />,
        ]}
        classNames="bg-black bg-opacity-80"
      />
      <Image
        src={baseUrl + "/files/" + template?.backgroundFileId?._id}
        classNames="fixed top-0 left-0 w-full h-full !object-cover"
        loading="lazy"
      />
      <div className="z-10 flex-1 bg-black bg-opacity-80 flex flex-col overflow-y-scroll px-[8vw] pt-6 pb-[10vh]">
        <h1 className="text-2xl font-bold text-white">
          {template?.about?.title}
        </h1>
        <ul className="flex flex-col w-full divide-y divide-white divide-opacity-20 my-[4vh]">
          {template?.about?.cellphone ? (
            <li className="flex items-center gap-4 py-3">
              <TbPhoneCall size="2rem" className="text-green-600" />
              <a
                href={`tel:${template?.cellNumber || "09360467907"}`}
                className="text-base text-green-600 underline"
              >
                {template?.about?.cellphone}
              </a>
            </li>
          ) : null}
          {template?.about?.instagram ? (
            <li className="flex items-center gap-4 py-5">
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
          {template?.about?.telegram ? (
            <li className="flex items-center gap-4 py-5">
              <TbBrandTelegram size="2rem" color="#2A88F7" />
              <a
                href={"https://telegram.com/" + template?.about?.telegram}
                target="_blank"
                className="text-base text-[#2A88F7] underline"
              >
                {template?.about?.telegram + "@"}
              </a>
            </li>
          ) : null}
          <li className="flex items-start gap-4 py-5">
            <MdOutlineLocationOn size="2rem" color="red" />
            {template?.about?.address ? (
              <p className="text-sm text-orange-400 flex-1 leading-6">
                {template?.about?.address}
              </p>
            ) : null}
          </li>
        </ul>
        {template?.about?.location ? (
          <a
            href={`https://neshan.org/maps/@${location[0]},${location[1]},15.0z,0.0p/search/${location[0]},${location[1]}`}
            target="_blank"
          >
            <Image
              src={`https://api.neshan.org/v2/static?key=service.JK66CWU8gRCNgGhWAEuTM82fanbBPxBJgpfrp1Lk&type=standard-day&zoom=16&center=${location[0]},${location[1]}&width=100&height=100&marker=red`}
              classNames={"w-full h-[80vw] rounded-3xl"}
            />
          </a>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template.template,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
