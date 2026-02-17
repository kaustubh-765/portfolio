export interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export interface DoodlePath {
  points: Point[];
  color: string;
  width: number;
}

export const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

export const distance = (p1: Point, p2: Point): number => {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
};

export const generateDoodlePath = (
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  segments: number = 10,
  wobble: number = 5
): Point[] => {
  const points: Point[] = [];
  const dx = (endX - startX) / segments;
  const dy = (endY - startY) / segments;

  for (let i = 0; i <= segments; i++) {
    const progress = i / segments;
    const ease = Math.sin(progress * Math.PI);
    
    points.push({
      x: startX + dx * i + (Math.random() - 0.5) * wobble * ease,
      y: startY + dy * i + (Math.random() - 0.5) * wobble * ease,
      vx: 0,
      vy: 0,
    });
  }

  return points;
};

export const smoothPath = (points: Point[], iterations: number = 2): Point[] => {
  let smoothed = [...points];

  for (let iter = 0; iter < iterations; iter++) {
    const newPoints: Point[] = [smoothed[0]];

    for (let i = 1; i < smoothed.length - 1; i++) {
      newPoints.push({
        x: (smoothed[i - 1].x + smoothed[i].x + smoothed[i + 1].x) / 3,
        y: (smoothed[i - 1].y + smoothed[i].y + smoothed[i + 1].y) / 3,
        vx: smoothed[i].vx,
        vy: smoothed[i].vy,
      });
    }

    newPoints.push(smoothed[smoothed.length - 1]);
    smoothed = newPoints;
  }

  return smoothed;
};

export const createDoodleCircle = (
  centerX: number,
  centerY: number,
  radius: number,
  segments: number = 36,
  wobble: number = 3
): Point[] => {
  const points: Point[] = [];

  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const wobbleOffset = (Math.random() - 0.5) * wobble;

    points.push({
      x: centerX + Math.cos(angle) * (radius + wobbleOffset),
      y: centerY + Math.sin(angle) * (radius + wobbleOffset),
      vx: 0,
      vy: 0,
    });
  }

  return points;
};

export const createDoodleRect = (
  x: number,
  y: number,
  width: number,
  height: number,
  wobble: number = 2
): Point[] => {
  const points: Point[] = [];
  const corners = [
    { x: x, y: y },
    { x: x + width, y: y },
    { x: x + width, y: y + height },
    { x: x, y: y + height },
    { x: x, y: y },
  ];

  corners.forEach((corner, i) => {
    if (i < corners.length - 1) {
      const segment = generateDoodlePath(
        corner.x,
        corner.y,
        corners[i + 1].x,
        corners[i + 1].y,
        5,
        wobble
      );
      points.push(...segment.slice(0, -1));
    }
  });

  return points;
};

export const drawPath = (
  ctx: CanvasRenderingContext2D,
  points: Point[],
  color: string = '#3b82f6',
  width: number = 2
) => {
  if (points.length < 2) return;

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2;
    const midY = (prev.y + curr.y) / 2;

    ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
  }

  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();
};