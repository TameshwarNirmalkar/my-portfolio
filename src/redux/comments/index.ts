import { createEntityAdapter, createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import { getCommentsCollectionAction, createCommentsCollectionAction } from "./actions";
import { RootState } from "@store/store";

interface CommentsCollectionI {
  _id: string;
  email: string;
  comments: string;
  client_name: string;
}

interface CommentsStateI {
  is_loading: boolean;
  error_msg: string | null | undefined;
}

const commentsAdapter = createEntityAdapter<CommentsCollectionI, EntityId>({
  selectId: (comment: CommentsCollectionI) => comment._id,
  sortComparer: (a: CommentsCollectionI, b: CommentsCollectionI) => a.client_name.localeCompare(b.client_name),
});

const commentSlice = createSlice({
  name: "COMMENTS_SLICE",
  initialState: commentsAdapter.getInitialState<CommentsStateI>({ is_loading: false, error_msg: "" }),
  reducers: {
    commentAdded: commentsAdapter.addOne,
    commentUpdate: commentsAdapter.updateOne,
    commentRemove: commentsAdapter.removeOne,
    commentAddMany: commentsAdapter.addMany, // for addmany and upsertmany we need the entity id (selectedId) then only data will be added in the entity.
  },
  extraReducers(builder) {
    builder
      .addCase(getCommentsCollectionAction.pending, (state: CommentsStateI) => {
        state.is_loading = true;
      })
      .addCase(
        getCommentsCollectionAction.fulfilled,
        (state, action: PayloadAction<{ comments: CommentsCollectionI[] }>) => {
          state.is_loading = false;
          commentsAdapter.upsertMany(state, action.payload.comments);
        }
      )
      .addCase(getCommentsCollectionAction.rejected, (state, action) => {
        state.error_msg = action.error.message;
      })
      .addCase(createCommentsCollectionAction.pending, (state) => {
        state.is_loading = true;
      })
      .addCase(
        createCommentsCollectionAction.fulfilled,
        (state, action: PayloadAction<{ data: CommentsCollectionI }>) => {
          state.is_loading = false;
          commentsAdapter.addOne(state, action.payload.data);
        }
      );
  },
});

export const commentsSelectors = commentsAdapter.getSelectors<RootState>((state) => state.comments);

export const { commentAdded, commentUpdate, commentRemove, commentAddMany } = commentSlice.actions;

export default commentSlice.reducer;
