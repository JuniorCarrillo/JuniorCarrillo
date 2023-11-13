import env from "../../env";
import SocialCounter from "../social-counter";

export default function Footer() {
  return (
    <div className="mt-6">
      <SocialCounter />
      <div className="w-full p-4 gap-2 flex justify-center items-center bg-brand-dark">
        <div className="">
          <strong className="text-gray-300 hover:text-brand-accent transition duration-300 delay-75 cursor-pointer">{env.REACT_APP_WEBSITE_NAME}</strong> &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
