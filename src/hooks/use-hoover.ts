import { useState } from "react"
import useEventListener from "./use-event-listener"

export function useHover(ref: any) {
    const [hovered, setHovered] = useState(false)
    useEventListener("mouseover", () => setHovered(true), ref.current)
    useEventListener("mouseout", () => setHovered(false), ref.current)
    return hovered
}