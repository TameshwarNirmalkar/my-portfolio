import { createEntityAdapter, createSlice, EntityId } from "@reduxjs/toolkit";

interface CommentsCollectionI {
  uuid: string;
  _id: number;
  email: string;
  comments: string;
  comments_date: Date;
}

interface CommentsStateI {
  is_loading: boolean;
  error_msg: string | null;
}

const commentsAdapter = createEntityAdapter<CommentsCollectionI, EntityId>({
  selectId: (comment: CommentsCollectionI) => comment._id,
  sortComparer: (a: CommentsCollectionI, b: CommentsCollectionI) => a.email.localeCompare(b.email),
});

const commentSlice = createSlice({
  name: "COMMENTS_SLICE",
  initialState: commentsAdapter.getInitialState<CommentsStateI>({ is_loading: false, error_msg: "" }),
  reducers: {
    interestAdded: commentsAdapter.addOne,
    interestUpdate: commentsAdapter.updateOne,
    interestRemove: commentsAdapter.removeOne,
    interestAddMany: commentsAdapter.addMany, // for addmany and upsertmany we need the entity id (selectedId) then only data will be added in the entity.
  },
});

export default commentSlice.reducer;
