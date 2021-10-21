import Head from 'next/head';
import Footer from '@/layout/Footer';

const About = () => {
    return (
        <>
            <Head>
                <title>Front-End Misc</title>
                <meta name="description" content="Front-End Next Js Practice" />
            </Head>
            <div className="content">
                <h2>About Us</h2>
            </div>
        </>
    );
};

export default About;

About.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}