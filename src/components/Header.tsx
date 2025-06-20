import Link from "next/link";
import { memo } from "react";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import ActiveInactiveLink from "./ActiveInactiveLink";

interface HomeNavI {
  nav_label: string;
  nav_link: string;
  id: number;
}

const josefinSans = Josefin_Sans({
  weight: ["200", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const HeaderComponent: React.FC = () => {
  const navLinkData: Array<HomeNavI> = [
    {
      id: 1,
      nav_label: "Home",
      nav_link: "/",
    },
    {
      id: 2,
      nav_label: "About Me",
      nav_link: "/my-details",
    },
    {
      id: 3,
      nav_label: "Services",
      nav_link: "/services",
    },
    {
      id: 4,
      nav_label: "Pricing",
      nav_link: "/pricing",
    },
    {
      id: 5,
      nav_label: "Testimonials",
      nav_link: "/testimonials",
    },
    {
      id: 6,
      nav_label: "Contact",
      nav_link: "/contact",
    },
  ];
  return (
    <header
      className={`${josefinSans.className} header sticky top-0 shadow-md flex items-center justify-between px-8 py-02 z-15 bg-gray-900`}
    >
      <h1 className="w-3/12">
        <Link href="/" className="block relative animate__animated animate__fadeInDown">
          <Image
            alt="profile image"
            src="/assets/images/ai-image1.jpeg"
            width={30}
            height={30}
            className="rounded-full object-none object-[59%]"
          />
        </Link>
      </h1>

      <nav className="nav text-lg text-gray-400">
        <ul className="flex items-center">
          {navLinkData.map(({ id, nav_label, nav_link }) => (
            <li
              key={id}
              className={`animate__delay-0.8s p-4 border-opacity-0 hover:border-opacity-100 hover:text-orange-400 duration-200 cursor-pointer animate__animated animate__fadeInDown`}
            >
              <ActiveInactiveLink nav_label={nav_label} nav_link={nav_link} />
            </li>
          ))}
        </ul>
      </nav>
    </header>

    // <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    //   <Image
    //     alt=""
    //     src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    //     className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
    //     width={30}
    //     height={30}
    //   />
    //   <div
    //     aria-hidden="true"
    //     className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
    //   >
    //     <div
    //       style={{
    //         clipPath:
    //           'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    //       }}
    //       className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
    //     />
    //   </div>
    //   <div
    //     aria-hidden="true"
    //     className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
    //   >
    //     <div
    //       style={{
    //         clipPath:
    //           'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    //       }}
    //       className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
    //     />
    //   </div>
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto max-w-2xl lg:mx-0">
    //       <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Work with us</h2>
    //       <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
    //         Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
    //         fugiat veniam occaecat fugiat.
    //       </p>
    //     </div>
    //     <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
    //       <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
    //         Link
    //       </div>
    //       <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
    //         Menu
    //       </dl>
    //     </div>
    //   </div>
    // </div>
  );
};

export default memo(HeaderComponent);
