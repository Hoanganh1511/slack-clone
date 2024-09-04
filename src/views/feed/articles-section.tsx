"use client";
import ArticleCard from "@/components/article-card";
import { IArticle } from "@/types/apiTypes";
import { useState } from "react";

const tempData = [
  {
    id: 1111,
    author: {
      id: 1,
      name: "Adrian Pobulinski",
      title: "Senior Frontend Developer",
      company: "Billennium S.A.",
      additional_role: "Blogger",
      avatar_url:
        "https://images.unsplash.com/photo-1712746438669-cc8d7193b08c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    content: {
      text: "What Redux and Zustand shares? Selectors. Let's check how it works",
    },
    engagement: {
      time_posted: "13h",
      reactions: {
        celebrate: 1,
        support: 1,
        likes: 19,
      },
      comments: 2,
      reposts: 1,
    },
  },
  {
    id: 1112,
    author: {
      id: 2,
      name: "Husnain Mazhar",
      title: "Front-End Developer | Wordpress Developer",
      company: "Billennium S.A.",
      additional_role: "Blogger",
      avatar_url:
        "https://images.unsplash.com/photo-1712746438899-a1b5c7d47ef0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    content: {
      text: `If you think ". . ." is called only as spread operator then you are wrong ❌ 

JavaScript's spread (...) and rest (...) operators might look the same, but they serve distinct purposes. `,
    },
    engagement: {
      time_posted: "13h",
      reactions: {
        celebrate: 1,
        support: 1,
        likes: 19,
      },
      comments: 4,
      reposts: 1,
    },
  },
  {
    id: 1113,
    author: {
      id: 3,
      name: "Darshak Batva",
      title: "BCA Student",
      company: "Billennium S.A.",
      additional_role: "Blogger",
      avatar_url:
        "https://plus.unsplash.com/premium_photo-1672759323613-a800bd064d6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    content: {
      text: `React Interview Questions

React is a Frontend Library that is used to build the UI of the Website. It is the most popular Frontend Library that many people are using nowadays.

Are you preparing for React Interviews?

Here is the sheet that can help you to prepare for the React Interviews. This sheet contains interview questions with answers. Be ready with these questions before your interviews.

Save it

Follow Darshak Batva to explore more in ReactJs

Share this with a friend who is preparing for ReactJs interview `,
    },
    engagement: {
      time_posted: "4d",
      reactions: {
        celebrate: 2,
        support: 4,
        likes: 24,
      },
      comments: 1,
      reposts: 4,
    },
  },
];
const ArticlesSection = () => {
  const [articles, setArticles] = useState<IArticle[]>(tempData);
  return (
    <div className="flex flex-col gap-y-2">
      {articles.map((data, idx) => {
        return <ArticleCard key={idx} article={data} />;
      })}
    </div>
  );
};

export default ArticlesSection;
