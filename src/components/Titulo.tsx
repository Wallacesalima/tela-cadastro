export default function Titulo(props) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-base md:text-2xl font-semibold">
                {props.children}
            </h1>
            <hr className=" border-2 border-purple-400" />
        </div>
    )
}