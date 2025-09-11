import DesktopNav  from "./DesktopNav"
import Link from "next/link";

function NaviBar() {
    return (
       <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex item-center justify-between h-16">
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
                    social-media</Link>
                </div>
                <DesktopNav/>
            </div>
          
            {/* <MobileNav/> */}

        </div>
       </nav>
    )
}

export default NaviBar;