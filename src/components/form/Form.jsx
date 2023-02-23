import styles from './Form.module.css'

export function Form(params) {
    return(
        <form 
            className={styles["form-container"]+" p-all gap"}
            onSubmit={params.onSubmit}
        >
            {params.children}
        </form>
    )
}