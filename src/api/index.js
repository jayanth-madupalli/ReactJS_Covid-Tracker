import axios from "axios";

const url_global = "http://localhost:3000/summary.json";
const india = "http://localhost:3000/india.json";

export const fetchData = async () => {
  try {
    const gdata = await axios.get(url_global);
    const idata = await axios.get(india);
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

    return {
      global: global,
      countries: gdata.data.Countries,
      india: idata.data,
      isummary: isummary,
    };
  } catch (error) {}
};
