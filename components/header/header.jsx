import Link from "next/link";
 
import ContainerFluid from "../ui/container-fluid";
// import MainNav from "../main-nav";
// import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import HeaderTopBar from "./header-top-bar";
import HeaderNova from "../static-veraplast/header/header";
import MobileMenu from "../static-veraplast/header/mobileHeader";

export const revalidate = 60;

const Header = async () => {
    // const categories = await getCategories();
    return (
        <header>
            <HeaderTopBar />
            <ContainerFluid>
                <div className="relative py-2 px-4 flex h-16 items-center lg:h-[100px]">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        {/* <img src="/novatech-logo.jpg" alt="Novatech PVC" className="h-12 w-auto" /> */}
                        <span className="text-2xl font-bold text-gray-800">VERAPLASTPVC</span>
                    </Link>
                    {/* <MainNav data={categories}/> */}
                    <HeaderNova />
                    <NavbarActions />
                    <MobileMenu />
                </div>
            </ContainerFluid>
        </header>
    );
};

export default Header;
