"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@heroui/react";

import PrimaryButton from "../Buttons/PrimaryButton";
import LinkButton from "../Buttons/LinkButton";

import Logo from "./Logo";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      className="py-2 shadow-md"
      isMenuOpen={isMenuOpen}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden md:flex gap-8" justify="start">
        <NavbarItem>
          <LinkButton href="/integrations">Integrations</LinkButton>
        </NavbarItem>
        <NavbarItem>
          <LinkButton href="/solutions">Solutions</LinkButton>
        </NavbarItem>
        <NavbarItem>
          <LinkButton href="/pricing">Pricing</LinkButton>
        </NavbarItem>
        <NavbarItem>
          <LinkButton href="/resources">Resources</LinkButton>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop Action Buttons */}
      <NavbarContent className="hidden md:flex gap-6" justify="end">
        <NavbarItem>
          <LinkButton href="/demo">Book a Demo</LinkButton>
        </NavbarItem>
        <NavbarItem>
          <PrimaryButton as={Link} color="primary" href="/login">
            Login
          </PrimaryButton>
        </NavbarItem>
        <NavbarItem>
          <PrimaryButton
            as={Link}
            color="primary"
            href="/signup"
            variant="bordered"
          >
            Try it free
          </PrimaryButton>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile Navigation Menu */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full py-2" href="/integrations">
            Integrations
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full py-2" href="/solutions">
            Solutions
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full py-2" href="/pricing">
            Pricing
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full py-2" href="/resources">
            Resources
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full py-2" href="/demo">
            Book a Demo
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="mt-2">
          <Button as={Link} className="w-full" color="primary" href="/login">
            Login
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mt-2">
          <Button
            as={Link}
            className="w-full"
            color="primary"
            href="/signup"
            variant="bordered"
          >
            Try it free
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
