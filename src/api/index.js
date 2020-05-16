import axios from "axios";

const url_global = "http://localhost:3000/summary.json";
const url_india = "http://localhost:3000/india.json";

export const fetchData = async () => {
  try {
    const gdata = await axios.get(url_global);
    const idata = await axios.get(url_india);

    const global = {
      Confirmed: {
        data: gdata.data.Global.TotalConfirmed,
        new: gdata.data.Global.NewConfirmed,
      },
      Active: {
        data:
          gdata.data.Global.TotalConfirmed -
          (gdata.data.Global.TotalDeaths + gdata.data.Global.TotalRecovered),
      },
      Recovered: {
        data: gdata.data.Global.TotalRecovered,
        new: gdata.data.Global.NewRecovered,
      },
      Deaths: {
        data: gdata.data.Global.TotalDeaths,
        new: gdata.data.Global.NewDeaths,
      },
    };

    const isummary = {
      Confirmed: {
        data: gdata.data.Countries[76].TotalConfirmed,
        new: gdata.data.Countries[76].NewConfirmed,
      },
      Active: {
        data:
          gdata.data.Countries[76].TotalConfirmed -
          (gdata.data.Countries[76].TotalDeaths +
            gdata.data.Countries[76].TotalRecovered),
      },
      Recovered: {
        data: gdata.data.Countries[76].TotalRecovered,
        new: gdata.data.Countries[76].NewRecovered,
      },
      Deaths: {
        data: gdata.data.Countries[76].TotalDeaths,
        new: gdata.data.Countries[76].NewDeaths,
      },
    };

    const india = {};
    india.labels = [];
    const conf = {
      label: "Confirmed",
      backgroundColor: "rgb(255, 255, 255, 0.1)",
      borderColor: "#ff073a",
      data: [],
    };
    const act = {
      label: "Active",
      backgroundColor: "rgb(255, 255, 255, 0.1)",
      borderColor: "#007bff",
      data: [],
    };
    const deaths = {
      label: "Deaths",
      backgroundColor: "rgb(255, 255, 255, 0.1)",
      borderColor: "#6c757d",
      data: [],
    };
    const rec = {
      label: "Recovered",
      backgroundColor: "rgb(255, 255, 255, 0.1)",
      borderColor: "#28a745",
      data: [],
    };
    idata.data.forEach((obj) => {
      india.labels.push(obj.Date.replace("T00:00:00Z", ""));
      conf.data.push(obj.Confirmed);
      act.data.push(obj.Active);
      rec.data.push(obj.Recovered);
      deaths.data.push(obj.Deaths);
    });
    india.datasets = [];
    india.datasets.push(conf);
    india.datasets.push(act);
    india.datasets.push(rec);
    india.datasets.push(deaths);

    return {
      global: global,
      countries: gdata.data.Countries,
      india: india,
      isummary: isummary,
    };
  } catch (error) {}
};
