import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./styles.css"

const Layout = ({ children }) => {
    return (
        <section>
            <Header />
            <main>{children}</main>
            <Footer />
        </section>
    )
}

export default Layout;