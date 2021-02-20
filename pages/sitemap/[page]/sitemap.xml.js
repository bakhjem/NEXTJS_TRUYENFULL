import { API_URL } from '../../../config/config'
const toUrl = (host, route) =>
  `<url><loc>http://www.${host}${route}</loc></url>`;

const createSitemap = (
  host,
  routes,
  novel
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map((route) => toUrl(host, route)).join("")}
    ${novel.map((novels) => toUrl(host, `/novel/${novels.idnovel}1`)).join("")}
    </urlset>`;

const Sitemap = (props) => {
  const routes = ["", "/about", "/novel"];
  const novel = props.data;  //You can fetch the products from an API

  const sitemap = createSitemap(props.req.headers.host, routes, novel.data);

  props.res.setHeader("Content-Type", "text/xml");
  props.res.write(sitemap);
  props.res.end();
  return props.res;
};

// Sitemap.getInitialProps = ({ res, req }) => {
//   const routes = ["", "/about", "/novel"];
//   const products = [123];  //You can fetch the products from an API
//   const sitemap = createSitemap(req.headers.host, routes, products);

//   res.setHeader("Content-Type", "text/xml");
//   res.write(sitemap);
//   res.end();
//   return res;
// };
Sitemap.getInitialProps = async (context) => {
  const { page } = context.query
  const req = context.req
  const res = context.res
  const ress = await fetch(`${API_URL}update?page=${page}`)
  const json = await ress.json()
  // console.log(json)
  return { data: json, res, req }

}
export default Sitemap;