import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../comps/footer"
import Header from "../comps/header"
import Link from 'next/link'

export default function Error() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Animal World | Error 404</title>
                <meta name="description" content="Interactive and Fun Website for Kids!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main className={styles.main}>
                <h1 className={styles.title}>
                    404 - Page Not Found
                </h1>

                <p className={styles.description}>
                    Oops! We can't seem to find the page you're looking for!
                </p>

                <p>
                    <Link href="/">
                        <a className="btn btn-primary" role="button">Back to Homepage</a>
                    </Link>
                </p>
            </main>

        </div>
    )
}