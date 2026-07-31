"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner" // ১. Sonner থেকে toast ইমপোর্ট করা হলো
import {
    CreditCardIcon,
    LayersIcon,
    LogOutIcon,
    MenuIcon,
    SettingsIcon,
    UserIcon,
} from "lucide-react"



import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { logout } from "@/app/service/logout"

const navItems = [
    { label: "Dashboard", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Analytics", href: "/analytics" },
    { label: "Team", href: "/team" },
    { label: "Pricing", href: "/pricing" },
]

const userMenuItems = [
    { label: "Profile", href: "/profile", icon: UserIcon, shortcut: "⇧⌘P" },
    { label: "Billing", href: "/billing", icon: CreditCardIcon, shortcut: "⌘B" },
    { label: "Settings", href: "/settings", icon: SettingsIcon, shortcut: "⌘S" },
]

const getInitials = (name: string) => {
    if (!name) return "U";
    return name
        .trim()
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

type IUser = {
    success: boolean,
    message: string,
    data: {
        profile: {
            id: string,
            name: string,
            email: string,
            activeStatus: string,
            role: string,
            createdAt: string,
            updatedAt: string,
            profile: {
                id: string,
                profileId: string,
                bio: string,
                profilePhoto: string,
                userID: string,
                createdAt: string,
                updatedAt: string
            }
        }
    }
}

type NavbarProps = {
    user: IUser
}

export function Navbar({ user }: NavbarProps) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const router = useRouter()

    const profileData = user?.data?.profile;
    const name = profileData?.name || "User";
    const email = profileData?.email || "";
    const avatar = profileData?.profile?.profilePhoto || "";
    const initials = getInitials(name);

    // ২. লগআউট হ্যান্ডলারে টোস্ট নোটিফিকেশন যুক্ত করা হলো
    const handleLogout = async () => {
        try {
            await logout(); 
            toast.success("Successfully logged out!"); // সফলভাবে লগআউট হওয়ার টোস্ট মেসেজ
            router.push("/login"); 
            router.refresh(); 
        } catch (error) {
            toast.error("Something went wrong during logout."); // ভুল হলে এরর টোস্ট মেসেজ
            console.error("Logout failed:", error);
        }
    }

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex h-16 w-full max-w-6xl items-center px-4"
            >
                {/* Left: Logo */}
                <div className="flex flex-1 items-center justify-start">
                    <Link href="/" className="flex items-center gap-2">
                        <LayersIcon className="size-5 text-primary" aria-hidden="true" />
                        <span className="text-lg text-purple-800 font-semibold tracking-tight text-nowrap">Next js press</span>
                    </Link>
                </div>

                {/* Middle: Centered Desktop Nav Links */}
                <ul className="hidden items-center gap-1 md:flex justify-center">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Button asChild variant="ghost" size="sm" >
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>

                {/* Right: User menu & Mobile toggle */}
                <div className="flex flex-1 items-center justify-end gap-2">
                    {/* User dropdown */}
                   {
                    user.success ? (
                         <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                                aria-label="Open user menu"
                            >
                                <Avatar className="size-8 ">
                                    <AvatarImage src={avatar} alt={name} />
                                    <AvatarFallback>{initials}</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-sm font-medium">{name}</span>
                                        <span className="text-xs font-normal text-muted-foreground">
                                            {email}
                                        </span>
                                    </div>
                                </DropdownMenuLabel>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                {userMenuItems.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild>
                                        <Link href={item.href} className="flex w-full items-center">
                                            <item.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                                            <span>{item.label}</span>
                                            <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem
                                    onClick={handleLogout} 
                                    className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950 cursor-pointer"
                                >
                                    <LogOutIcon className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    ):<Link href={"/login"}>
                        <Button className="cursor-pointer">
                            Login
                        </Button>
                    </Link>
                   }

                    {/* Mobile menu */}
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                aria-label="Open navigation menu"
                            >
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64">
                            <SheetTitle className="sr-only">Navigation</SheetTitle>
                            <div className="flex flex-col gap-1 p-4">
                                {navItems.map((item) => (
                                    <Button
                                        key={item.href}
                                        variant="ghost"
                                        className="justify-start"
                                        asChild
                                    >
                                        <Link href={item.href} onClick={() => setMobileOpen(false)}>
                                            {item.label}
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    )
}