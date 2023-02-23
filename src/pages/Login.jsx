import { Logo } from "../assets/svg/Logo"
import { LogoLetters } from "../assets/svg/LogoLetters"
import { Form } from "../components/form/Form"
import { FormInput } from "../components/form/FormInput"
import { Button } from "../components/UI/Button"
import styles from "./Login.module.css"

export function Login() {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Submited!')
    }

    return (
        <section className={styles["login"]}>
            <Form onSubmit={handleSubmit}>
                <figure className={styles["logo-container"]}>
                    <Logo />
                    <LogoLetters />
                </figure>
                <header className="t-center">
                    <h1>Login</h1>
                    <small></small>
                    <span className="line"></span>
                </header>
                <label htmlFor="user" className="w-100">
                    Usuario
                    <FormInput type="text" name="user" classes="w-100"/>
                </label>
                <label htmlFor="pass" className="w-100">
                    Contraseña
                    <FormInput type="password" name="pass" classes="w-100"/>
                </label>
                <Button type="submit" content="Ingresar" classes="w-100"/>
            </Form>
        </section>
    )
}