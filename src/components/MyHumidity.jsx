import React, { useEffect, useRef } from 'react';
import { LinearGauge } from 'canvas-gauges';

function MyHumidity() {
  const gaugeRef = useRef(null);
  const gaugeInstance = useRef(null);

  useEffect(() => {
    gaugeInstance.current = new LinearGauge({
      renderTo: gaugeRef.current,
    height: 180,
    width: 80,
    units: "RH%",
    title: "Umiditate",
    minValue: 14,
    maxValue: 50,
    majorTicks: [14, 26, 38, 50],
    minorTicks: 5,
    strokeTicks: true,
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: true,
    barBeginCircle: false,
    tickSide: "left",
    numberSide: "left",
    needleSide: "left",
    needleType: "arrow",
    needleWidth: 10,
    colorNeedle: "#4046ff",
    colorNeedleEnd: "#4036ff",
    animationDuration: 500,
    animationRule: "linear",
    animationTarget: "plate",
    barWidth: 2,
    ticksWidth: 30,
    ticksWidthMinor: 8,
    fontUnitsSize: 26,
    highlights: [{
            "from": 14,
            "to": 38,
            "color": "rgba(28, 130, 0, .4)"
        },
        {
            "from": 38,
            "to": 50,
            "color": "rgba(255, 0, 0, .4)"
        }
    ],
    colorValueBoxBackground: "white",
    valueInt: 2
    });

    gaugeInstance.current.draw();

    return () => {
      gaugeInstance.current = null;
    };
  }, []);

  // Exemplu de update al valorii după 3 secunde
  useEffect(() => {
    const timer = setTimeout(() => {
      if (gaugeInstance.current) {
        gaugeInstance.current.value = 32;
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <canvas ref={gaugeRef}></canvas>;
}

export default MyHumidity;
