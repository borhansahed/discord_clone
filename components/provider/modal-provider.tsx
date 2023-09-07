"use client";

import { CreateServerModal } from "@/components/modal/create-server-modal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modal/invite-modal";
import { EditServerModal } from "@/components/modal/edit-server";
import { MembersModal } from "@/components/modal/members-modal";
import ChannelModal from "@/components/modal/create-channel-modal";

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
    </>
  );
};
