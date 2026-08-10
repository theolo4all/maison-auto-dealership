"use client";

import { useTransition } from "react";
import { updateInquiryStatus } from "@/lib/actions/updateInquiry";

type InquiryActionsProps = {
  inquiryId: string;
  status: string;
};

export default function InquiryActions({
  inquiryId,
  status,
}: InquiryActionsProps) {
  const [isPending, startTransition] = useTransition();

  function changeStatus(newStatus: string) {
    startTransition(async () => {
      await updateInquiryStatus(inquiryId, newStatus);
    });
  }

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => changeStatus("New")}
        disabled={isPending || status === "New"}
        className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        New
      </button>

      <button
        type="button"
        onClick={() => changeStatus("Contacted")}
        disabled={isPending || status === "Contacted"}
        className="rounded-lg border border-yellow-500 px-4 py-2 text-sm text-yellow-400 transition hover:bg-yellow-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
      >
        Mark Contacted
      </button>

      <button
        type="button"
        onClick={() => changeStatus("Follow-up")}
        disabled={isPending || status === "Follow-up"}
        className="rounded-lg border border-blue-500 px-4 py-2 text-sm text-blue-400 transition hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        Follow-up
      </button>

      <button
        type="button"
        onClick={() => changeStatus("Closed")}
        disabled={isPending || status === "Closed"}
        className="rounded-lg border border-green-500 px-4 py-2 text-sm text-green-400 transition hover:bg-green-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        Closed
      </button>
    </div>
  );
}