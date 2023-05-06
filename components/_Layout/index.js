function Layout(props) {
    const {
        children
    } = props || {}

    return (
        <div id='top'>
            <main className={`relative z-20 bg-gray-900 text-white min-h-screen flex flex-col justify-between`}>
                {children}
            </main>
            {/* <footer className="py-20 text-white bg-black block w-full h-[30vh] fixed bottom-0 z-10">
                <div className="container">
                    <p>This is the footer</p>
                </div>
            </footer> */}
        </div>
    )
}

export default Layout