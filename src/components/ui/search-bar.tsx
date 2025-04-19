"use client"

import React, { useState } from "react"
import {Input} from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
    onSearch: (term: string) => void
    placeholder?: string
}

export function SearchBar({onSearch, placeholder = "Pesquisar..."}: SearchBarProps) {
    const [searchTerm, setsearchTerm] = useState("")

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setsearchTerm(value)
        onSearch(value)
    }
    return (
        <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
        <Input
        type = "search"
        placeholder = {placeholder}
        className = "pl-8 w-[250px]"
        value = {searchTerm}
        onChange = {handleSearch}
        />
        </div>
    )
}