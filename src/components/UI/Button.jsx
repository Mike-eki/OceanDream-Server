export function Button({type = 'submit', content = 'Button', classes = ''}) {
    return (
        <>
        <button
            className={classes+" btn"}
            type={type}
        >
            {content}
        </button>
        </>
    )
}