// One icon family: 1.75px strokes on a 20px grid, square caps to match the poster's hard edges.

type IconProps = { className?: string };

export function ArrowRight({ className = "w-5 h-5" }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
            <path d="M3 10h13M11 5l5 5-5 5" />
        </svg>
    );
}

export function ArrowUpRight({ className = "w-4 h-4" }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
            <path d="M6 14L14 6M7 6h7v7" />
        </svg>
    );
}

export function ArrowLeft({ className = "w-5 h-5" }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
            <path d="M17 10H4M9 5l-5 5 5 5" />
        </svg>
    );
}

export function MenuIcon({ open, className = "w-6 h-6" }: IconProps & { open: boolean }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
    );
}
