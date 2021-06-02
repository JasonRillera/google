import Head from "next/head";
import Header from "../components/Header";


function Search() {
    return (
        <div>
            <Head>
                <title>
                    {/* {router.query.term} */}
                    Search Results
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            {/* <SearchResults results={results} /> */}
        </div>
    )
}

export default Search;
