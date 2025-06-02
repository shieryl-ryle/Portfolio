"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let devicePixelRatio: number
    const starsArray: Star[] = []

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio

      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    })

    // Star class for constellation effect
    class Star {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      brightness: number
      twinkleSpeed: number
      twinkleOffset: number
      color: string
      distance: number
      pulsePhase: number
      isConstellation: boolean

      constructor(x: number, y: number, isConstellation = false) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = isConstellation ? Math.random() * 2.5 + 1.5 : Math.random() * 2 + 0.5
        this.brightness = isConstellation ? Math.random() * 0.3 + 0.6 : Math.random() * 0.3 + 0.3
        this.twinkleSpeed = Math.random() * 0.02 + 0.01
        this.twinkleOffset = Math.random() * Math.PI * 2
        this.distance = 0
        this.pulsePhase = Math.random() * Math.PI * 2
        this.isConstellation = isConstellation

        // Create constellation colors
        const colors = [
          "rgba(255, 255, 255, ", // White
          "rgba(173, 216, 230, ", // Light blue
          "rgba(147, 112, 219, ", // Medium slate blue
          "rgba(255, 182, 193, ", // Light pink
          "rgba(255, 215, 0, ", // Gold
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Calculate distance between mouse and star
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        const forceDirectionX = dx / this.distance
        const forceDirectionY = dy / this.distance

        const maxDistance = 100
        const force = (maxDistance - this.distance) / maxDistance

        if (this.distance < maxDistance) {
          const directionX = forceDirectionX * force * 15
          const directionY = forceDirectionY * force * 15

          this.x -= directionX
          this.y -= directionY
        } else {
          // Return to base position
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 15
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 15
          }
        }

        // Update twinkle effect
        this.pulsePhase += this.twinkleSpeed
      }

      draw() {
        // Calculate twinkling brightness
        const twinkle = Math.sin(this.pulsePhase + this.twinkleOffset) * 0.3 + 0.7
        const alpha = this.brightness * twinkle

        // Draw outer glow
        const glowSize = this.isConstellation ? this.size * 3 : this.size * 2
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowSize)
        gradient.addColorStop(0, this.color + alpha + ")")
        gradient.addColorStop(0.5, this.color + alpha * 0.3 + ")")
        gradient.addColorStop(1, this.color + "0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw star core
        ctx.fillStyle = this.color + alpha + ")"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create minimal constellation patterns - only Aquarius and Leo
    const constellationPatterns = [
      // Leo - The Lion (simplified main stars only)
      [
        { x: 0.2, y: 0.3 }, // Regulus (heart of the lion)
        { x: 0.25, y: 0.25 },
        { x: 0.3, y: 0.22 },
        { x: 0.35, y: 0.28 },
        { x: 0.32, y: 0.35 },
      ],

      // Aquarius - The Water Bearer (simplified)
      [
        { x: 0.7, y: 0.4 }, // Water jar
        { x: 0.75, y: 0.38 },
        { x: 0.8, y: 0.42 },
        { x: 0.77, y: 0.48 }, // Water stream
        { x: 0.73, y: 0.52 },
      ],
    ]

    // Add cosmic elements
    function init() {
      starsArray.length = 0

      const canvasWidth = canvas.width / devicePixelRatio
      const canvasHeight = canvas.height / devicePixelRatio

      // Add constellation patterns (Leo and Aquarius only)
      constellationPatterns.forEach((pattern) => {
        pattern.forEach((point) => {
          const x = point.x * canvasWidth
          const y = point.y * canvasHeight
          starsArray.push(new Star(x, y, true))
        })
      })

      // Add Milky Way stars (diagonal band across canvas)
      for (let i = 0; i < 35; i++) {
        const t = i / 34 // 0 to 1
        const x = (0.1 + t * 0.8) * canvasWidth + (Math.random() - 0.5) * 80
        const y = (0.15 + t * 0.7) * canvasHeight + (Math.random() - 0.5) * 60
        const star = new Star(x, y, false)
        star.size = Math.random() * 1.8 + 0.4
        star.brightness = Math.random() * 0.5 + 0.2
        starsArray.push(star)
      }

      // Add scattered cosmic stars
      for (let i = 0; i < 25; i++) {
        const x = Math.random() * canvasWidth
        const y = Math.random() * canvasHeight
        const star = new Star(x, y, false)
        star.size = Math.random() * 1.5 + 0.3
        star.brightness = Math.random() * 0.4 + 0.15
        starsArray.push(star)
      }

      // Add some brighter accent stars
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * canvasWidth
        const y = Math.random() * canvasHeight
        const star = new Star(x, y, false)
        star.size = Math.random() * 2.5 + 1.5
        star.brightness = Math.random() * 0.4 + 0.5
        star.color = "rgba(255, 215, 0, " // Golden stars
        starsArray.push(star)
      }
    }

    init()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Smooth mouse following
      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      // Draw nebula-like background effect
      const gradient = ctx.createRadialGradient(
        (canvas.width / devicePixelRatio) * 0.3,
        (canvas.height / devicePixelRatio) * 0.4,
        0,
        (canvas.width / devicePixelRatio) * 0.3,
        (canvas.height / devicePixelRatio) * 0.4,
        (canvas.width / devicePixelRatio) * 0.6,
      )
      gradient.addColorStop(0, "rgba(147, 112, 219, 0.03)")
      gradient.addColorStop(0.5, "rgba(255, 182, 193, 0.02)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio)

      // Draw constellation lines first (behind stars)
      ctx.strokeStyle = "rgba(147, 112, 219, 0.3)"
      ctx.lineWidth = 1.2

      // Draw constellation connections
      let starIndex = 0
      constellationPatterns.forEach((pattern) => {
        for (let i = 0; i < pattern.length - 1; i++) {
          const star1 = starsArray[starIndex + i]
          const star2 = starsArray[starIndex + i + 1]

          if (star1 && star2) {
            ctx.beginPath()
            ctx.moveTo(star1.x, star1.y)
            ctx.lineTo(star2.x, star2.y)
            ctx.stroke()
          }
        }
        starIndex += pattern.length
      })

      // Draw interactive connections between nearby stars
      for (let i = 0; i < starsArray.length; i += 3) {
        for (let j = i + 1; j < starsArray.length; j += 3) {
          const dx = starsArray[i].x - starsArray[j].x
          const dy = starsArray[i].y - starsArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 90) {
            const opacity = ((90 - distance) / 90) * 0.12
            ctx.beginPath()
            ctx.strokeStyle = `rgba(173, 216, 230, ${opacity})`
            ctx.lineWidth = 0.6
            ctx.moveTo(starsArray[i].x, starsArray[i].y)
            ctx.lineTo(starsArray[j].x, starsArray[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw stars
      for (let i = 0; i < starsArray.length; i++) {
        starsArray[i].update()
        starsArray[i].draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    window.addEventListener("resize", init)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", init)
    }
  }, [])

  return (
    <motion.div
      className="w-full h-[400px] md:h-[500px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />

      {/* Add multiple shooting stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ x: -10, y: "20%", opacity: 0 }}
          animate={{
            x: "110%",
            y: "80%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 8,
            ease: "linear",
          }}
          style={{
            boxShadow: "0 0 6px 2px rgba(255, 255, 255, 0.6), 0 0 12px 4px rgba(173, 216, 230, 0.3)",
          }}
        />
        <motion.div
          className="absolute w-1 h-1 bg-purple-300 rounded-full"
          initial={{ x: "120%", y: "10%", opacity: 0 }}
          animate={{
            x: "-10%",
            y: "70%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 12,
            ease: "linear",
            delay: 5,
          }}
          style={{
            boxShadow: "0 0 6px 2px rgba(147, 112, 219, 0.6), 0 0 12px 4px rgba(255, 182, 193, 0.3)",
          }}
        />
      </div>

      {/* Interactive floating astronaut */}
      <motion.div
        className="absolute w-1 h-1 text-3xl cursor-pointer select-none"
        initial={{ x: "50%", y: "50%" }}
        animate={{
          x: ["80%", "85%", "78%", "82%", "80%"],
          y: ["25%", "20%", "30%", "22%", "25%"],
          rotate: [0, 8, -5, 12, 0],
        }}
        whileHover={{
          scale: 1.3,
          rotate: 360,
          transition: { duration: 0.8 },
        }}
        whileTap={{
          scale: 0.9,
          y: "-10px",
          transition: { duration: 0.2 },
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))",
          transform: "translate(-50%, -50%)", // Center the astronaut properly
        }}
      >
        🧑‍🚀
      </motion.div>

      {/* Add floating planets */}
      <motion.div
        className="absolute w-6 h-6 text-2xl"
        initial={{ x: "80%", y: "25%" }}
        animate={{
          x: ["80%", "85%", "78%", "82%", "80%"],
          y: ["25%", "20%", "30%", "22%", "25%"],
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          filter: "drop-shadow(0 0 8px rgba(255, 182, 193, 0.3))",
        }}
      >
        🪐
      </motion.div>

      <motion.div
        className="absolute w-5 h-5 text-xl"
        initial={{ x: "5%", y: "75%" }}
        animate={{
          x: ["5%", "10%", "3%", "8%", "5%"],
          y: ["75%", "70%", "80%", "72%", "75%"],
          rotate: [0, -360],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          filter: "drop-shadow(0 0 6px rgba(173, 216, 230, 0.3))",
        }}
      >
        🌙
      </motion.div>
    </motion.div>
  )
}
