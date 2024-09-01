const PageLogin = () => {
    return (
        <div>
            <form action="POST">
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default PageLogin;