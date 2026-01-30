import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 20,
      right: 20,
      left: 10,
      bottom: 10,
    },
  },
  animation: {
    duration: 1200,
    easing: "easeOutQuart",
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        color: "#374151",
        boxWidth: 12,
        padding: 20,
        font: {
          size: 12,
          weight: "600",
        },
      },
    },
    title: {
      display: true,
      text: "Holdings Overview",
      color: "#111827",
      padding: {
        top: 10,
        bottom: 20,
      },
      font: {
        size: 16,
        weight: "700",
      },
    },
    tooltip: {
      backgroundColor: "#111827",
      titleColor: "#fff",
      bodyColor: "#fff",
      padding: 12,
      cornerRadius: 8,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#6B7280",
        font: {
          size: 11,
          weight: "500",
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0,0,0,0.06)",
      },
      ticks: {
        color: "#6B7280",
        font: {
          size: 11,
        },
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 12,
      borderSkipped: false,
    },
  },
};


export function VerticalGraph({ data }) {
  return (
    <div style={{ height: "360px", width: "100%" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
