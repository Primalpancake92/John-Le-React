export default function Heading({ headingName }) {
    return (
        <div className="relative flex justify-center py-10
            items-center w-full">
            <div className="flex items-center justify-center text-3xl 
            text-(--secondary-color) font-md py-1.5 px-2.5 border 
            border-[rgb(45,45,45)] rounded-4xl shrink-0 bg-[rgb(15,15,15)]">
                {headingName}
            </div>
        </div>
    );
}