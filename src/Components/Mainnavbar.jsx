import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa"; // Importing Font Awesome icons
import { Link } from "react-router-dom"; // Import React Router's Link

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
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
      <p className="font text-inherit">@CODE BY RAJAS</p>
          </Link>

      </NavbarBrand>

      {/* Navbar Links */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link to="/resume" style={{ color: "white", textDecoration: "none" }}>
            RESUME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            to="/certifications"
            style={{ color: "grey", textDecoration: "none" }}
          >
            CERTIFICATIONS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/projects" style={{ color: "white", textDecoration: "none" }}>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <a
            href="https://www.linkedin.com/in/rajas-bhosale-44773a258"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <FaLinkedin size={35} />
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href="https://github.com/Rajas2912"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <FaGithub size={35} />
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href="https://leetcode.com/u/RajasBhosale/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <FaCode size={35} />
          </a>
        </NavbarItem>
      </NavbarContent>

      {/* Social Links */}
      <NavbarContent justify="end" style={{ gap: "10px" }}>
        <NavbarItem>
          <Button
            as={Link}
            to="/resume"
            color="default"
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
