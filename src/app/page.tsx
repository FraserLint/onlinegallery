import { db } from "~/server/db";

const mockUrls = [
  "https://16hklxk4jf.ufs.sh/f/UaAgfq34HbC1DpOWqc1FCTysZgOUBVLPc5MtlJp82uzr9iQR",
  "https://16hklxk4jf.ufs.sh/f/UaAgfq34HbC168UbmfgvdqwtMlJVRfbu1nECxgN3pa4PFrje",
  "https://16hklxk4jf.ufs.sh/f/UaAgfq34HbC1J14tU5BEfKl9HQsBNAO4WPbFivTXy5U2k71j",
  "https://16hklxk4jf.ufs.sh/f/UaAgfq34HbC18kBjjGzeM39UsyvRLGYpFJNbd7tw5Cu2HEzW"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
          <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
