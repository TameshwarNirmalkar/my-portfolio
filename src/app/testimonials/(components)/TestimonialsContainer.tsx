"use client";

import React, { useEffect, useCallback, memo } from "react";
import Comments from "@components/Comments";
import CommentsCard from "@components/CommentsCard";
import { commentsSelectors } from "@store/comments/index";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { getCommentsCollectionAction } from "@store/comments/actions";
import { App, Spin, Carousel } from "antd";
import { createCommentsCollectionAction } from "@store/comments/actions";

const TestimonialsContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const allComments = useAppSelector(commentsSelectors.selectAll);
  const is_loading = useAppSelector((state) => state.comments.is_loading);
  const { message } = App.useApp();

  useEffect(() => {
    dispatch(getCommentsCollectionAction());
  }, [dispatch, message]);

  const onFinish = useCallback(
    async (values: { email: string; comments: string; client_name: string }) => {
      await dispatch(createCommentsCollectionAction(values));
      message.open({
        type: "success",
        content: "Comments successfully added.",
      });
    },
    [dispatch, message]
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl text-gray-300 py-4">Testimonials</h1>

      {is_loading ? (
        <div className="flex justify-center p-5">
          <Spin size="large" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          <Carousel arrows={false} autoplay={{ dotDuration: true }} dots={{ className: "text-orange-400" }}>
            {allComments.map((com) => (
              <CommentsCard
                key={com._id}
                // coverImage="/assets/images/rotating_card_thumb2.png"
                profleImage="/assets/images/ai-image1.jpeg"
                email={com.email}
                comments={com.comments}
                client_name={com.client_name}
              />
            ))}
          </Carousel>
        </div>
      )}
      <Comments onFinishHandler={onFinish} />
    </div>
  );
};

export default memo(TestimonialsContainer);
