export function FormInput({type = 'text', placeholder = '', name = '', classes = ''}) {
    return (
        <>
        <input
            className={classes+" p-all-s"}
            type={type}
            placeholder={placeholder}
            name={name}
            autoComplete="off"
        >

        </input>
        </>
    )
}