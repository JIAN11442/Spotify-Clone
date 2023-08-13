import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Song } from "@/types";
import getSongs from "./getSongs";

const getSongsByTitle = async (title?: string | null): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  //   if (!title) {
  //     const allSongs = getSongs();
  //     return allSongs;
  //   }

  const { data: songsData, error: songsError } = await supabase
    .from("songs")
    .select("*")
    .ilike("title", `%${title}%`)
    .order("created_at", { ascending: false });

  if (songsError) {
    console.log(songsError.message);
  }

  return (songsData as any) || [];
};

export default getSongsByTitle;
