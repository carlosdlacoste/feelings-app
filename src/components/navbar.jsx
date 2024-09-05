import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


const NavBar = () =>{
    return(
        <>
            <Navbar isBordered className="bg-slate-500">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Feelings/Emotions Data</p>
                </NavbarBrand>
                {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
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