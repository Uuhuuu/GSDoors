import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from "astro-boilerplate-components";

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 0H13V14H15V16H1V14H3V0ZM11 8C11 8.55229 10.5523 9 10 9C9.44772 9 9 8.55229 9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8Z"
                  fill="#ececf3ff"
                ></path>
              </g>
            </svg>
          }
          name="GSDoors"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/products/">Products</NavMenuItem>
        <NavMenuItem href="/">Facebook</NavMenuItem>
        <NavMenuItem href="/">Instagram</NavMenuItem>
        <NavMenuItem href="/contact/">Contact</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
