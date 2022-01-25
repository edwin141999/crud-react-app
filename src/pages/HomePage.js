import { Outlet } from "react-router-dom";

function HomePage() {
    return (
        <div className="App">
            <section className="App-header">
                <Outlet />
            </section>
        </div >
    );
}

export default HomePage;