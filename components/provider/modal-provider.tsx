"use client";

import { CreateServerModal } from "@/components/modal/create-server-modal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modal/invite-modal";
import { EditServerModal } from "@/components/modal/edit-server";
import { MembersModal } from "@/components/modal/members-modal";
import ChannelModal from "@/components/modal/create-channel-modal";
import { LeaveServerModal } from "@/components/modal/leave-server";
import { DeleteServerModal } from "@/components/modal/delete-server-modal";
import { DeleteChannelModal } from "@/components/modal/delete-channel";
import EditChannelModal from "@/components/modal/edit-channel";
import { MessageFileModal } from "@/components/modal/message-file-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <ChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
    </>
  );
};
