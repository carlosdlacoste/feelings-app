import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import UploadLogo from "./uploadLogo";

const NavBar = () =>{
    return(
        <>
            <Navbar isBordered className="bg-slate-500">
                <NavbarBrand>
                    <Link href="/">
                        <p className="font-bold text-inherit">Feelings/Emotions Data</p>
                    </Link>
                </NavbarBrand>
                {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Button as={Link} href="#" variant="flat" className="bg-green-400">
                            Upload
                            <UploadLogo />
                        </Button>
                    </NavbarItem>
                </NavbarContent> */}
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Button as={Link} href="#" variant="flat" className="bg-green-400">
                            Log In
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} href="#" variant="flat" className="bg-yellow-400">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    )
}

export default NavBar;