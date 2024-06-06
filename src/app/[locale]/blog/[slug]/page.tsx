import getCategoryColor from "@/lib/get-category-color";
import Image from "next/image";

const BlogDetails = () => {
  return (
    <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4">
      <div>
        <h6
          className={`color mb-2 font-medium ${getCategoryColor(
            "Product Reviews",
          )}`}
        >
          Product Reviews
        </h6>
        <h2 className="mb-4 text-2xl font-bold">Title</h2>
      </div>
      <Image src="/blog/2.jpeg" alt="sky" width={780} height={500} />
      <div className="max-w-2xl">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          dolorum sapiente omnis nobis? Incidunt doloribus, temporibus sed
          perferendis amet blanditiis voluptates est odio quam exercitationem,
          beatae, fuga assumenda illum. Dolore? Rem, autem odit.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias
          natus saepe dicta eligendi accusantium, assumenda tenetur obcaecati
          voluptatum, aspernatur maiores placeat eum deleniti modi. Accusamus
          obcaecati aspernatur vel mollitia? Cupiditate consequuntur corporis
          alias architecto qui dicta commodi facilis adipisci est repudiandae,
          delectus ut blanditiis nulla eveniet odio eius expedita ducimus rem
          molestiae sit atque vel eos. Ratione, odio consequuntur? Dolores
          assumenda officia, quo, dignissimos perferendis ipsum voluptatum
          blanditiis error magni iste asperiores laboriosam alias excepturi
          similique laborum! Assumenda, ipsam et libero eveniet accusamus eius.
          Mollitia unde commodi dolorem consectetur.
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
