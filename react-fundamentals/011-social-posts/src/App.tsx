import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Post } from "./components/Post";

function App() {
  const posts = [
    {
      id: "0",
      userName: "João Bibiano",
      avatar:
        "https://pps.whatsapp.net/v/t61.24694-24/162196482_256442469634405_1827607725770247809_n.jpg?ccb=11-4&oh=aac35985a081ada3ca7cee882d79f0df&oe=61481983",
      content: "Esse é o content",
    },
    {
      id: "1",
      userName: "Anthony Carvalho",
      avatar: "https://cdn.fakercloud.com/avatars/tobysaxon_128.jpg",
      content:
        "Aut amet magnam. Exercitationem et cupiditate unde voluptas est et. Est explicabo repellat voluptas dicta qui. Laboriosam sapiente quasi maxime omnis accusantium quo.",
    },
    {
      id: "2",
      userName: "Yago Franco Neto",
      avatar: "https://cdn.fakercloud.com/avatars/strikewan_128.jpg",
      content:
        "Atque ipsam maxime blanditiis dolor ducimus. Adipisci quis occaecati natus qui saepe. Est ea porro est nisi magni voluptate consequatur sint reprehenderit. Quas aut quae et ex sed illum. Minima magni fugit omnis vel rerum distinctio. Voluptas consequatur corporis natus mollitia est eos neque et exercitationem.",
    },
    {
      id: "3",
      userName: "Yago Franco Neto",
      avatar: "https://cdn.fakercloud.com/avatars/strikewan_128.jpg",
      content:
        "Atque ipsam maxime blanditiis dolor ducimus. Adipisci quis occaecati natus qui saepe. Est ea porro est nisi magni voluptate consequatur sint reprehenderit. Quas aut quae et ex sed illum. Minima magni fugit omnis vel rerum distinctio. Voluptas consequatur corporis natus mollitia est eos neque et exercitationem.",
    },
  ];

  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={index}
          content={post.content}
          userName={post.userName}
          avatarUrl={post.avatar}
        />
      ))}
    </>
  );
}

export default App;
