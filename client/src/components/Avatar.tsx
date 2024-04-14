

export default function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-7 h-7" : "w-9 h-9 "}`}>
            <span className={`${size === 'small' ? " text-sm" : " text-lg"} text-sm text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>
    )
}
