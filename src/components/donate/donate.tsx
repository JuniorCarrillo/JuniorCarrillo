import env from "../../environments";

export default function Donate() {
  return (
    <a href={env.REACT_APP_WEBSITE_DOMAIN} className="mt-6 mb-6 bg-white rounded-3xl p-8 flex flex-col justify-between items-center gap-4">
      <img className="h-16" src="https://cdn.buymeacoffee.com/assets/img/home-page-v3/bmc-new-logo.png" alt="" />
    </a>
  );
}
