export default function Heading({ headingName }) {
    return (
        <div className="relative flex justify-center py-2
            items-center mb-10 rounded-4xl border-1
            border-[rgb(45,45,45)]">
            <span className="flex items-center text-3xl text-(--secondary-color)
            font-md px-4">
                {headingName}
            </span>
        </div>
    );
}