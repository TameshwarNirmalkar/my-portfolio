import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCommentsCollectionAction = createAsyncThunk("GET_COMMENTS_COLLECTION", async () => {
  try {
    const res = await fetch(`/api/comments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return res;
  } catch (error) {
    return error;
  }
});

export const createCommentsCollectionAction = createAsyncThunk(
  "CREATE_COMMENTS_COLLECTION",
  async (arg: { email: string; comments: string }) => {
    try {
      const res = await fetch(`/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...arg }),
      }).then((res) => res.json());
      return res;
    } catch (error) {
      return error;
    }
  }
);
