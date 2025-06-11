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
  const { message } = App.useApp();

  // const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    dispatch(getCommentsCollectionAction());
  }, [dispatch]);

  const onFinish = useCallback(
    async (values: any) => {
      await dispatch(createCommentsCollectionAction(values));
      message.open({
        type: "success",
        content: "This is a success message",
      });
    },
    [dispatch, message]
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container  m-4">
        <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
          <h1 className="text-2xl text-gray-300">Testimonials</h1>
          <div className="flex flex-col-3 gap-6 top-0">
            {allComments.map((com) => (
              <CommentsCard
                key={com._id}
                coverImage="/assets/images/rotating_card_thumb2.png"
                profleImage="/assets/images/ai-image1.jpeg"
                email={com.email}
                comments={com.comments}
              />
            ))}

            {/* Card 2 */}
            {/* <CommentsCard
              coverImage="/assets/images/rotating_card_thumb.png"
              profleImage="/assets/images/ai-image1.jpeg"
            /> */}

            {/* Card 3 */}
            {/* <CommentsCard
              coverImage="/assets/images/rotating_card_thumb3.png"
              profleImage="/assets/images/ai-image1.jpeg"
            /> */}
          </div>

          <Comments onFinishHandler={onFinish} />
        </div>
      </div>
    </div>
  );
}
