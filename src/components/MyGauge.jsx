import React, { useEffect, useRef } from 'react';
import { RadialGauge } from 'canvas-gauges';

function Gauge({ unit, size = 170, value }) {
  const gaugeRef = useRef(null);
  const gaugeInstance = useRef(null);

  useEffect(() => {
    gaugeInstance.current = new RadialGauge({
      renderTo: gaugeRef.current,
      width: size,
      height: size,
      units: unit,
      minValue: 0,
      maxValue: 1220,
      majorTicks: [
        "0", "20", "40", "60", "80", "100", "120", "140", "160", "180", "200", "1220"
      ],
      minorTicks: 2,
      strokeTicks: true,
      highlights: [
        { from: 160, to: 220, color: "rgba(200, 50, 50, .75)" }
      ],
      colorPlate: "#fff",
      borderShadowWidth: 0,
      borders: false,
      needleType: "arrow",
      needleWidth: 2,
      needleCircleSize: 7,
      needleCircleOuter: true,
      needleCircleInner: false,
      animationDuration: 1500,
      animationRule: "linear"
    });

    gaugeInstance.current.draw();

    return () => {
      gaugeInstance.current = null;
    };
  }, []);

  // 🔁 Update value whenever the `value` prop changes
  useEffect(() => {
    const numericValue = Number(value);
    if (gaugeInstance.current && !isNaN(numericValue)) {
      gaugeInstance.current.value = value;
    }
  }, [value]);

  return <canvas ref={gaugeRef}></canvas>;
}

export default Gauge;
