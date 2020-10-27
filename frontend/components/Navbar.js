import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a>
          <img
            src="/strapi.png"
            alt="home"
            className="logo"
            height="150"
            width="150"
          />
        </a>
      </Link>
      <button className="snipcart-checkout flex items-center">
        <img src="/cart.svg" alt="Cart" />
        <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
      </button>
    </div>
  );
};

export default Navbar;
