import Link from 'next/link';
import { useRouter } from 'next/router';

const TestPage = ({ id }: any) => {
    return (
        <div>
            You are current at /{id}.
            <Link href="/1">Go to /1</Link>
        </div>
    )
}

export const getStaticProps = ({params}: any) => {
    return {
        props: {
            id: params.id
        }
    }
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export default TestPage;