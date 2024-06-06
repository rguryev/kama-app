import MaxWidthWrapper from "@/components/max-width-wrapper";
import Card from "@/components/modules/card";

export default function Page() {
  return (
    <>
      <h1>Hello, Home page!</h1>
      <Card
        className={"mb-4 flex-col sm:flex-row"}
        props={{
          label: "Opinions",
          title: "Best Product Reviews",
          summary: "Lorem ipsum dolor sit amet",
          href: "/fdg/",
        }}
      />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="w-full">
          <Card
            props={{
              label: "Opinions",
              title: "Best Product Reviews",
              summary: "Lorem ipsum dolor sit amet",
              href: "/fdg/",
            }}
          />
        </div>
        <div className="w-full">
          <Card
            className=""
            props={{
              label: "Product Reviews",
              title: "Best Product Reviews",
              summary: "Lorem ipsum dolor sit amet",
              href: "/fdg/",
            }}
          />
        </div>
        <div className="w-full">
          <Card
            props={{
              label: "Travel Guides",
              title: "Best Product Reviews",
              summary: "Lorem ipsum dolor sit amet",
              href: "/fdg/",
            }}
          />
        </div>
      </div>
    </>
  );
}
