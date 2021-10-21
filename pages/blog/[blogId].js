import Head from 'next/head';
const Blog = ({ title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <div>
                <h2 className="content">Article One Credential Analytics Id : {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h2>
            </div>
        </>
    );
};
export default Blog;

// export async function getStaticPaths() {
//     return {
//         paths: [{ params: { blogId: '1' } }],
//         fallback: false,
//     }
// }

export async function getServerSideProps() {
    const userName = process.env.DB_USER;
    const userPass = process.env.DB_PASSWORD;
    console.log(`Here is You UserName: ${userName} & Password: ${userPass}`);
    return {
        props: {
            title: "Article Title One",
            description: 'Article Description'
        }
    }
}