interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'
    return (
        <button className={`
        bg-gradient-to-r from-${cor}-400 to-${cor}-700
        text-white font-semibold px-4 py-2 rounded-md
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}