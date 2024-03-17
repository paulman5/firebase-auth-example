"use client"

import React, { useState, useEffect } from "react"

export interface ModalHook {
  isOpen?: boolean
  openModal?: () => void
  closeModal: () => void
}
export default function Modalhook(): ModalHook {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log("isOpen changed:", isOpen)
  }, [isOpen])

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return { isOpen, openModal, closeModal }
}
