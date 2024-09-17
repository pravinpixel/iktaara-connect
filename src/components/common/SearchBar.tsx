"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "../ui/input"

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

export default function SearchBar() {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="relative">

            <Input onFocus={() => {
                setOpen(true)
            }} onBlur={() => {
                setOpen(false)
            }} />
            <div className={`absolute ${open ? 'flex' : "hidden"} left-0 right-0 shadow-2xl bg-red-300 rounded`}>
                <p className='p-2 text-f16' role="button">Demo</p>
            </div>
        </div>
    )
}
