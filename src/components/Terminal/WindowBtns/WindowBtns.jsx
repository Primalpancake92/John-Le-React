import windowBtns from "../TerminalConfig/terminalConfig";

export default function WindowBtns({ windowBtnArr=windowBtns }) {
    /* 
        Here contains the window buttons for the hero component. This should 
        map from an array of object literals that contain the colour, size, and
        icon of the buttons.
    */

    return (
        <div className="relative flex gap-3">
            {windowBtnArr?.map(({ id, colour, Icon }) => (
                <div key={id} className={`relative flex justify-center 
                items-center w-6 h-6 rounded-full shrink-0 ${colour}`}>
                    {Icon && <Icon strokeWidth={3} size={11} />}
                </div>
            ))}
        </div>
    );
}