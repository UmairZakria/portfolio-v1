import Main from "@/components/Main";

async function getData() {
    try {
        const res = await fetch(`https://umair-portfolio-eight.vercel.app/api/project`, { next: { revalidate: 30 * 24 * 60 * 60  } });
        const project = await res.json();
        const res2 = await fetch(`https://umair-portfolio-eight.vercel.app/api/blogpost`, { next: { revalidate: 3600  } });
        const posts = await res2.json();

        return { data:project.data ,data2: posts.blogs };
    } catch (err) {
        console.error("Error fetching post data:", err);
        return { data: [], data: [] };
    }
}

export default async function Page() {

    const {  data, data2 } = await getData();

    if (data.length <= 0) {
        return <h1 className="flex items-center justify-center">The Page is Under Maintaince</h1>;
    }

    return (
        <>
            <Main data={data} data2={data2}  />
        </>
    );
}
