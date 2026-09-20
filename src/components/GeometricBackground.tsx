import React, { useEffect, useRef } from 'react';

export const GeometricBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Nodes for geometric constellation
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      shape: 'circle' | 'square' | 'triangle';
      color: string;
    }> = [];

    const colors = [
      'rgba(6, 182, 212, 0.6)',   // cyan
      'rgba(59, 130, 246, 0.5)',  // blue
      'rgba(16, 185, 129, 0.5)',  // emerald
      'rgba(99, 102, 241, 0.4)'   // indigo
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.5,
        shape: Math.random() > 0.7 ? 'square' : Math.random() > 0.4 ? 'triangle' : 'circle',
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient background gradient
      const gradient = ctx.createRadialGradient(
        width / 2,
        height * 0.25,
        50,
        width / 2,
        height * 0.5,
        Math.max(width, height)
      );
      gradient.addColorStop(0, 'rgba(14, 116, 144, 0.08)');
      gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.02)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw floating geometric connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.18;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and move nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        ctx.fillStyle = node.color;
        if (node.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (node.shape === 'square') {
          ctx.fillRect(node.x - node.radius, node.y - node.radius, node.radius * 2, node.radius * 2);
        } else {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y - node.radius * 1.3);
          ctx.lineTo(node.x + node.radius, node.y + node.radius);
          ctx.lineTo(node.x - node.radius, node.y + node.radius);
          ctx.closePath();
          ctx.fill();
        }
      }

      // Draw decorative rotating isometric hexagon in top right & bottom left corners
      angle += 0.003;
      drawHexagonGrid(ctx, width * 0.88, height * 0.18, 90, angle);
      drawHexagonGrid(ctx, width * 0.1, height * 0.85, 70, -angle * 0.7);

      animationFrameId = requestAnimationFrame(render);
    };

    const drawHexagonGrid = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      rot: number
    ) => {
      context.save();
      context.translate(cx, cy);
      context.rotate(rot);
      context.strokeStyle = 'rgba(6, 182, 212, 0.12)';
      context.lineWidth = 1;
      context.setLineDash([4, 4]);

      for (let ring = 1; ring <= 2; ring++) {
        const r = (size / 2) * ring;
        context.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i;
          const px = r * Math.cos(a);
          const py = r * Math.sin(a);
          if (i === 0) context.moveTo(px, py);
          else context.lineTo(px, py);
        }
        context.closePath();
        context.stroke();
      }

      context.restore();
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-geo-grid opacity-60" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Subtle top atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-b from-cyan-600/10 via-blue-700/5 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
};
