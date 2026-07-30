"use client"

import { useState } from "react"
import Link from "next/link"
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

const user = {
    name: "Ada Lovelace",
    email: "ada@example.com",
    avatar: "/user-avatar.png",
    initials: "AL",
}

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

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
                        <span className="text-lg font-semibold tracking-tight text-nowrap">Next js press</span>
                    </Link>
                </div>

                {/* Middle: Centered Desktop Nav Links */}
                <ul className="hidden items-center gap-1 md:flex justify-center">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Button asChild variant="ghost" size="sm">
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                                aria-label="Open user menu"
                            >
                                <Avatar className="size-8">
                                    <AvatarImage src={user.avatar} alt="" />
                                    <AvatarFallback>{user.initials}</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-sm font-medium">{user.name}</span>
                                        <span className="text-xs font-normal text-muted-foreground">
                                            {user.email}
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
                                    onClick={() => console.log("[v0] Sign out clicked")}
                                    className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950"
                                >
                                    <LogOutIcon className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

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