import React, { useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

function BarChart({ stateApi }) {
  const [barChart, setBarChart] = useState({
    dataHorizontal: {
      labels: [
        "Angul",
        "Balangir",
        "Balasore",
        "Bargarh",
        "Bhadrak",
        "Boudh",
        "Cuttack",
        "Deogarh",
        "Dhenkanal",
        "Gajapati",
        "Ganjam",
        "Jagatsinghpur",
        "Jajpur",
        "Jharsuguda",
        "Kalahandi",
        "Kandhamal",
        "Kendrapara",
        "Kendujhar",
        "Khordha",
        "Koraput",
        "Malkangiri",
        "Mayurbhanj",
        "Nabarangapur",
        "Nayagarh",
        "Nuapada",
        "Puri",
        "Rayagada",
      ],
      datasets: [
        {
          label: "Progression of COVID cases across districts",
          data: [
            stateApi.Angul.confirmed,
            stateApi.Balangir.confirmed,
            stateApi.Balasore.confirmed,
            stateApi.Bargarh.confirmed,
            stateApi.Bhadrak.confirmed,
            stateApi.Boudh.confirmed,
            stateApi.Cuttack.confirmed,
            stateApi.Deogarh.confirmed,
            stateApi.Dhenkanal.confirmed,
            stateApi.Gajapati.confirmed,
            stateApi.Ganjam.confirmed,
            stateApi.Jagatsinghpur.confirmed,
            stateApi.Jajpur.confirmed,
            stateApi.Jharsuguda.confirmed,
            stateApi.Kalahandi.confirmed,
            stateApi.Kandhamal.confirmed,
            stateApi.Kendrapara.confirmed,
            stateApi.Kendujhar.confirmed,
            stateApi.Khordha.confirmed,
            stateApi.Koraput.confirmed,
            stateApi.Malkangiri.confirmed,
            stateApi.Mayurbhanj.confirmed,
            stateApi.Nabarangapur.confirmed,
            stateApi.Nayagarh.confirmed,
            stateApi.Nuapada.confirmed,
            stateApi.Puri.confirmed,
            stateApi.Rayagada.confirmed,
          ],
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",

            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",

            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",

            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",

            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
  });

  return (
    <>
      <MDBContainer>
        <HorizontalBar
          data={barChart.dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
    </>
  );
}

export default BarChart;
