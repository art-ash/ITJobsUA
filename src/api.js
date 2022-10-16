import axios from "axios";
import queryString from "query-string";
import { transformXML } from "./helper";

export const api = {
  async fetchJobs(search, city, category) {
    let url = "https://jobs.dou.ua/vacancies/feeds/?";
    const p = {};

    if (search) {
      p.search = search;
    }
    if (city) {
      p.city = city;
    }
    if (category) {
      p.category = category;
    }

    url += queryString.stringify(p);

    const response = await axios.get(url);
    const offers = transformXML(response.data);

    return offers;
  },
};
