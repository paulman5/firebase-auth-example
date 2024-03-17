"use client"

import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Pathhook() {
  const pathname = usePathname()

  return { pathname }
}
