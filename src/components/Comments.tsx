"use client";

import React, { memo, useCallback } from "react";

const Comments: React.FC = () => {
  const onSaveComments = useCallback(() => {}, []);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
          return false;
        }}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
              <div className="col-span-full">
                <label htmlFor="user_email" className="block text-sm/6 font-medium text-gray-300">
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">domain.com/</div>
                    <input
                      id="user_email"
                      name="user_email"
                      type="email"
                      required
                      placeholder="janesmith"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="comments" className="block text-sm/6 font-medium text-gray-300">
                  Write your comments.
                </label>
                <div className="mt-2">
                  <textarea
                    id="comments"
                    name="comments"
                    required
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    defaultValue={""}
                  />
                </div>
                <div className="flex justify-end items-center py-4">
                  <button
                    type="button"
                    className="rounded-md bg-orange-400 px-6 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    onClick={onSaveComments}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(Comments);
