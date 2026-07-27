export default function SubSubSection({ name, children }) {
    return (
        <div className="relative flex flex-row">
           {name}
           <div>
                {children}
            </div> 
        </div>
    );
}