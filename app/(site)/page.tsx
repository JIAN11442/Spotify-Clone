import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "../components/PageContent";

export default async function Home() {
  const revalidate = 0;
  const songs = await getSongs();

  return (
    <div
      className="
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
    "
    >
      <Header>
        {/* Welcome Back */}
        <div className="mb-2">
          <h1 className="text-3xl font-semibold text-white">welcome Back</h1>
        </div>
        {/* ListItems */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-3
          mt-4
        "
        >
          <ListItem image="/images/liked.png" name="Liked Songs" href="liked" />
        </div>
      </Header>
      {/* Newest Songs */}
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl font-semibold">Newest Songs</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}
