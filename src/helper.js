import { v4 as uuidv4 } from "uuid";

export const transformXML = (xml) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");
  const itemNodes = xmlDoc.getElementsByTagName("item");
  const offers = [];

  for (let i = 0; i < itemNodes.length; i++) {
    const itemNode = itemNodes[i];

    offers.push({
      id: uuidv4(),
      guid: itemNode.getElementsByTagName("guid")[0].innerHTML,
      link: itemNode.getElementsByTagName("link")[0].innerHTML,
      title: itemNode.getElementsByTagName("title")[0].innerHTML,
      description: itemNode.getElementsByTagName("description")[0].innerHTML,
      pubDate: itemNode.getElementsByTagName("pubDate")[0].innerHTML,
    });
  }

  return offers;
};
