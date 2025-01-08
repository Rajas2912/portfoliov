import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa"; // Importing Font Awesome icons

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Mainnavbar() {
  return (
    <Navbar shouldHideOnScroll style={{ backgroundColor: "black" }}>
      {/* Navbar Brand */}
      <NavbarBrand style={{ color: "white" }}>
        <p className="font text-inherit">@Code by Rajas</p>
      </NavbarBrand>

      {/* Navbar Links */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" style={{ color: "white" }}>
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" style={{ color: "white" }}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#" style={{ color: "grey" }}>
            Certifications
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" style={{ color: "white" }}>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://www.linkedin.com/in/rajas-bhosale-44773a258"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaLinkedin size={35} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://github.com/Rajas2912"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaGithub size={35} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://leetcode.com/u/RajasBhosale/"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaCode size={35} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Social Links */}
      <NavbarContent justify="end" style={{ gap: "10px" }}>

        <NavbarItem>
          <Button
            as={Link}
            color="default"
            href="#"
            variant="flat"
            style={{ color: "white" }}
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
