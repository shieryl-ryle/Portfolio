'use client'

import { useEffect } from 'react'

export function SourceProtection() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable common keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        return false
      }

      // Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
      }

      // Ctrl+Shift+J (Developer Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        return false
      }

      // Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        return false
      }

      // F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }

      // Ctrl+Shift+K (Developer Tools in Firefox)
      if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault()
        return false
      }
    }

    // Detect DevTools opening by checking if window size changes
    let devtools = { open: false, orientation: null as string | null }
    const threshold = 160

    const checkDevTools = () => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!devtools.open) {
          devtools.open = true
          // Optionally show a message or redirect
          console.clear()
        }
      } else {
        if (devtools.open) {
          devtools.open = false
        }
      }
    }

    // Check periodically
    const interval = setInterval(checkDevTools, 500)

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)

    // Prevent text selection shortcuts
    document.addEventListener('keydown', (e) => {
      // Ctrl+A (Select All)
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault()
        return false
      }
      // Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        return false
      }
    })

    // Disable drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('selectstart', (e) => e.preventDefault())

    // Cleanup
    return () => {
      clearInterval(interval)
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('dragstart', handleDragStart)
    }
  }, [])

  return null
}

