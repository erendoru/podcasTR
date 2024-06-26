import React from "react";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants";
import PodcastCard from "@/components/PodcastCard";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <div className="podcast_grid">
          {podcastData.map(({ id, imgURL, title, description }) => (
            <PodcastCard
              key={id}
              imgUrl={imgURL}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
