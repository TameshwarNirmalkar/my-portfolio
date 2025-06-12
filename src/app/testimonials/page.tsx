"use client";

import type { Metadata } from "next";
import React, { useEffect, useCallback } from "react";
import Comments from "@/components/Comments";
import CommentsCard from "@components/CommentsCard";
import { commentsSelectors } from "@store/comments/index";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { getCommentsCollectionAction } from "@store/comments/actions";
import { App } from "antd";
import { createCommentsCollectionAction } from "@store/comments/actions";

const metadata: Metadata = {
  title: "Testimonials",
  description: "Client testimonials",
};

export default function TestimonialsPage() {
  const dispatch = useAppDispatch();
  const allComments = useAppSelector(commentsSelectors.selectAll);
  // console.log("allcomments ======", commentsSelectors);
  const { message } = App.useApp();

  // const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    dispatch(getCommentsCollectionAction());
  }, [dispatch, message]);

  const onFinish = useCallback(
    async (values: { email: string; comments: string }) => {
      await dispatch(createCommentsCollectionAction(values));
      message.open({
        type: "success",
        content: "Comments successfully added.",
      });
    },
    [dispatch, message]
  );

  return (
    <div className="flex flex-wrap">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl text-gray-300 py-4">Testimonials</h1>
          <div className="grid grid-cols-3 gap-4">
            {allComments.map((com) => (
              <CommentsCard
                key={com._id}
                coverImage="/assets/images/rotating_card_thumb2.png"
                profleImage="/assets/images/ai-image1.jpeg"
                email={com.email}
                comments={com.comments}
              />
            ))}
          </div>
          <Comments onFinishHandler={onFinish} />
        </div>
      </div>
    </div>
  );
}
