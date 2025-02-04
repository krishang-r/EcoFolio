"use client";
import { useState, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Button } from "../components/ui/Button";

const CryptoChart = () => {
  const [chartData, setChartData] = useState(null);
  const [timeframe, setTimeframe] = useState("30"); // Default: 30 days

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${timeframe}`,
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.prices) {
          console.error("No price data available!");
          return;
        }

        const prices = data.prices.map((entry) => ({
          x: new Date(entry[0]).toLocaleDateString(),
          y: entry[1],
        }));

        setChartData({
          labels: prices.map((p) => p.x),
          datasets: [
            {
              label: "Carbon Coin Price (USD)",
              data: prices.map((p) => p.y),
              borderColor: "#346e30",
              backgroundColor: "rgba(61, 199, 52, 0.2)",
              tension: 0.1,
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching data:", error));

    const timeout = setTimeout(() => controller.abort(), 10000);

    return () => clearTimeout(timeout);
  }, [timeframe]);

  const formattedChartData = useMemo(() => {
    if (!chartData) return null;
    return {
      labels: chartData.labels,
      datasets: chartData.datasets,
    };
  }, [chartData]);

  return (
    <div className="p-4">
      <h2 className="text-2xl text-center w-full font-bold mb-4 text-green-800 ">Carbon Coin (CBC) Price History</h2>
      
      <div className="flex gap-2 mb-4">
        <Button onClick={() => setTimeframe("365")}>1 Year</Button>
        <Button onClick={() => setTimeframe("90")}>3 Months</Button>
        <Button onClick={() => setTimeframe("30")}>1 Month</Button>
        <Button onClick={() => setTimeframe("7")}>1 Week</Button>
      </div>

      {/* Set fixed height for the chart */}
      <div className="w-full" style={{ height: "600px" }}>
        {formattedChartData ? (
          <Line 
            data={formattedChartData} 
            options={{ maintainAspectRatio: false }} // Allow custom height
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CryptoChart;
